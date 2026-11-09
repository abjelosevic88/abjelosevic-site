// Copies the Pocket app catalogue from the pockethomelab.com repo into src/data/pocket.json,
// slimmed to what this page shows. Run after apps are added there: `pnpm sync:pocket`.
// Source repo defaults to ../pocket-homelab-web; override with POCKET_WEB=/path/to/repo.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const web = resolve(process.env.POCKET_WEB ?? new URL('../../pocket-homelab-web', import.meta.url).pathname);
const data = join(web, 'src/data');

const catalogue = JSON.parse(readFileSync(join(data, 'pocket-apps.json'), 'utf8'));

const apps = catalogue.apps.map((a) => ({
  slug: a.slug,
  name: a.name,
  category: a.category,
  summary: a.summary,
  replaces: a.replaces ?? [],
  version: a.version,
  github: a.github,
}));

const nativeOrder = ['launcher', 'studio', 'files', 'ai', 'voice', 'bookshelf', 'remote', 'sphere'];
const native = readdirSync(join(data, 'native'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(data, 'native', f), 'utf8')))
  .map((n) => ({ slug: n.slug, name: n.name, platforms: n.platforms, summary: n.summary }))
  .sort((a, b) => {
    const ia = nativeOrder.indexOf(a.slug);
    const ib = nativeOrder.indexOf(b.slug);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });

// Same rule as serviceCount in pocket-homelab-web/src/data/services.ts.
const services = readFileSync(join(data, 'services.ts'), 'utf8');
const serviceSlugs = [...services.matchAll(/\{\s*slug:\s*'([^']+)'/g)].map((m) => m[1]);
const serviceCount = serviceSlugs.filter((s) => s !== 'dashboard-links').length;

const out = {
  generated: catalogue.generated,
  serviceCount,
  categories: catalogue.categories,
  apps,
  native,
};

writeFileSync(new URL('../src/data/pocket.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`pocket.json: ${apps.length} apps, ${native.length} native apps, ${serviceCount} integrations`);
