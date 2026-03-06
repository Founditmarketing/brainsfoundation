import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://briansfoundationrepair.com';

const routes = [
    '/',
    '/about',
    '/services',
    '/services/house-leveling',
    '/services/foundation-repair',
    '/services/concrete-leveling',
    '/free-inspection',
    '/gallery',
    // Locations
    '/locations/kirksville',
    '/locations/quincy',
    '/locations/hannibal',
    '/locations/macon',
    '/locations/macomb',
    '/locations/keokuk'
];

function generateSitemap() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(
                (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/locations') ? '0.9' : '0.8'}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap);
    console.log('✅ sitemap.xml generated successfully!');
}

function generateRobots() {
    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

    fs.writeFileSync(path.resolve('public/robots.txt'), robots);
    console.log('✅ robots.txt generated successfully!');
}

generateSitemap();
generateRobots();
