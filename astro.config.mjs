// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical home is the public domain. SITE_URL / SITE_BASE exist only for
// one-off builds that must live somewhere else (a sub-path preview, say).
const site = process.env.SITE_URL ?? 'https://abjelosevic.com';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
