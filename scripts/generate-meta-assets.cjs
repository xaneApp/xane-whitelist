const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const root = path.resolve(__dirname, '..');
  
  // 1. Extract pure logo mark without text
  const iconBuffer = await sharp(path.join(root, 'src/assets/Xanelogo.png'))
    .extract({ left: 182, top: 16, width: 124, height: 117 })
    .toBuffer();
    
  fs.writeFileSync(path.join(root, 'public/xane-icon.png'), iconBuffer);
  fs.writeFileSync(path.join(root, 'src/assets/xane-icon.png'), iconBuffer);

  // 2. Favicon (square 64x64 and 32x32)
  await sharp(iconBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'public/favicon.png'));

  await sharp(iconBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'public/favicon.ico'));

  // 3. Crisp white logo mark on #0047FF for OpenGraph (1200x630)
  // Let's create an SVG with the Xane mark and "xane"
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#0047FF"/>
      <!-- Background subtle floating circles -->
      <circle cx="120" cy="480" r="50" fill="#111111" opacity="0.25"/>
      <circle cx="1080" cy="160" r="40" fill="#111111" opacity="0.25"/>
      <circle cx="850" cy="490" r="25" fill="#111111" opacity="0.25"/>

      <!-- Center Logo Box (white rounded card) -->
      <rect x="475" y="140" width="250" height="230" rx="36" fill="#ffffff" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.25))"/>

      <!-- Main Title -->
      <text x="600" y="445" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="-1px">xane</text>
      <text x="600" y="500" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">Your crypto now works like money</text>
    </svg>
  `;

  const resizedBlueIcon = await sharp(iconBuffer)
    .resize(170, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(Buffer.from(ogSvg))
    .composite([
      { input: resizedBlueIcon, top: 175, left: 515 }
    ])
    .png()
    .toFile(path.join(root, 'public/og-image.png'));

  console.log('Done! Generated public/xane-icon.png, public/favicon.png, public/favicon.ico, public/og-image.png without XaneGlobal');
}

run().catch(console.error);
