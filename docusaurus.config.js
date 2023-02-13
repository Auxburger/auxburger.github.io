// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Auxburger',
  tagline: 'Blog and Projects',
  url: 'https://auxburger.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/baby-yoda.png',
  organizationName: 'Auxburger', // Usually your GitHub org/user name.
  projectName: 'auxburger.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Auxburger/blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Auxburger/blog/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-BB3XQ43K6L',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'projects',
        showLastUpdateTime: true,
        routeBasePath: 'projects',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        showLastUpdateTime: true,
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Auxburger',
        logo: {
          alt: 'Auxburger Logo',
          src: 'img/baby-yoda.png',
        },
        items: [
          {
            to: '/tutorials/intro',
            position: 'left',
            label: 'Tutorials',
          },
          /*{
            to: '/projects/intro',
            position: 'left',
            label: 'Projects',
          },*/
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /*{ to: '/blog', label: 'Blog', position: 'left' },*/
          {
            href: 'https://github.com/auxburger/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Django',
                to: '/docs/intro',
              }, {
                label: 'Ubuntu',
                to: '/docs/ubuntu/basics/fileExecute',
              },
              {
                label: 'Windows',
                to: '/docs/windows/openssh',
              },
            ],
          },
          {
            title: 'Socialmedia',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/darius-augsburger-5443771ab/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/darius_burg',
              }
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://www.github.com/Auxburger',
              },

              {
                label: 'Vulpery UG',
                href: 'https://www.vulpery.com',
              },

              {
                label: 'OberSmart',
                href: 'https://www.obersmart.de',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darius Augsburger, Inc. Built with Docusaurus.<br> <a class="my-link-light" href="https://www.freepik.com/free-photo/beautiful-milky-way-night-sky_18667464.htm#query=space&position=0&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
