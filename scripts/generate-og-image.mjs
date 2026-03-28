import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'public', 'og');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1B3A6B;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#2d5aa0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1B3A6B;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#A78BFA;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative circles -->
  <circle cx="950" cy="120" r="200" fill="rgba(255,255,255,0.03)" />
  <circle cx="1050" cy="450" r="150" fill="rgba(255,255,255,0.03)" />
  <circle cx="200" cy="500" r="120" fill="rgba(255,255,255,0.02)" />

  <!-- Grid dots pattern -->
  ${Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 15 }, (_, col) =>
      `<circle cx="${80 + col * 75}" cy="${80 + row * 70}" r="1.5" fill="rgba(255,255,255,0.08)" />`
    ).join('')
  ).join('')}

  <!-- Top accent line -->
  <rect x="80" y="160" width="60" height="4" rx="2" fill="url(#accent)" />

  <!-- Title: Open -->
  <text x="80" y="230" font-family="'Helvetica Neue', Arial, sans-serif" font-size="72" font-weight="800" fill="#FFFFFF" letter-spacing="-2">
    Open<tspan fill="url(#accent)">Claw</tspan>
  </text>

  <!-- Subtitle -->
  <text x="80" y="290" font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="400" fill="rgba(255,255,255,0.85)">
    AI Learning Platform
  </text>

  <!-- Description line 1 -->
  <text x="80" y="360" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="300" fill="rgba(255,255,255,0.6)">
    AI, Programming, Data Science
  </text>

  <!-- Description line 2 -->
  <text x="80" y="395" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="300" fill="rgba(255,255,255,0.6)">
    Prompt Engineering &amp; More
  </text>

  <!-- Feature badges -->
  <rect x="80" y="440" width="120" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
  <text x="140" y="461" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">100+ Terms</text>

  <rect x="215" y="440" width="140" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
  <text x="285" y="461" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">40 Prompts</text>

  <rect x="370" y="440" width="130" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
  <text x="435" y="461" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">4 Roadmaps</text>

  <rect x="515" y="440" width="100" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
  <text x="565" y="461" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">Free</text>

  <!-- Bottom bar -->
  <rect x="0" y="580" width="${WIDTH}" height="50" fill="rgba(0,0,0,0.2)" />
  <text x="80" y="612" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.6)">
    openclaw.dreamitbiz.com
  </text>
  <text x="1120" y="612" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="400" fill="rgba(255,255,255,0.4)" text-anchor="end">
    by DreamIT Biz
  </text>

  <!-- Right side decorative icon placeholder -->
  <g transform="translate(880, 180)">
    <!-- Brain/AI icon shape -->
    <circle cx="120" cy="120" r="100" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <circle cx="120" cy="120" r="70" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" />
    <circle cx="120" cy="120" r="40" fill="rgba(255,255,255,0.05)" />
    <!-- Connection lines -->
    <line x1="120" y1="20" x2="120" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <line x1="120" y1="160" x2="120" y2="220" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <line x1="20" y1="120" x2="80" y2="120" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <line x1="160" y1="120" x2="220" y2="120" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <!-- Nodes -->
    <circle cx="120" cy="20" r="6" fill="rgba(96,165,250,0.5)" />
    <circle cx="120" cy="220" r="6" fill="rgba(167,139,250,0.5)" />
    <circle cx="20" cy="120" r="6" fill="rgba(96,165,250,0.5)" />
    <circle cx="220" cy="120" r="6" fill="rgba(167,139,250,0.5)" />
    <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.15)" />
    <circle cx="190" cy="50" r="4" fill="rgba(255,255,255,0.15)" />
    <circle cx="50" cy="190" r="4" fill="rgba(255,255,255,0.15)" />
    <circle cx="190" cy="190" r="4" fill="rgba(255,255,255,0.15)" />
  </g>
</svg>
`;

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png({ quality: 95 })
      .toFile(path.join(outputDir, 'default.png'));

    console.log('OG image generated: public/og/default.png (1200x630)');
  } catch (err) {
    console.error('Failed to generate OG image:', err);
  }
}

generate();
