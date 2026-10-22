// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const layoutFile = new URL('./src/data/graph-layout.json', import.meta.url);

// Dev-only endpoint used by the graph layout editor to save node positions
const graphLayoutEditor = {
  name: 'graph-layout-editor',
  apply: /** @type {const} */ ('serve'),
  /** @param {import('vite').ViteDevServer} server */
  configureServer(server) {
    server.middlewares.use('/__graph-layout', (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.end('method not allowed');
        return;
      }
      let body = '';
      req.on('data', (chunk) => (body += chunk));
      req.on('end', () => {
        try {
          const layout = JSON.parse(body);
          const valid = Object.values(layout).every(
            (pos) => Array.isArray(pos) && pos.length === 2 && pos.every((v) => Number.isFinite(v)),
          );
          if (!valid) throw new Error('invalid layout');
          fs.writeFileSync(layoutFile, JSON.stringify(layout, null, 2) + '\n');
          res.end('ok');
        } catch (error) {
          res.statusCode = 400;
          res.end(String(error));
        }
      });
    });
  },
};

export default defineConfig({
  // Public URL of the site once deployed on GitHub Pages
  site: 'https://marghenecchi.github.io',
  integrations: [mdx()],
  vite: { plugins: [graphLayoutEditor] },
});
