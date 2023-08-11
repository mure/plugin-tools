// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  generalConfig,
  plugins,
  presetsDocs,
  presetsTheme,
  themeConfigNavbar,
  themeConfigFooter,
  themeConfigPrism,
  themeConfigColorMode,
} = require('./docusaurus.config.base');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...generalConfig,
  url: 'https://grafana.github.io/',
  noIndex: true,

  plugins: plugins,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { ...presetsDocs, editUrl: undefined },
        theme: presetsTheme,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: { ...themeConfigNavbar, items: [] },
      // footer: themeConfigFooter,
      prism: themeConfigPrism,
      colorMode: themeConfigColorMode,
    }),
};

module.exports = config;
