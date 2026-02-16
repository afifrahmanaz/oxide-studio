const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.resolve('public/favicon/oxide-favicon.png');
const outputPath = path.resolve('public/favicon/oxide-favicon-cropped.png');

console.log(`Processing: ${inputPath}`);

sharp(inputPath)
    .trim() // Automatically crop transparent background
    .toBuffer((err, buffer, info) => {
        if (err) {
            console.error('Error processing image:', err);
            process.exit(1);
        }

        // Check if the image is square, if not, pad it to be square
        const maxDim = Math.max(info.width, info.height);

        sharp(buffer)
            .resize(maxDim, maxDim, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toFile(outputPath, (writeErr, writeInfo) => {
                if (writeErr) {
                    console.error('Error writing file:', writeErr);
                    process.exit(1);
                }
                console.log('Successfully cropped and resized image:', writeInfo);
            });
    });
