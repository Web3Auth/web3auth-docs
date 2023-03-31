const path = require("path");
require('dotenv').config()
const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubDiscussionsUrl = `${githubOrgUrl}/${githubOrg}/discussions`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const fs = require('fs');

const resourcesDropdown = fs.readFileSync('./src/components/navDropdown/resources.html', 'utf-8');
const helpDropdown = fs.readFileSync('./src/components/navDropdown/help.html', 'utf-8');
const sdkDropdown = fs.readFileSync('./src/components/navDropdown/sdk.html', 'utf-8');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: "Documentation",
  tagline: "Flexible, Universal Key Management", // TODO: Confirm with content team
  url: "https://web3auth.io",
  baseUrl: process.env.REACT_APP_BASE_URL || "/docs/",
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
        hideable: true,
      },
    },
    announcementBar: {
      id: 'join_community',
      content:
        '<a href="https://community.web3auth.io" target="_blank">Get the support you need to seamlessly integrate with Web3Auth. Join our community today!</a>',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ["groovy", "java", "kotlin", "swift", "dart", "csharp"],
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
          label: 'SDKs',
          type: 'dropdown',
          to: "/sdk",
          position: "left",
          items: [
            {
              type: 'html',
              value: sdkDropdown,
            },
          ],
        },
        {
          label: 'Resources',
          type: 'dropdown',
          position: "left",
          items: [
            {
              type: 'html',
              value: resourcesDropdown,
            },
          ],
        },
        {
          label: "Integration Builder",
          to: "/integration-builder",
          position: "left",
        },
        {
          label: "Content Hub",
          activeBasePath: "/content-hub",
          to: "/content-hub",
          position: "left",
        },
        {
          label: 'Help',
          type: 'dropdown',
          position: "left",
          items: [
            {
              type: 'html',
              value: helpDropdown,
            },
          ],
        },
        {
          position: "right",
          href: githubDiscussionsUrl,
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
            '<a href="https://dashboard.web3auth.io/" target="_blank" class="navbar-button"><strong class="navbar-button-text">Developer Dashboard</strong></a>',
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
    customFields: {
      baseUrl: process.env.REACT_APP_BASE_URL || "/docs/",
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          breadcrumbs: true,
          editUrl: githubEditUrl,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkMath, [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-ML3T5M6",
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-content-hub"),
    [path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"), { rootDir: "files" }],
    path.resolve(__dirname, "plugins", "node-polyfills"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/examples/productionexamples",
            to: "/examples/liveexamples",
          },
          {
            from: "/get-started",
            to: "/quick-start",
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
            from: "/customauth/auth0",
            to: "/guides/auth0",
          },
          {
            from: "/sdk/web/web3auth/usage",
            to: "/sdk/web/modal/usage",
          },
          {
            from: "/sdk/web/web3auth/wagmi-connector",
            to: "/sdk/web/wagmi-connector",
          },
          {
            from: "/sdk/web/web3auth/custom-authentication",
            to: "/sdk/web/modal/custom-authentication",
          },
          {
            from: "/sdk/web/web3auth/whitelabel",
            to: "/sdk/web/modal/whitelabel",
          },
          {
            from: "/sdk/web/plugins/torus-wallet",
            to: "/sdk/web/plugins/evm-wallet",
          },
          {
            from: "/sdk/web/web3auth/initialize",
            to: "/sdk/web/modal/initialize",
          },
          {
            from: "/sdk/web/web3auth/",
            to: "/sdk/web/modal/",
          },
          {
            from: "/sdk/web/modal/wagmi-connector",
            to: "/sdk/web/wagmi-connector",
          },
          {
            from: "/sdk/web/no-modal/wagmi-connector",
            to: "/sdk/web/wagmi-connector",
          },
          {
            from: "/quickstart",
            to: "/quick-start",
          },
          {
            from: "/api-reference/",
            to: "/sdk/",
          },
          {
            from: "/api-reference/web/choosesdk/",
            to: "/sdk/web/",
          },
          {
            from: "/api-reference/web/plugnplay",
            to: "/sdk/web/modal/",
          },
          {
            from: "/api-reference/web/customloginui",
            to: "/sdk/web/no-modal/",
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
            from: "/guides/one-key-flow",
            to: "/guides/single-factor-auth",
          },
          {
            from: "/api-reference/web/",
            to: "/sdk/web/",
          },
          {
            from: "/api-reference/android/",
            to: "/sdk/android/",
          },
          {
            from: "/api-reference/ios/",
            to: "/sdk/ios/",
          },
          {
            from: "/api-reference/react-native/",
            to: "/sdk/react-native/",
          },
          {
            from: "/api-reference/flutter/",
            to: "/sdk/flutter/",
          },
          {
            from: "/api-reference/react-native/chooseworkflows",
            to: "/sdk/react-native/",
          },
          {
            from: "/api-reference/web/customauth",
            to: "/sdk/web/no-modal/custom-authentication",
          },
          {
            from: "/api-reference/web/plugins",
            to: "/sdk/web/plugins/",
          },
          {
            from: "/api-reference/web/adapters",
            to: "/sdk/web/adapters/",
          },
          {
            from: "/overview/what-is-web3auth",
            to: "/what-is-web3auth",
          },
          {
            from: "/overview/how-web3auth-works",
            to: "/how-web3auth-works",
          },
          {
            from: "/overview/web3auth-and-wallets",
            to: "/product-fit/web3auth-for-wallets",
          },
          {
            from: "/overview/web3auth-for-wallets",
            to: "/product-fit/web3auth-for-wallets",
          },
          {
            from: "/overview/web3auth-for-dapps",
            to: "/product-fit/web3auth-for-dapps",
          },
          {
            from: "/overview/user-flow",
            to: "/product-fit/user-flow",
          },
          {
            from: "/overview/key-management/",
            to: "/infrastructure/key-management",
          },
          {
            from: "/overview/key-management/technical-architecture/",
            to: "/infrastructure/technical-architecture/",
          },
          {
            from: "/overview/key-management/audits",
            to: "/infrastructure/audits",
          },
          {
            from: "/sdk/web-backend",
            to: "/sdk/node",
          },
          {
            from: "/whitelabeling",
            to: "/pnp/features/whitelabel/",
          },
          {
            from: "/whitelabel/",
            to: "/pnp/features/whitelabel/",
          },
          {
            from: "/interoperability",
            to: "/pnp/features/interoperability",
          },
          {
            from: "/dapp-share",
            to: "/pnp/features/dapp-share",
          },
          {
            from: "/authenticating-users/",
            to: "/pnp/features/server-side-verification/",
          },
          {
            from: "/authenticating-users/overview",
            to: "/pnp/features/server-side-verification/",
          },
          {
            from: "/server-side-verification/",
            to: "/pnp/features/server-side-verification/",
          },
          {
            from: "/server-side-verification/social-login-users",
            to: "/pnp/features/server-side-verification/social-login-users",
          },
          {
            from: "/server-side-verification/external-wallets",
            to: "/pnp/features/server-side-verification/external-wallets",
          },
          {
            from: "/developing-with-web3auth/adapters",
            to: "/pnp/features/connect-external-wallets",
          },
          {
            from: "/connect-external-wallets",
            to: "/pnp/features/connect-external-wallets",
          },
          {
            from: "/self-host/",
            to: "/core-kit/introduction",
          },
          {
            from: "/self-hosting",
            to: "/core-kit/introduction",
          },
          {
            from: "/developer-dashboard/",
            to: "/dashboard-setup/",
          },
          {
            from: "/developer-dashboard/get-client-id",
            to: "/dashboard-setup/get-client-id",
          },
          {
            from: "/developer-dashboard/enable-interoperability",
            to: "/dashboard-setup/enable-interoperability",
          },
          {
            from: "/developer-dashboard/setup-custom-authentication",
            to: "/dashboard-setup/setup-custom-authentication",
          },
          {
            from: "/developer-dashboard/billing-and-user-stats",
            to: "/dashboard-setup/billing-and-user-stats",
          },
          {
            from: "/customauth",
            to: "/auth-provider-setup/",
          },
          {
            from: "/customauth/verifiers",
            to: "/auth-provider-setup/verifiers",
          },
          {
            from: "/custom-authentication/",
            to: "/auth-provider-setup/",
          },
          {
            from: "/custom-authentication/verifiers",
            to: "/auth-provider-setup/verifiers",
          },
          {
            from: "/custom-authentication/social-providers/",
            to: "/auth-provider-setup/social-providers/",
          },
          {
            from: "/custom-authentication/social-providers/google",
            to: "/auth-provider-setup/social-providers/google",
          },
          {
            from: "/custom-authentication/social-providers/facebook",
            to: "/auth-provider-setup/social-providers/facebook",
          },
          {
            from: "/custom-authentication/social-providers/twitch",
            to: "/auth-provider-setup/social-providers/twitch",
          },
          {
            from: "/custom-authentication/social-providers/discord",
            to: "/auth-provider-setup/social-providers/discord",
          },
          {
            from: "/custom-authentication/federated-identity-providers",
            to: "/auth-provider-setup/federated-identity-providers",
          },
          {
            from: "/custom-authentication/byo-jwt-providers",
            to: "/auth-provider-setup/byo-jwt-providers",
          },
          {
            from: "/sdk/self-host/",
            to: "/sdk/tkey/",
          },
          {
            from: "/sdk/self-host/install",
            to: "/sdk/tkey/install",
          },
          {
            from: "/sdk/self-host/initialize",
            to: "/sdk/tkey/initialize",
          },
          {
            from: "/sdk/self-host/usage",
            to: "/sdk/tkey/usage",
          },
          {
            from: "/sdk/self-host/modules/",
            to: "/sdk/tkey/modules/",
          },
          {
            from: "/sdk/self-host/modules/share-serialization",
            to: "/sdk/tkey/modules/share-serialization",
          },
          {
            from: "/sdk/self-host/modules/share-transfer",
            to: "/sdk/tkey/modules/share-transfer",
          },
          {
            from: "/sdk/self-host/modules/chrome-storage",
            to: "/sdk/tkey/modules/chrome-storage",
          },
          {
            from: "/sdk/self-host/modules/web-storage",
            to: "/sdk/tkey/modules/web-storage",
          },
          {
            from: "/sdk/self-host/modules/security-questions",
            to: "/sdk/tkey/modules/security-questions",
          },
          {
            from: "/sdk/self-host/modules/seed-phrase",
            to: "/sdk/tkey/modules/seed-phrase",
          },
          {
            from: "/sdk/self-host/modules/private-keys",
            to: "/sdk/tkey/modules/private-keys",
          },
          {
            from: "/guides/selfhost",
            to: "/guides/tkey",
          },
          {
            from: "/sdk/web/core/",
            to: "/sdk/web/no-modal/",
          },
          {
            from: "/sdk/web/core/initialize",
            to: "/sdk/web/no-modal/initialize",
          },
          {
            from: "/sdk/web/core/usage",
            to: "/sdk/web/no-modal/usage",
          },
          {
            from: "/sdk/web/core/whitelabel",
            to: "/sdk/web/no-modal/whitelabel",
          },
          {
            from: "/sdk/web/core/custom-authentication",
            to: "/sdk/web/no-modal/custom-authentication",
          },
          {
            from: "/sdk/web/core/mfa",
            to: "/sdk/web/no-modal/mfa",
          },
          {
            from: "/sdk/web/core/initiate-topup",
            to: "/sdk/web/no-modal/initiate-topup",
          },
          {
            from: "/sdk/web/core/show-wallet-connect",
            to: "/sdk/web/no-modal/show-wallet-connect",
          },
          {
            from: "/sdk/tkey/initialization",
            to: "/sdk/tkey/initialize",
          },
          {
            from: "/sdk/tkey/initialisation",
            to: "/sdk/tkey/initialize",
          },
          {
            from: "/sdk/tkey/installation",
            to: "/sdk/tkey/install",
          },
          {
            from: "/sdk/web/modal/multi-factor-authentication",
            to: "/sdk/web/modal/mfa",
          },
          {
            from: "/sdk/web/core/multi-factor-authentication",
            to: "/sdk/web/no-modal/mfa",
          },
          {
            from: "/sdk/web/web3auth/multi-factor-authentication",
            to: "/sdk/web/modal/mfa",
          },
        ],
      },
    ],
  ],
};

async function createConfig() {
  const lightTheme = (await import("./src/components/prismLight.mjs")).default;
  const darkTheme = (await import("./src/components/prismDark.mjs")).default;

  config.themeConfig.prism.theme = lightTheme;
  config.themeConfig.prism.darkTheme = darkTheme;

  return config;
}

module.exports = createConfig;
