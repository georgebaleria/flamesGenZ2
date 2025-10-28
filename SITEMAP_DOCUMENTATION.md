# XML Sitemap for Flames Check Website

## 📄 Generated Files

### 1. Static Sitemap
- **File**: `public/sitemap.xml`
- **URL**: `https://flamescheck.com/sitemap.xml`
- **Purpose**: Static XML sitemap for search engines

### 2. Dynamic Generator
- **File**: `scripts/generate-sitemap.js`
- **Purpose**: JavaScript script to dynamically generate sitemap

### 3. Robots.txt
- **File**: `public/robots.txt`
- **URL**: `https://flamescheck.com/robots.txt`
- **Purpose**: Tells search engines where to find the sitemap

## 🚀 How to Use

### Generate Sitemap
```bash
npm run sitemap
```

### Add New Pages
Edit `scripts/generate-sitemap.js` and add pages to the `SITEMAP_CONFIG.pages` array:

```javascript
{
  path: '/about',
  priority: '0.8',
  changefreq: 'weekly',
  lastmod: '2025-10-28'
}
```

### Update Page Last Modified Date
```javascript
import { updatePageLastmod } from './scripts/generate-sitemap.js';
updatePageLastmod('/');
```

## 📊 Sitemap Structure

### Current Pages
- **Homepage**: `https://flamescheck.com/`
  - Priority: 1.0 (highest)
  - Change Frequency: daily
  - Last Modified: 2025-10-28

### XML Format
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://flamescheck.com/</loc>
    <lastmod>2025-10-28</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔧 Configuration Options

### Priority Values
- **1.0**: Homepage (highest priority)
- **0.8**: Important pages (About, Contact)
- **0.6**: Secondary pages (FAQ, Blog)
- **0.4**: Less important pages

### Change Frequency
- **daily**: Homepage, frequently updated content
- **weekly**: Regular content pages
- **monthly**: Static pages
- **yearly**: Very static content

## 🧪 Testing Your Sitemap

### 1. Local Testing
```bash
# Check if sitemap is accessible
curl http://localhost:8080/sitemap.xml

# Validate XML syntax
xmllint --noout public/sitemap.xml
```

### 2. Online Validators
- **Google Search Console**: Submit sitemap URL
- **XML Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Screaming Frog**: SEO tool with sitemap validation

### 3. Browser Testing
Visit: `https://flamescheck.com/sitemap.xml`

## 📈 SEO Benefits

### Search Engine Discovery
- Helps Google, Bing, and other search engines find your pages
- Improves crawling efficiency
- Ensures all pages are indexed

### Priority Signals
- Tells search engines which pages are most important
- Influences crawling frequency
- Helps with page ranking

### Last Modified Dates
- Helps search engines understand content freshness
- Improves crawl efficiency
- Better indexing of updated content

## 🔄 Automation Options

### Build Process Integration
Add to your build script:
```json
{
  "scripts": {
    "build": "npm run sitemap && vite build"
  }
}
```

### GitHub Actions
```yaml
- name: Generate Sitemap
  run: npm run sitemap
```

### Cron Job (Server)
```bash
# Run daily at 2 AM
0 2 * * * cd /path/to/project && npm run sitemap
```

## 📝 Adding New Pages

### Method 1: Edit Configuration
1. Open `scripts/generate-sitemap.js`
2. Add new page to `SITEMAP_CONFIG.pages` array
3. Run `npm run sitemap`

### Method 2: Programmatic Addition
```javascript
import { addPageToSitemap } from './scripts/generate-sitemap.js';

addPageToSitemap({
  path: '/new-page',
  priority: '0.8',
  changefreq: 'weekly',
  lastmod: '2025-10-28'
});
```

## 🎯 Best Practices

### 1. Keep It Updated
- Update `lastmod` when content changes
- Regenerate sitemap after adding new pages
- Use appropriate `changefreq` values

### 2. File Size Limits
- Maximum 50,000 URLs per sitemap
- Maximum 50MB file size
- Split large sitemaps into multiple files

### 3. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Submit sitemap URL: `https://flamescheck.com/sitemap.xml`

## 🚨 Troubleshooting

### Common Issues
1. **404 Error**: Ensure sitemap.xml is in `public/` directory
2. **Invalid XML**: Check for syntax errors
3. **Not Indexed**: Submit to Google Search Console
4. **Outdated**: Regenerate sitemap regularly

### Validation Commands
```bash
# Check XML syntax
xmllint --noout public/sitemap.xml

# Test accessibility
curl -I https://flamescheck.com/sitemap.xml

# Validate with online tools
# Visit: https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

Your sitemap is now ready and will help search engines better understand and index your FLAMES calculator website! 🎉
