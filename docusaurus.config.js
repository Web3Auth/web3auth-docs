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
          {
            from: '/docs/authenticating-users/overview',
            to: '/docs/server-side-verification/',
          },
          {
            from: '/docs/examples/demo',
            to: '/docs/examples',
          },
          {
            from: '/docs/examples/productionexamples',
            to: '/docs/examples/liveexamples',
          },
          {
            from: '/docs/developing-with-web3auth/adapters',
            to: '/docs/connect-external-wallets',
          },
          {
            from: '/docs/developing-with-web3auth/understand-sdk',
            to: '/docs/quick-start',
          },
          {
            from: '/docs/developing-with-web3auth/',
            to: '/docs/quick-start/',
          },
          {
            from: '/docs/api-reference/web/choosesdk/',
            to: '/docs/sdk/web/',
          },
          {
            from: '/docs/api-reference/web/plugnplay',
            to: '/docs/sdk/web/web3auth/',
          },
          {
            from: '/docs/api-reference/web/customloginui',
            to: '/docs/sdk/web/core/',
          },
          {
            from: '/docs/api-reference/android/setting-up',
            to: '/docs/sdk/android/',
          },
          {
            from: '/docs/api-reference/ios/setting-up',
            to: '/docs/sdk/ios/',
          },
          {
            from: '/docs/api-reference/flutter/setting-up',
            to: '/docs/sdk/flutter/',
          },
          {
            from: '/docs/api-reference/react-native/choose-workflows',
            to: '/docs/sdk/react-native/',
          },
          {
            from: '/docs/customauth/auth0',
            to: '/docs/guides/auth0',
          },
          {
            from: '/docs/sdk/self-host/',
            to: '/docs/sdk/self-host/installation',
          },
          {
            from: '/docs/self-host/',
            to: '/docs/self-hosting',
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
