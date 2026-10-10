// One-time tool: redraw the cards of the customer stories recovered from the Wayback Machine.
//
// Their 2022 feature images put the company's logo mark on a lavender panel, which looks out
// of place next to the current cards (a mark or wordmark on a white rounded panel, 1110x378).
// This takes each mark off the lavender and centers it on the same white panel, cut from
// hive@3x.png. content/ghost/overrides.json points the stories at the results.
//
// Usage: node bin/archive/redraw-story-cards.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.join(__dirname, '..', '..', 'public', 'blog-assets', 'images');
const OUT = path.join(IMAGES, 'customer-stories');
const TEMPLATE = '2024/05/hive@3x.png';
const MARK_HEIGHT = 170;
const MARK_MAX_WIDTH = 520;

const SOURCES = {
  xchange: { file: '2022/09/Group-1892.png' },
  // Airbank's mark sits on a light beige app-icon tile, which reads as an off-color box on white.
  airbank: { file: '2022/09/Frame-1620.png', whitenLight: true, height: 130 },
  crew: { file: '2022/06/crew-featured-image.png' },
  multis: { file: '2022/06/Frame-1613.png' },
  hera: { file: '2022/06/Frame-1612.png' },
};

/** The logo mark of a 2022 card, on white, cropped to its bounding box. */
async function extractMark(file, whitenLight) {
  const { data, info } = await sharp(path.join(IMAGES, file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const px = (x, y) => data.subarray((y * width + x) * 4, (y * width + x) * 4 + 4);
  // The panel color, sampled near the panel's left edge; keep the area inside its rounded corners.
  const panel = px(Math.round(width * 0.05), Math.round(height / 2));
  const mx = Math.round(width * 0.04);
  const my = Math.round(height * 0.06);
  const w = width - 2 * mx;
  const h = height - 2 * my;
  const out = Buffer.alloc(w * h * 4);
  let [minX, minY, maxX, maxY] = [w, h, -1, -1];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [r, g, b, a] = px(x + mx, y + my);
      // Shift colors close to the panel color (including anti-aliased edges) towards white.
      const distance = Math.max(Math.abs(r - panel[0]), Math.abs(g - panel[1]), Math.abs(b - panel[2]));
      const t = Math.max(0, 1 - distance / 64);
      let rgb = [r, g, b].map((v, i) => Math.min(255, v + (255 - panel[i]) * t));
      rgb = rgb.map((v) => v * (a / 255) + 255 * (1 - a / 255));
      if (whitenLight) {
        const f = Math.max(0, Math.min(1, (Math.min(...rgb) - 200) / 30));
        rgb = rgb.map((v) => v + (255 - v) * f);
      }
      rgb = rgb.map(Math.round);
      out.set([...rgb, 255], (y * w + x) * 4);
      if (Math.max(...rgb.map((v) => 255 - v)) > 10) {
        [minX, minY, maxX, maxY] = [Math.min(minX, x), Math.min(minY, y), Math.max(maxX, x), Math.max(maxY, y)];
      }
    }
  }
  const pad = 2;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  return sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left, top, width: Math.min(w - left, maxX - minX + 1 + 2 * pad), height: Math.min(h - top, maxY - minY + 1 + 2 * pad) })
    .png()
    .toBuffer();
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const template = await sharp(path.join(IMAGES, TEMPLATE)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = template.info;
  const card = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) card.set([255, 255, 255, template.data[i * 4 + 3]], i * 4);

  for (const [slug, { file, whitenLight = false, height = MARK_HEIGHT }] of Object.entries(SOURCES)) {
    const mark = await sharp(await extractMark(file, whitenLight))
      .resize({ height, width: MARK_MAX_WIDTH, fit: 'inside' })
      .png()
      .toBuffer({ resolveWithObject: true });
    const target = path.join(OUT, `${slug}@3x.png`);
    await sharp(card, { raw: { width: W, height: H, channels: 4 } })
      .composite([{ input: mark.data, left: Math.round((W - mark.info.width) / 2), top: Math.round((H - mark.info.height) / 2) }])
      .png({ compressionLevel: 9 })
      .toFile(target);
    console.log(`Wrote ${path.relative(process.cwd(), target)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
