const sharp = require('sharp');
const path = require('path');

async function resizeImage() {
  const inputPath = './Abhinav.jpg';
  const outputPath = './src/assets/images/Abhinav.jpg';

  // Target dimensions for 3:4 ratio
  // Using 900x1200 for good quality
  const targetWidth = 900;
  const targetHeight = 1200;

  await sharp(inputPath)
    .resize(targetWidth, targetHeight, {
      fit: 'cover',
      position: sharp.strategy.entropy
    })
    .jpeg({ quality: 90 })
    .toFile(outputPath + '.tmp');

  // Replace original with resized
  const fs = require('fs');
  fs.renameSync(outputPath + '.tmp', outputPath);

  console.log(`Resized Abhinav.jpg to ${targetWidth}x${targetHeight} (3:4 ratio)`);
}

resizeImage().catch(console.error);
