import globby from 'globby';
import BackendService from '../services/Backend.service';

const SITE_URL = 'https://www.safiyoudine.fr';

const createSitemap = ({ casClients, servicesList }, pages) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page.replace('pages', '').replace('.js', '').replace('.md', '');
        const route = path === '/index' ? '' : path;
        return `
                  <url>
                      <loc>${`${SITE_URL}${route}`}</loc>
                  </url>
              `;
      })
      .join('')}
        ${casClients
          .map(({ permaliens }) => {
            return `
                    <url>
                        <loc>${`${SITE_URL}/prestations/${permaliens}`}</loc>
                    </url>
                `;
          })
          .join('')}
          ${servicesList
            .map(({ permaliens }) => {
              return `
                      <url>
                          <loc>${`${SITE_URL}/cas-clients/${permaliens}`}</loc>
                      </url>
                  `;
            })
            .join('')}
    </urlset>
    `;
};

const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/sitemap*.js',
    '!pages/404*.js',
  ]);
  const { data: casClients } = await BackendService.findAllCasClients();
  const { data: servicesList } = await BackendService.findServicesAll();

  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap({ casClients, servicesList }, pages));
  res.end();
  return { props: {} };
}

export default Sitemap;
