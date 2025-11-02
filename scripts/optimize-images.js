import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create optimized images directory
const optimizedDir = 'public/optimized';
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image optimization function
async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const {
      width = null,
      height = null,
      quality = 85,
      format = 'webp'
    } = options;

    let sharpInstance = sharp(inputPath);

    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    await sharpInstance
      .webp({ quality })
      .toFile(outputPath);

    console.log(`✅ Optimized: ${inputPath} → ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

// Main optimization function
async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');

  // Optimize logo
  await optimizeImage(
    'src/assets/logo.png',
    'public/optimized/logo.webp',
    { width: 200, height: 200, quality: 90 }
  );

  // Optimize carousel images
  for (let i = 1; i <= 7; i++) {
    await optimizeImage(
      `src/assets/carousel-${i}.png`,
      `public/optimized/carousel-${i}.webp`,
      { width: 800, height: 600, quality: 85 }
    );
  }

  // Optimize favicon
  await optimizeImage(
    'public/favicon-flamescheck.png',
    'public/optimized/favicon-flamescheck.webp',
    { width: 512, height: 512, quality: 90 }
  );

  // Optimize hero page image
  await optimizeImage(
    'public/heropageimage.png',
    'public/optimized/heropageimage.webp',
    { width: 800, height: 800, quality: 90 }
  );

  // Optimize pain point images
  await optimizeImage(
    'public/refreshingforclauseagain.png',
    'public/optimized/refreshingforclauseagain.webp',
    { width: 600, height: 900, quality: 85 }
  );

  await optimizeImage(
    'public/groupchatconfessions.png',
    'public/optimized/groupchatconfessions.webp',
    { width: 600, height: 900, quality: 85 }
  );

  await optimizeImage(
    'public/mindmovesonloop.png',
    'public/optimized/mindmovesonloop.webp',
    { width: 600, height: 900, quality: 85 }
  );

  console.log('\n🎉 Image optimization completed!');
}

// Run optimization
optimizeAllImages().catch(console.error);
