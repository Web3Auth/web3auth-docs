const path = require("path");

const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubCoreRepoUrl = `${githubOrgUrl}/${githubOrg}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const contactUrl = "https://calendly.com/web3auth/meeting-with-web3auth";
const mediumUrl = "https://medium.com/toruslabs";
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Documentation",
  tagline: "Flexible, Universal Key Management", // TODO: Confirm with content team
  url: "https://web3auth.io",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: githubOrg,
  projectName: githubRepo,
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "light", // "light" | "dark"
      disableSwitch: false, // Set to "true" when Dark mode is ready
      respectPrefersColorScheme: true, // Set to "true" when Dark mode is ready
    },
    prism: {
      additionalLanguages: ["groovy", "java", "kotlin", "swift", "dart"],
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Web3Auth's Logo",
        src: "images/documentation-logo.svg",
        srcDark: "images/documentation-logo-dark.svg",
        target: "_self",
      },
      items: [
        {
          label: "Integration Builder",
          to: "/integration-builder",
          position: "left",
        },
        {
          label: "SDKs",
          to: "/sdk",
          position: "left",
        },
        {
          label: "Guides",
          activeBasePath: "/guides",
          to: "/guides",
          position: "left",
        },
        {
          label: "Enterprise Demo",
          href: contactUrl,
          position: "left",
        },
        {
          position: "right",
          href: githubCoreRepoUrl,
          className: "navbar-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          className: "navbar-button",
          value: '<a href="https://dashboard.web3auth.io/"><strong class="navbar-button-text">Developer Dashboard</strong></a>',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div></div>',
        }
      ],
    },
    algolia: {
      appId: "6OF28D8CMV",
      apiKey: "425a1e860cb4b9b4ce1f7d9b117c7a81",
      indexName: "docs-web3auth",
      schedule: "every 1 day at 3:00 pm",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          editUrl: githubEditUrl,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-ML3T5M6",
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-guides"),
    [path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"), { rootDir: "files" }],
    path.resolve(__dirname, "plugins", "node-polyfills"),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/authenticating-users/overview',
            from: '/docs/server-side-verification/',
          },
          {
            to: '/docs/examples/demo',
            from: '/docs/examples',
          },
          {
            to: '/docs/examples/productionexamples',
            from: '/docs/examples/liveexamples',
          },
          {
            to: '/docs/developing-with-web3auth/adapters',
            from: '/docs/connect-external-wallets',
          },
          {
            to: '/docs/developing-with-web3auth/understand-sdk',
            from: '/docs/quick-start',
          },
          {
            to: '/docs/developing-with-web3auth/',
            from: '/docs/quick-start/',
          },
          {
            to: '/docs/api-reference/web/choosesdk/',
            from: '/docs/sdk/web/',
          },
          {
            to: '/docs/api-reference/web/plugnplay',
            from: '/docs/sdk/web/web3auth/',
          },
          {
            to: '/docs/api-reference/web/customloginui',
            from: '/docs/sdk/web/core/',
          },
          {
            to: '/docs/api-reference/android/setting-up',
            from: '/docs/sdk/android/',
          },
          {
            to: '/docs/api-reference/ios/setting-up',
            from: '/docs/sdk/ios/',
          },
          {
            to: '/docs/api-reference/flutter/setting-up',
            from: '/docs/sdk/flutter/',
          },
          {
            to: '/docs/api-reference/react-native/choose-workflows',
            from: '/docs/sdk/react-native/',
          },
          {
            to: '/docs/customauth/auth0',
            from: '/docs/guides/auth0',
          },

        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/customauth')) {
            return [
              existingPath.replace('/customauth', '/custom-authentication'),
            ];
          }
          if (existingPath.includes('/quickstart')) {
            return [
              existingPath.replace('/quickstart', '/quick-start'),
            ];
          }
          if (existingPath.includes('/whitelabeling')) {
            return [
              existingPath.replace('/whitelabeling', '/whitelabel'),
            ];
          }
          if (existingPath.includes('/authenticating-users')) {
            return [
              existingPath.replace('/authenticating-users', '/server-side-verification'),
            ];
          }
          if (existingPath.includes('/api-reference')) {
            return [
              existingPath.replace('/api-reference', '/sdk'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
};
