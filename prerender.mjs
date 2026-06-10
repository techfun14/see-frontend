import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, 'dist')
const PORT = 4173

// ── All public routes to prerender ──────────────────────
const ROUTES = [
  '/',
  '/products',
  '/products/ge-ct-scanner-single-dual-slice',
  '/products/ge-ct-scanner-4-8-slice',
  '/products/ge-ct-scanner-16-32-slice',
  '/products/ge-ct-scanner-64-128-slice',
  '/products/ge-brivo-325-dual-slice',
  '/products/ge-brivo-385-16-slice',
  '/products/ge-revolutionary-4-slice',
  '/products/ge-revolutionary-16-slice',
  '/products/ge-revolutionary-expert',
  '/products/ge-mri-system',
  '/products/ge-ct-scan-spare-parts',
  '/services',
  '/services/breakdown-repair',
  '/services/preventive-maintenance',
  '/services/amc',
  '/services/cmc',
  '/services/installation-dismantling',
  '/services/spare-parts-supply-repair',
  '/services/technical-consultation',
  '/about',
  '/contact',
]

function getMimeType(filePath) {
  const ext = filePath.split('.').pop()
  const types = {
    html: 'text/html', js: 'application/javascript', css: 'text/css',
    json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
    jpeg: 'image/jpeg', svg: 'image/svg+xml', ico: 'image/x-icon',
    woff: 'font/woff', woff2: 'font/woff2', txt: 'text/plain',
    xml: 'application/xml', webp: 'image/webp',
  }
  return types[ext] || 'application/octet-stream'
}

function startServer() {
  return new Promise((res) => {
    const server = createServer((req, resp) => {
      let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url)

      if (!existsSync(filePath) || filePath.indexOf('.') === -1) {
        filePath = join(DIST, 'index.html')
      }

      try {
        const content = readFileSync(filePath)
        resp.writeHead(200, { 'Content-Type': getMimeType(filePath) })
        resp.end(content)
      } catch {
        resp.writeHead(404)
        resp.end('Not found')
      }
    })

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`)
      res(server)
    })
  })
}

/**
 * Clean up the prerendered HTML:
 * - Remove duplicate meta tags (index.html defaults vs Helmet-injected)
 * - Remove data-rh="true" attributes (Helmet internals)
 * - Ensure only Helmet-managed tags win
 */
function cleanHtml(html) {
  // Remove Helmet internal markers
  html = html.replace(/ data-rh="true"/g, '')
  // Remove data-react-helmet attributes
  html = html.replace(/ data-react-helmet="true"/g, '')
  return html
}

async function prerender() {
  console.log('\n╔═══════════════════════════════════════════╗')
  console.log('║  SEE Imaging — Prerendering for SEO       ║')
  console.log('╚═══════════════════════════════════════════╝\n')

  const server = await startServer()
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  // Block heavy resources during prerender (faster)
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const type = req.resourceType()
    if (['image', 'media', 'font'].includes(type)) {
      req.abort()
    } else {
      req.continue()
    }
  })

  let success = 0
  let failed = 0

  for (const route of ROUTES) {
    try {
      const url = `http://localhost:${PORT}${route}`
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 })

      // Wait for React to render
      await page.waitForFunction(
        () => document.querySelector('#root')?.children.length > 0,
        { timeout: 12000 }
      )

      // Wait a tick for Helmet to inject meta tags
      await page.evaluate(() => new Promise(r => setTimeout(r, 500)))

      let html = await page.content()
      html = cleanHtml(html)

      const dir = route === '/'
        ? DIST
        : resolve(DIST, route.slice(1))

      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      writeFileSync(join(dir, 'index.html'), html, 'utf-8')
      console.log(`  ✓  ${route}`)
      success++
    } catch (err) {
      console.error(`  ✗  ${route} — ${err.message}`)
      failed++
    }
  }

  await browser.close()
  server.close()

  console.log(`\n  Done: ${success} pages prerendered, ${failed} failed.\n`)

  if (failed > 0) {
    process.exit(1)
  }
}

prerender()
