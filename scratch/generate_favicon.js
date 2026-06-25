const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve('public/images/logo.png');
const outputDir = path.resolve('app');

async function removeWhite(inputBuffer, threshold = 230) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      pixels[i + 3] = 0; // transparent
    }
  }

  return sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 }
  }).png().toBuffer();
}

async function generateFavicons() {
  const meta = await sharp(inputPath).metadata();
  console.log('Logo dimensions:', meta.width, 'x', meta.height);

  // Crop 85px — full V icon mark, confirmed correct
  const cropped = await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 85, height: meta.height })
    .png()
    .toBuffer();

  // Remove all white pixels → transparent. NO TRIM — keeps icon intact.
  const transparent = await removeWhite(cropped, 230);

  // Save to square canvas with transparent background
  async function generate(size, outPath) {
    const buf = await sharp(transparent)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // fully transparent
      })
      .png()
      .toBuffer();
    fs.writeFileSync(outPath, buf);
    console.log(`Written: ${outPath} (${size}x${size})`);
  }

  await generate(512, path.join(outputDir, 'icon.png'));
  await generate(180, path.join(outputDir, 'apple-icon.png'));
  await generate(32,  path.join(outputDir, 'favicon.ico'));
  await generate(32,  path.resolve('public/favicon.ico'));
  await generate(32,  path.resolve('public/favicon-32x32.png'));
  await generate(16,  path.resolve('public/favicon-16x16.png'));
  await generate(512, path.resolve('public/images/v-icon.png'));

  console.log('\nDone — V icon, fully transparent background, no white.');
}

generateFavicons().catch(err => { console.error(err); process.exit(1); });
