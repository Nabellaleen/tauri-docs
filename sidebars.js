const about = [
  {
    'About Tauri': [
      'about/intro',
      'about/security',
      'about/governance',
      'about/book',
      {
        type: 'link',
        label: 'Benchmarks',
        href: '/benchmarks',
      },
    ],
  },
]

const docs = [
  {
    'Get started': [
      'get-started/intro',
      'get-started/setup-linux',
      'get-started/setup-macos',
      'get-started/setup-windows',
    ],
    Development: [
      'development/intro',
      'development/integration',
      'development/development-cycle',
      'development/debugging',
      'development/ci-cd',
      'development/cross-platform',
      'development/publishing',
      'development/updating',
    ],
    Guides: [
      {
        Patterns: [
          'guides/patterns/about-patterns',
          'guides/patterns/hermit',
          'guides/patterns/bridge',
          'guides/patterns/cloudish',
          'guides/patterns/cloudbridge',
          'guides/patterns/lockdown',
          'guides/patterns/multiwin',
          'guides/patterns/glui',
        ],
        Bundler: [
          'guides/bundler/introduction',
          'guides/bundler/anti-bloat',
          'guides/bundler/sidecar',
          'guides/bundler/debian',
          'guides/bundler/sign-macos',
          'guides/bundler/sign-windows',
        ],
      },
      'guides/cli',
      'guides/command',
      'guides/events',
      'guides/plugin',
      'guides/updater',
      'guides/icons',
      'guides/splashscreen',
      'guides/window-customization',
      'guides/menu',
      'guides/system-tray',
      {
        'WebDriver Testing': [
          'guides/webdriver/introduction',
          {
            'Example Application': [
              'guides/webdriver/example/setup',
              'guides/webdriver/example/webdriverio',
              'guides/webdriver/example/selenium',
            ],
          },
          'guides/webdriver/ci',
        ],
      },
      'guides/migration',
      'guides/contributor-guide',
    ],
  },
]

const api = [
  'api/config',
  'api/cli',
  {
    type: 'link',
    label: 'Rust (via Docs.rs)',
    href: 'https://docs.rs/tauri/1.0.0-beta.8/'
  },
  {
    type: 'category',
    label: 'JavaScript',
    link: {
      type: 'generated-index',
      slug: 'api/js'
    },
    items: [
      {
        type: 'autogenerated',
        dirName: 'api/js'
      }
    ]
  },
]

module.exports = {
  about,
  docs,
  api,
}
