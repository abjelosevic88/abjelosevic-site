export const profile = {
  name: 'Aleksandar Bjelošević',
  shortName: 'Aleksandar',
  title: 'Senior Software Engineer · Technology Lead',
  tagline: 'Full-stack engineer building LLM-based systems, Go services and self-hosted software.',
  // <meta name="description">: one sentence, ~155 characters, with the terms people search for.
  description:
    'Aleksandar Bjelošević, Senior Software Engineer and Technology Lead in Banja Luka: LLM and RAG systems, Go and React platforms, and Pocket Homelab, a native app and self-hosted tools for homelabs.',
  url: 'https://abjelosevic.com',
  cv: '/cv/Aleksandar-Bjelosevic-CV.pdf',
  bio:
    'I have been shipping software since 2013: PHP sites, embedded set-top-box engines, Node.js and React Native products, and lately React and Go platforms. Today I lead AI initiatives, designing RAG pipelines and multi-agent workflows that turn messy business data into decisions, and I build Pocket Homelab, a native app plus a family of single-binary self-hosted tools.',
  location: 'Banja Luka, Bosnia and Herzegovina',
  email: 'abjelosevic88@gmail.com',
  github: 'https://github.com/abjelosevic88',
  languages: [
    { name: 'Serbian', level: 'Native' },
    { name: 'English', level: 'C1' },
  ],
};

export const stats = [
  { value: '13+', label: 'years shipping software' },
  { value: '43', label: 'services in Pocket Homelab' },
  { value: '8', label: 'self-hosted Pocket apps' },
  { value: 'Go · React · AI', label: 'current stack' },
];

export type Experience = {
  role: string;
  period: string;
  stack: string[];
  tracks: { heading: string; bullets: string[] }[];
};

