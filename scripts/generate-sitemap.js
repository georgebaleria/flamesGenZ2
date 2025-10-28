import fs from 'fs';
import path from 'path';

// Sitemap configuration
const SITEMAP_CONFIG = {
  baseUrl: 'https://flamescheck.com',
  pages: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'daily',
      lastmod: new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
    }
    // Add new pages here as you create them
    // {
    //   path: '/about',
    //   priority: '0.8',
    //   changefreq: 'weekly',
    //   lastmod: '2025-10-28'
    // }
  ]
};

// Generate XML sitemap
function generateSitemap() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';
  
  let sitemapContent = xmlHeader + urlsetOpen;
  
  SITEMAP_CONFIG.pages.forEach(page => {
    sitemapContent += '  <url>\n';
    sitemapContent += `    <loc>${SITEMAP_CONFIG.baseUrl}${page.path}</loc>\n`;
    sitemapContent += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemapContent += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemapContent += `    <priority>${page.priority}</priority>\n`;
    sitemapContent += '  </url>\n';
  });
  
  sitemapContent += urlsetClose;
  
  return sitemapContent;
}

// Save sitemap to file
function saveSitemap() {
  const sitemapContent = generateSitemap();
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log('📄 Sitemap content:');
    console.log(sitemapContent);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

// Add new page to sitemap
function addPageToSitemap(pageConfig) {
  SITEMAP_CONFIG.pages.push({
    path: pageConfig.path,
    priority: pageConfig.priority || '0.8',
    changefreq: pageConfig.changefreq || 'weekly',
    lastmod: pageConfig.lastmod || new Date().toISOString().split('T')[0]
  });
  
  console.log(`✅ Added page: ${pageConfig.path}`);
  saveSitemap();
}

// Update lastmod for a specific page
function updatePageLastmod(pagePath) {
  const page = SITEMAP_CONFIG.pages.find(p => p.path === pagePath);
  if (page) {
    page.lastmod = new Date().toISOString().split('T')[0];
    console.log(`✅ Updated lastmod for: ${pagePath}`);
    saveSitemap();
  } else {
    console.error(`❌ Page not found: ${pagePath}`);
  }
}

// Export functions for use in other files
export { generateSitemap, saveSitemap, addPageToSitemap, updatePageLastmod };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  saveSitemap();
}
