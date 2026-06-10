import puppeteer from 'puppeteer'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body { width: 256px; height: 256px; }
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0D3B72"/>
      <stop offset="100%" stop-color="#0A2E5C"/>
    </linearGradient>
    <linearGradient id="gold" x1="48" y1="4" x2="16" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E0B840"/>
      <stop offset="45%" stop-color="#D4A437"/>
      <stop offset="100%" stop-color="#B8851F"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#bg)"/>
  <path d="M 17 10 A 24 24 0 1 1 17 46 A 20 20 0 1 0 17 10 Z" fill="url(#gold)"/>
  <circle cx="31" cy="28" r="16" stroke="white" stroke-width="3" fill="none"/>
  <rect x="29" y="13" width="4" height="3" rx="1" fill="white" opacity="0.8"/>
  <line x1="11" y1="34" x2="51" y2="34" stroke="url(#gold)" stroke-width="2" stroke-linecap="round"/>
  <line x1="16" y1="38" x2="46" y2="38" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M 19 39 Q 31 50 43 39 Z" fill="white"/>
</svg>
</body>
</html>`

async function generate() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 256, height: 256 })
  await page.setContent(html, { waitUntil: 'load', timeout: 10000 })
  await page.screenshot({ path: resolve(__dirname, 'public', 'favicon-192.png'), type: 'png' })

  await page.setViewport({ width: 32, height: 32 })
  await page.setContent(html.replace(/width="256"/g, 'width="32"').replace(/height="256"/g, 'height="32"'), { waitUntil: 'load', timeout: 10000 })
  await page.screenshot({ path: resolve(__dirname, 'public', 'favicon-32.png'), type: 'png' })

  await browser.close()
  console.log('Favicons generated: favicon-192.png, favicon-32.png')
}

generate()
