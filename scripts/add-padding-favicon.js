const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve('public/favicon/oxide-favicon.png');
// We'll write to a temp file first
const outputPath = path.resolve('public/favicon/oxide-favicon-padded.png');

console.log(`Processing: ${inputPath}`);

// Percentage of the canvas the logo should occupy (0.85 means 15% padding total, 7.5% on each side)
const SCALE_FACTOR = 0.85;

sharp(inputPath)
    .metadata()
    .then(metadata => {
        const width = metadata.width;
        const height = metadata.height;
        const size = Math.max(width, height);

        // Calculate new inner size
        const newWidth = Math.round(width * SCALE_FACTOR);
        const newHeight = Math.round(height * SCALE_FACTOR);

        return sharp(inputPath)
            .resize(newWidth, newHeight, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toBuffer()
            .then(resizedBuffer => {
                return sharp({
                    create: {
                        width: size,
                        height: size,
                        channels: 4,
                        background: { r: 0, g: 0, b: 0, alpha: 0 }
                    }
                })
                    .composite([{
                        input: resizedBuffer,
                        gravity: 'center'
                    }])
                    .toFile(outputPath);
            });
    })
    .then(info => {
        console.log('Successfully added padding to favicon:', info);
    })
    .catch(err => {
        console.error('Error processing image:', err);
        process.exit(1);
    });
