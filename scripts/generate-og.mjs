/**
 * One-off rasterizer: public/og.svg → public/og.png at 1200x630.
 * Run via `npm run og`. Output committed; sharp is dev-only.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const svgPath = resolve(root, "public/og.svg");
const pngPath = resolve(root, "public/og.png");

const svg = readFileSync(svgPath);
const png = await sharp(svg, { density: 144 })
  .resize(1200, 630, { fit: "fill" })
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(pngPath, png);
console.log(`Wrote ${pngPath} (${png.length.toLocaleString()} bytes)`);
