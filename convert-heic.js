const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

async function convertImage(inputPath, outputPath) {
  const inputBuffer = await fs.promises.readFile(inputPath);

  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 0.9
  });

  await fs.promises.writeFile(outputPath, outputBuffer);
  console.log(`Converted ${path.basename(inputPath)} to ${path.basename(outputPath)}`);
}

async function main() {
  await convertImage('./Band.heic', './Band.jpg');
  await convertImage('./siddarth.heic', './Siddharth.jpg');
  console.log('All images converted!');
}

main().catch(console.error);
