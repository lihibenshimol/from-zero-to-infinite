import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const existing = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
let maxN = 0;
for (const f of existing) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) maxN = Math.max(maxN, parseInt(m[1]));
}
const filename = `screenshot-${maxN + 1}${label}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 600));
// force all reveal elements visible so full-page screenshot shows everything
await page.evaluate(() => {
  document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    el.classList.add('in');
  });
});
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: ${filepath}`);
