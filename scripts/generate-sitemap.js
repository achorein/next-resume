const fs = require('fs');
const globby = require('globby');

const SITE_URL = 'https://www.safiyoudine.fr';
const OUTPUT_DIR = 'out';

const computePageUrl = (page) => {
  if (page.includes('[id]')) {
    return page;
  }
  const path = page.replace(OUTPUT_DIR, '').replace('index.html', '');
  const route = path === '/index' ? '' : path;

  return `    <url>
        <loc>${SITE_URL}${route}</loc>
    </url>
`;
};

(async () => {
  const pages = await globby([
    `${OUTPUT_DIR}/**/*.html`,
    `!${OUTPUT_DIR}/404*`,
    `!${OUTPUT_DIR}/404/*`,
    `!${OUTPUT_DIR}/**/error/*`,
  ]);

  //   console.log(pages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map((page) => computePageUrl(page)).join('')}</urlset>
    `;

  console.log('write sitemap.xml');
  fs.writeFileSync('public/sitemap.xml', sitemap);
  fs.writeFileSync(`${OUTPUT_DIR}/sitemap.xml`, sitemap);
})();
