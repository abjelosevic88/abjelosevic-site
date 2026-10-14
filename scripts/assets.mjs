// Generates the static share image and PNG icons into public/.
// Run with `pnpm assets` after changing the portrait, name or title.
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';

const [first, last] = ['Aleksandar', 'Bjelošević'];
const title = 'Senior Software Engineer · Technology Lead';
const line = 'LLM systems · Go · React · self-hosted';
const domain = 'abjelosevic.com';

await mkdir('public', { recursive: true });

// --- Open Graph image, 1200x630, in the site's terminal look -----------------
const portrait = await sharp('src/assets/avatar.jpg')
  .resize(326, 326, { fit: 'cover' })
  .grayscale()
  .linear(1.1, -10)
  .png()
  .toBuffer();

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#1e2c1e" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0a0e0a"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="#2f452f" stroke-width="2"/>
  <g font-family="DejaVu Sans Mono, Liberation Mono, Menlo, monospace">
    <text x="80" y="140" font-size="22" fill="#4ade80">$ whoami</text>
    <text x="80" y="225" font-size="56" font-weight="bold" fill="#d7e4d0">${esc(first)}</text>
    <text x="80" y="290" font-size="56" font-weight="bold" fill="#d7e4d0">${esc(last)}<tspan fill="#4ade80">_</tspan></text>
    <text x="80" y="352" font-size="24" font-weight="bold" fill="#86efac">${esc(title)}</text>
    <text x="80" y="400" font-size="21" fill="#8fa58a">${esc(line)}</text>
    <text x="80" y="545" font-size="22" fill="#7a9074">${domain}</text>
  </g>
  <rect x="790" y="150" width="330" height="330" fill="#4ade80"/>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: portrait, left: 792, top: 152 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');

// --- PNG icons from the SVG favicon ------------------------------------------
const favicon = await readFile('public/favicon.svg');
for (const [file, size] of [
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  await sharp(favicon, { density: 384 }).resize(size, size).png().toFile(`public/${file}`);
}

console.log('wrote public/og.png and icons');
