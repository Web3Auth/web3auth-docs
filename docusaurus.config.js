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
  onDuplicateRoutes: "warn",
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
          type: "search",
          position: "right",
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://dashboard.web3auth.io/" target="_blank" class="navbar-button"><strong class="navbar-button-text">Dashboard</strong></a>',
        },
        {
          type: "html",
          position: "right",
          value: "<div></div>",
        },
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
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/authenticating-users/overview",
            to: "/server-side-verification/",
          },
          {
            from: "/examples/demo",
            to: "/examples/",
          },
          {
            from: "/examples/productionexamples",
            to: "/examples/liveexamples",
          },
          {
            from: "/developing-with-web3auth/adapters",
            to: "/connect-external-wallets",
          },
          {
            from: "/developing-with-web3auth/understand-sdk",
            to: "/quick-start",
          },
          {
            from: "/developing-with-web3auth/",
            to: "/quick-start",
          },
          {
            from: "/api-reference/web/choosesdk/",
            to: "/sdk/web/",
          },
          {
            from: "/api-reference/web/plugnplay",
            to: "/sdk/web/web3auth/",
          },
          {
            from: "/api-reference/web/customloginui",
            to: "/sdk/web/core/",
          },
          {
            from: "/api-reference/android/setting-up",
            to: "/sdk/android/",
          },
          {
            from: "/api-reference/ios/setting-up",
            to: "/sdk/ios/",
          },
          {
            from: "/api-reference/flutter/setting-up",
            to: "/sdk/flutter/",
          },
          {
            from: "/api-reference/react-native/choose-workflows",
            to: "/sdk/react-native/",
          },
          {
            from: "/customauth/auth0",
            to: "/guides/auth0",
          },
          {
            from: "/sdk/self-host/",
            to: "/sdk/self-host/installation",
          },
          {
            from: "/self-host/",
            to: "/self-hosting",
          },
          {
            from: "/quickstart",
            to: "/quick-start",
          },
          {
            from: "/customauth",
            to: "/custom-authentication/",
          },
          {
            from: "/whitelabeling",
            to: "/whitelabel/",
          },
          {
            from: "/authenticating-users/",
            to: "/server-side-verification/",
          },
          {
            from: "/api-reference/",
            to: "/sdk/",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/customauth/")) {
            return [existingPath.replace("/customauth", "/custom-authentication/")];
          }
          if (existingPath.includes("/whitelabeling/")) {
            return [existingPath.replace("/whitelabeling/", "/whitelabel/")];
          }
          if (existingPath.includes("/authenticating-users/")) {
            return [existingPath.replace("/authenticating-users/", "/server-side-verification/")];
          }
          if (existingPath.includes("/api-reference/")) {
            return [existingPath.replace("/api-reference/", "/sdk/")];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
};
