import sharp from 'sharp';
import fs from 'fs';

// Create responsive images directory
const responsiveDir = 'public/responsive';
if (!fs.existsSync(responsiveDir)) {
  fs.mkdirSync(responsiveDir, { recursive: true });
}

// Generate responsive images
async function generateResponsiveImages() {
  console.log('🚀 Generating responsive images...\n');

  // Generate responsive versions for logo
  const logoSizes = [
    { width: 48, height: 48, suffix: 'sm' },
    { width: 96, height: 96, suffix: 'md' },
    { width: 192, height: 192, suffix: 'lg' }
  ];

  for (const size of logoSizes) {
    await sharp('src/assets/logo.png')
      .resize(size.width, size.height)
      .webp({ quality: 90 })
      .toFile(`public/responsive/logo-${size.suffix}.webp`);
    console.log(`✅ Generated logo-${size.suffix}.webp (${size.width}x${size.height})`);
  }

  // Generate responsive versions for carousel images
  const carouselSizes = [
    { width: 400, height: 300, suffix: 'sm' },
    { width: 800, height: 600, suffix: 'md' },
    { width: 1200, height: 900, suffix: 'lg' }
  ];

  for (let i = 1; i <= 7; i++) {
    for (const size of carouselSizes) {
      await sharp(`src/assets/carousel-${i}.png`)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(`public/responsive/carousel-${i}-${size.suffix}.webp`);
    }
    console.log(`✅ Generated responsive carousel-${i} images`);
  }

  console.log('\n🎉 Responsive image generation completed!');
}

generateResponsiveImages().catch(console.error);