// Roles are described by technology and responsibility only; employer names are intentionally left out.
export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer · Technology Lead (React / Go) · AI Initiative Lead',
    period: 'Aug 2022 – Present',
    stack: ['LLMs', 'RAG', 'Go', 'React', 'GraphQL', 'AWS CloudFront'],
    tracks: [
      {
        heading: 'AI initiative',
        bullets: [
          'Architected an AI-driven capacity management system that turns candidate and job data into strategic recommendations with LLMs and Retrieval Augmented Generation.',
          'Built an agent chaining and orchestration workflow linking candidate recommendation with risk assessment and financial impact estimation.',
          'Engineered a RAG module over vector embeddings of historical recruitment data so prompts carry real past outcomes as context.',
          'Designed a two-stage prompting strategy: filter on core criteria first, then refine on risk factors and constraints.',
          'Wrote synthetic data pipelines producing interconnected candidate, position and history datasets for training and testing.',
          'Added human-in-the-loop checkpoints for low-confidence outputs, feeding back into prompt thresholds and agent logic.',
        ],
      },
      {
        heading: 'Technology lead',
        bullets: [
          'Bootstrapped two Go projects, including an embedded solution, and onboarded engineers onto Go.',
          'Led a React team: daily and monthly check-ins, technical direction, performance triage and final solutions.',
          'Built a custom UI library on atomic design principles for a GraphQL-backed React application deployed through AWS CloudFront.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer · Team Lead',
    period: 'Sep 2015 – Aug 2022',
    stack: ['Node.js', 'Express', 'Fastify', 'MySQL', 'Redis', 'React Native', 'Next.js', 'Laravel', 'AWS', 'Jenkins'],
    tracks: [
      {
        heading: 'Backend & platform',
        bullets: [
          'REST API on Node.js/Express with a MySQL schema, Redis for queues and caching, and TDD throughout.',
          'Stand-alone payment gateway and OAuth 2.0 authorization services in a microservice architecture.',
          'Public API on Fastify tuned for large numbers of simultaneous connections.',
          'Pluggable file storage: local CDN or AWS CloudFront + S3 with signed URLs for time-limited private access.',
          'Full CI/CD for development, integration, staging and production with Jenkins, bash deploy scripts and Bitbucket Pipelines.',
        ],
      },
      {
        heading: 'Products & on-site hardware',
        bullets: [
          'iOS and Android apps in React Native with Realm as the local object store.',
          'Server-side rendered web app in Next.js with Apollo GraphQL for data and state.',
          'Modular CMS in Laravel with Blade templating.',
          'In-house server environment on Raspberry Pi / Banana Pi with UniFi access point controllers, with optimized file download streams.',
        ],
      },
    ],
  },
  {
    role: 'Embedded Software Engineer',
    period: 'Mar 2015 – Apr 2016',
    stack: ['C', 'C++', 'Lua', 'Eclipse RCP', 'CeGUI'],
    tracks: [
      {
        heading: 'Set-top-box platform',
        bullets: [
          'Application-level platform on Eclipse RCP with GEF editor plugins and a custom XML layout specification for GUIs.',
          'Integrated Lua as the application scripting language and built STB apps and games in it.',
          'C/C++ rendering engine for embedded STB systems on the CeGUI framework.',
        ],
      },
    ],
  },
  {
    role: 'PHP / MySQL Developer',
    period: 'May 2013 – Mar 2015',
    stack: ['PHP', 'Joomla', 'MySQL', 'jQuery', 'MooTools'],
    tracks: [
      {
        heading: 'Web development',
        bullets: [
          'Custom Joomla sites and components, with jQuery/MooTools and vanilla JavaScript UI work.',
          'Hand-tuned MySQL queries, cross-browser usability testing and project progress reporting.',
        ],
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'AI & machine learning',
    items: ['Large Language Models', 'Retrieval Augmented Generation', 'Vector embeddings', 'Agent chaining & orchestration', 'Prompt engineering', 'Synthetic data generation', 'Human-in-the-loop', 'Risk & financial impact modeling'],
  },
  {
    group: 'AI tooling',
    items: ['Claude Code', 'Cursor', 'Kiro', 'Antigravity'],
  },
  {
    group: 'Frontend & mobile',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'GraphQL / Apollo', 'Atomic design', 'PWA'],
  },
  {
    group: 'Backend',
    items: ['Go', 'Node.js', 'Express', 'Fastify', 'AdonisJS', 'Laravel / PHP', 'REST', 'OAuth 2.0', 'Microservices'],
  },
  {
    group: 'Data',
    items: ['MySQL', 'SQLite', 'Redis', 'Realm', 'SQL', 'NoSQL'],
  },
  {
    group: 'Infrastructure & ops',
    items: ['Docker', 'Linux / Unix', 'Shell', 'Nix', 'Jenkins', 'CI/CD', 'AWS CloudFront & S3', 'Kubernetes', 'Networking', 'Prometheus'],
  },
  {
    group: 'Practice',
    items: ['TDD', 'Unit / integration / E2E testing', 'Agile & Scrum', 'Team leadership', 'Onboarding & mentoring'],
  },
];

export type Project = {
  name: string;
  repo: string;
  url: string;
  summary: string;
  detail: string;
  tags: string[];
};

export const pocketHomelab = {
  name: 'Pocket Homelab',
  url: 'https://pockethomelab.com/',
  tagline: 'Your homelab, in your pocket.',
  summary:
    'A native iOS and macOS app that connects directly to self-hosted services: status, downloads, media, photos, notes, code and money in one dashboard. No account, no analytics, no cloud in between.',
  highlights: [
    '43 integrations: Jellyfin, Immich, Nextcloud, the *arr stack, qBittorrent, Uptime Kuma, Firefly III, Paperless-ngx, TrueNAS, AdGuard Home and more',
    'Credentials stay in the device Keychain; works over Tailscale or any VPN',
    'Offline with queued actions, Home Screen and Lock Screen widgets, Control Center, search across every service',
    'Universal purchase for iPhone and Mac; free with up to 3 integrations',
  ],
  platforms: ['iOS 18+', 'macOS 15+', 'Swift'],
};

// Self-hosted companions to the app. All: one Go binary, one SQLite file, one volume, MIT.
export const pocketApps: Project[] = [
  {
    name: 'Pocket Travel',
    repo: 'pocket-homelab-travel',
    url: 'https://github.com/abjelosevic88/pocket-homelab-travel',
    summary: 'A trip planner that keeps the plan, the cost, the route and the photos on one page.',
    detail:
      'A drag-and-drop itinerary with daily weather, stays and transport legs, budget vs spent synced from Firefly III by tag in any currency, the route and stops recorded by Dawarich, geotagged Immich photos on the map, checklists, a shared journal and an iCalendar feed. Optional AI suggests places, plans the days and writes the recap.',
    tags: ['Go', 'SQLite', 'Firefly III', 'Dawarich', 'Immich', 'OpenStreetMap', 'PWA'],
  },
  {
    name: 'Pocket Clips',
    repo: 'pocket-homelab-clips',
    url: 'https://github.com/abjelosevic88/pocket-homelab-clips',
    summary: 'Clipboard history, snippets and quicklinks the way Raycast does them, on your own server.',
    detail:
      'Every copy from every device in one deduplicated list (text, links, colours, images), found with SQLite FTS5. Snippets use Raycast’s placeholder syntax and expand on the server, quicklinks take a query and double as browser search engines via /go/<keyword>, and JSON import/export round-trips with Raycast.',
    tags: ['Go', 'SQLite', 'FTS5', 'Raycast', 'PWA'],
  },
  {
    name: 'Pocket Subtitles',
    repo: 'pocket-homelab-subtitles',
    url: 'https://github.com/abjelosevic88/pocket-homelab-subtitles',
    summary: 'Keeps a media library’s subtitles in sync with the audio.',
    detail:
      'Every Bazarr download is measured against the video’s own audio and re-timed only when needed; different cuts are aligned act by act, wrong-episode and machine-translated subtitles are rejected, and a nightly sweep covers the rest. Jellyfin/Emby refresh, nudge by milliseconds, season tools.',
    tags: ['Go', 'SQLite', 'ffmpeg', 'alass', 'Bazarr', 'PWA'],
  },
  {
    name: 'Pocket Invoicing',
    repo: 'pocket-homelab-invoicing',
    url: 'https://github.com/abjelosevic88/pocket-homelab-invoicing',
    summary: 'Invoicing for a one-person business, packaged as a ~15 MB container.',
    detail:
      'Hourly, daily, retainer, fixed and per-unit billing, time tracking, recurring invoices, a month-end wizard, multi-currency with ECB rates, PDF templates including .docx via Gotenberg, client share links, SMTP reminders, Paperless-ngx archiving and a yearly accountant package.',
    tags: ['Go', 'SQLite', 'PDF', 'SMTP', 'Webhooks', 'REST API'],
  },
  {
    name: 'Pocket Split',
    repo: 'pocket-homelab-cost-split',
    url: 'https://github.com/abjelosevic88/pocket-homelab-cost-split',
    summary: 'Cost splitting for trips, flats and dinners, in any currency.',
    detail:
      'A group per pot of money, expenses in any ISO 4217 currency with the day’s rate looked up and stored, splits by share, percentage or exact amount, and settle-up with the fewest transfers. Stats, PDF reports, JSON/CSV export.',
    tags: ['Go', 'SQLite', 'Frankfurter', 'PWA'],
  },
  {
    name: 'Pocket Bookshelf',
    repo: 'pocket-homelab-bookshelf',
    url: 'https://github.com/abjelosevic88/pocket-homelab-bookshelf',
    summary: 'A private reading log: what you read, what you thought, what’s next.',
    detail:
      'Add a book by title or ISBN with details and covers from Open Library and Google Books, half-star ratings, quotes and Kindle highlight import, author pages filled in automatically, a reorderable queue with monthly plans and a yearly goal.',
    tags: ['Go', 'SQLite', 'Open Library', 'PWA'],
  },
  {
    name: 'Pocket Inventory',
    repo: 'pocket-homelab-inventory',
    url: 'https://github.com/abjelosevic88/pocket-homelab-inventory',
    summary: 'Home inventory for households: what you own, how many, where, whose.',
    detail:
      'One-line quick add, plus/minus on every row, alert levels that feed a shopping list by themselves, multi-user ownership and history, barcode lookup, and an API for Homepage widgets, Shortcuts and Home Assistant.',
    tags: ['Go', 'SQLite', 'REST API', 'PWA'],
  },
  {
    name: 'Pocket Habits',
    repo: 'pocket-homelab-habit-tracker',
    url: 'https://github.com/abjelosevic88/pocket-homelab-habit-tracker',
    summary: 'The one-page bullet-journal habit spread, self-hosted.',
    detail:
      'Seven habits on a month grid, sleep score and day rating over highlighter bands, a numeric tracker, one good thing per day. Insights show what moves your scores, weather comes from Open-Meteo, reminders go through ntfy or Apprise.',
    tags: ['Go', 'SQLite', 'Open-Meteo', 'ntfy', 'PWA'],
  },
];

export const raycast: Project = {
  name: 'Homelab for Raycast',
  repo: 'raycast-homelab',
  url: 'https://github.com/abjelosevic88/raycast-homelab',
  summary: 'The whole homelab in one Raycast extension: 27 commands and a Home hub.',
  detail:
    'Server stats, downloads, Jellyseerr requests, Jellyfin continue-watching, the *arr calendar, subtitles, Navidrome, Immich, Audiobookshelf, Calibre-Web, Nextcloud, Paperless, Uptime Kuma, Scrutiny, Backrest, Komodo containers, systemd over SSH, AdGuard Home and Firefly III. Every service is optional. macOS and Windows.',
  tags: ['TypeScript', 'React', 'Raycast API', '20 ★'],
};

export const sharedTraits = [
  'Single static Go binary with an embedded SPA',
  'SQLite with WAL and VACUUM INTO backups from the UI, CLI or API',
  'Multi-arch images on ghcr.io (amd64 / arm64 / armv7)',
  'Built-in multi-user login, SSO proxy headers or no-login on a trusted LAN',
  'Personal API tokens, Prometheus /metrics, /healthz and /readyz',
  'Installable PWA with a bottom tab bar and dark mode',
  'Companion views inside the Pocket Homelab app',
];

export const otherRepos = [
  { name: 'nix', url: 'https://github.com/abjelosevic88/nix', note: 'Nix flake running a fleet of machines' },
  { name: 'go-arpg', url: 'https://github.com/abjelosevic88/go-arpg', note: 'An action RPG written in Go' },
  { name: 'fastify-sequelize', url: 'https://github.com/abjelosevic88/fastify-sequelize', note: 'Fastify plugin for Sequelize' },
  { name: 'frontend-lib', url: 'https://github.com/abjelosevic88/frontend-lib', note: 'Generic React component collection' },
  { name: 'nvim', url: 'https://github.com/abjelosevic88/nvim', note: 'Neovim configuration in Lua' },
];

export const education = [
  {
    school: 'Faculty of Electrical Engineering, Banja Luka',
    degree: 'Bachelor of Engineering, Computer and Information Sciences',
    note: 'Client/server architecture, OOP and threads, GUI systems, DAO/DTO data access, algorithms and data structures, networking, artificial intelligence, operating systems.',
  },
  {
    school: 'High School of Electrical Engineering "Nikola Tesla", Banja Luka',
    degree: 'Electrical engineering',
    note: '',
  },
];
