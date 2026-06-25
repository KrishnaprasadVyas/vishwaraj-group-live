const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return `${width}x${height}`;
  } catch (err) {
    return 'Error reading';
  }
}

const dir = 'public/images';
const files = fs.readdirSync(dir);
files.forEach(file => {
  if (file.endsWith('.png')) {
    const dimensions = getPngDimensions(path.join(dir, file));
    console.log(`${file}: ${dimensions}`);
  }
});
