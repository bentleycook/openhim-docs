/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'OpenHIM',
  tagline: 'Simplifying Interoperability',
  url: 'https://jembi.github.io',
  baseUrl: '/openhim-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'jembi', // Usually your GitHub org/user name.
  projectName: 'openhim-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'OpenHIM',
      logo: {
        alt: 'OpenHIM',
        src: 'img/openhim-logo-green.svg',
      },
      links: [
        {to: 'docs/introduction/about', label: 'Docs', position: 'left'},
        {to: 'docs/api/introduction/welcome', label: 'API', position: 'left'},
        {to: 'mediator-library', label: 'Mediator Library', position: 'left'},

        {
          href: 'https://github.com/jembi/openhim-core-js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/introduction/about',
            },
            {
              label: 'API',
              to: 'docs/api/introduction/welcome',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'OpenHIE',
              href: 'https://wiki.ohie.org/display/SUB/Interoperability+Layer+Community',
            },
            {
              label: 'YouTube Tutorials',
              href: 'https://www.youtube.com/channel/UCz3UpAGDJbKG7KkorgMGfEA',
            }
          ],
        },
        {
          title: 'Playgrounds',
          items: [
            {
              label: 'OpenHIM 5.2-latest Sandbox',
              href: 'https://sandbox.openhim.org',
            },
            {
              label: 'OpenHIM 5.3-alpha Sandbox',
              href: 'https://alpha.sandbox.openhim.org',
            }
          ],
        },
      ],
      logo: {
        alt: 'Jembi health Systems Logo',
        src: 'img/jembi-logo.png',
        href: 'https://jembi.org',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Jembi Health Systems NPC`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
