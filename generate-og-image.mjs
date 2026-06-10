import puppeteer from 'puppeteer'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, 'public', 'og-image.jpg')

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

  body {
    width: 1200px;
    height: 630px;
    font-family: 'Sora', sans-serif;
    background: linear-gradient(135deg, #0A2E5C 0%, #0D3B72 40%, #1A4F8B 100%);
    color: white;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .glow {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.15);
    filter: blur(80px);
    top: -100px;
    right: -50px;
  }

  .glow2 {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.1);
    filter: blur(60px);
    bottom: -80px;
    left: 100px;
  }

  .content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 70px;
    width: 100%;
  }

  .logo-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 40px;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
    background: rgba(255,255,255,0.12);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.15);
  }

  .logo-name {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.3px;
  }

  .logo-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.55);
    font-weight: 400;
  }

  h1 {
    font-size: 52px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -1.5px;
    margin-bottom: 20px;
  }

  h1 .accent {
    background: linear-gradient(90deg, #60A5FA, #34D399);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    font-size: 20px;
    color: rgba(255,255,255,0.7);
    line-height: 1.5;
    max-width: 700px;
    margin-bottom: 40px;
  }

  .badges {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(4px);
  }

  .badge .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .badge.green .dot { background: #34D399; }
  .badge.blue .dot { background: #60A5FA; }
  .badge.orange .dot { background: #FBBF24; }

  .stats {
    position: absolute;
    right: 70px;
    bottom: 60px;
    display: flex;
    gap: 36px;
    z-index: 2;
  }

  .stat {
    text-align: center;
  }

  .stat-num {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .stat-label {
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .location {
    position: absolute;
    bottom: 64px;
    left: 70px;
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 2;
  }
</style>
</head>
<body>
  <div class="grid-overlay"></div>
  <div class="glow"></div>
  <div class="glow2"></div>

  <div class="content">
    <div class="logo-row">
      <div class="logo-icon" style="padding: 6px;">
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="28" r="14" stroke="#F7931E" stroke-width="2.5" fill="none"/>
          <circle cx="32" cy="28" r="5.5" stroke="#F7931E" stroke-width="1.5" fill="none"/>
          <line x1="32" y1="14" x2="32" y2="19.5" stroke="#F7931E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="32" y1="36.5" x2="32" y2="42" stroke="#F7931E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="18" y1="28" x2="23.5" y2="28" stroke="#F7931E" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="40.5" y1="28" x2="46" y2="28" stroke="#F7931E" stroke-width="1.5" stroke-linecap="round"/>
          <text x="32" y="56" text-anchor="middle" font-family="Sora, sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="white">SEE</text>
        </svg>
      </div>
      <div>
        <div class="logo-name">SEE Imaging</div>
        <div class="logo-sub">Advanced Diagnostic Solutions</div>
      </div>
    </div>

    <h1>
      Refurbished <span class="accent">GE CT Scan</span><br>
      & MRI Systems
    </h1>

    <p class="tagline">
      Single Slice to 128 Slice CT Scanners. Sales, installation, AMC/CMC contracts, spare parts, and pan India service support.
    </p>

    <div class="badges">
      <div class="badge green"><span class="dot"></span>CT Scanners Available</div>
      <div class="badge blue"><span class="dot"></span>Pan India Service</div>
      <div class="badge orange"><span class="dot"></span>Spare Parts In Stock</div>
    </div>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-num">100+</div>
      <div class="stat-label">Installations</div>
    </div>
    <div class="stat">
      <div class="stat-num">15+</div>
      <div class="stat-label">Years Exp.</div>
    </div>
    <div class="stat">
      <div class="stat-num">20+</div>
      <div class="stat-label">Cities</div>
    </div>
  </div>

  <div class="location">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    seeimaging.com
  </div>
</body>
</html>`

async function generate() {
  console.log('Generating OG image...')
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  await page.setContent(html, { waitUntil: 'networkidle0' })

  await page.screenshot({
    path: OUTPUT,
    type: 'jpeg',
    quality: 90,
  })

  await browser.close()
  console.log(`OG image saved to: ${OUTPUT}`)
}

generate()
