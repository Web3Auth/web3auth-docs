const path = require("path");
require("dotenv").config();
const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");
const fs = require("fs");
const baseUrl = process.env.REACT_APP_BASE_URL || "/docs/";
const { themes } = require("prism-react-renderer");

// Import the Twoslash remark plugin
const twoslashPlugin = require("docusaurus-twoslash");
const twoslashRemark = twoslashPlugin.remarkPlugin;

const resourcesDropdown = fs.readFileSync("./src/components/navDropdown/resources.html", "utf-8");
const helpDropdown = fs.readFileSync("./src/components/navDropdown/help.html", "utf-8");
const sdkDropdown = fs.readFileSync("./src/components/navDropdown/sdk.html", "utf-8");
const RehypePlugin = require("./static/js/remark-html-to-jsx");

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Documentation | Web3Auth",
  tagline: "Web3 Auth and Wallet Management (WaaS) SDKs with MPC", // TODO: Confirm with content team
  url: "https://web3auth.io",
  baseUrl,
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
      id: "sign_up_for_wallets_ux_unconference",
      content:
        '<a href="https://w3a.link/community-call" target="_blank">Secure your spot for the next community call! Sign up now →</a>',
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
          label: "SDKs",
          type: "dropdown",
          to: "/sdk",
          position: "left",
          items: [
            {
              type: "html",
              value: sdkDropdown,
            },
          ],
        },
        {
          label: "Resources",
          type: "dropdown",
          to: "/resources",
          position: "left",
          items: [
            {
              type: "html",
              value: resourcesDropdown,
            },
          ],
        },
        {
          label: "Quick Start",
          to: "/quick-start",
          position: "left",
        },
        {
          label: "Guides",
          to: "/guides",
          position: "left",
        },
        {
          label: "Blog",
          to: "https://blog.web3auth.io",
          position: "left",
        },
        {
          label: "Help",
          type: "dropdown",
          to: "/troubleshooting",
          position: "left",
          items: [
            {
              type: "html",
              value: helpDropdown,
            },
          ],
        },
        // {
        //   position: "right",
        //   href: githubOrgUrl,
        //   className: "navbar-github-link",
        //   "aria-label": "GitHub Organization",
        // },
        {
          type: "search",
          position: "right",
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://dashboard.web3auth.io/" target="_blank" class="navbar-button"><strong class="navbar-button-text">Login to Dashboard</strong></a>',
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
      contextualSearch: true,
    },
    customFields: {
      baseUrl,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: baseUrl + "js/fix-trailing-slash.js",
      async: false,
      defer: false,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          breadcrumbs: true,
          editUrl: githubEditUrl,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [
            remarkMath,
            [npm2yarn, { sync: true }],
            RehypePlugin,
            [
              twoslashRemark,
              {
                typescript: {
                  compilerOptions: {
                    strict: true,
                    target: "es2022",
                    lib: ["es2022", "dom"],
                  },
                },
                themes: ["typescript", "javascript", "jsx", "tsx"],
                cache: true,
              },
            ],
          ],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-NFBSNHL",
        },
        pages: {
          path: "src/pages",
          routeBasePath: "/",
          include: ["**/**.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          remarkPlugins: [
            remarkMath,
            [npm2yarn, { sync: true }],
            RehypePlugin,
            [
              twoslashRemark,
              {
                typescript: {
                  compilerOptions: {
                    strict: true,
                    target: "es2022",
                    lib: ["es2022", "dom"],
                  },
                },
                themes: ["typescript", "javascript", "jsx", "tsx"],
                cache: true,
              },
            ],
          ],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: "weekly" as any,
          priority: 0.8,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "docusaurus-twoslash",
      {
        typescript: {
          compilerOptions: {
            strict: true,
            target: "es2022",
            lib: ["es2022", "dom"],
          },
        },
        themes: ["typescript", "javascript", "jsx", "tsx"],
        cache: true,
      },
    ],
    path.resolve(__dirname, "plugins", "docusaurus-plugin-guides"),
    [
      path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"),
      { rootDir: ".integrationBuilderCache" },
    ],
    path.resolve(__dirname, "plugins", "node-polyfills"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/examples/productionexamples",
            to: "/examples",
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
            from: "/sdk/web/modal/wagmi-connector",
            to: "/sdk/pnp/web/wagmi-connector",
          },
          {
            from: "/sdk/web/no-modal/wagmi-connector",
            to: "/sdk/pnp/web/wagmi-connector",
          },
          {
            from: "/sdk/web/choosesdk/",
            to: "/sdk/pnp/web/",
          },
          {
            from: "/sdk/android/setting-up",
            to: "/sdk/pnp/android/",
          },
          {
            from: "/sdk/ios/setting-up",
            to: "/sdk/pnp/ios/",
          },
          {
            from: "/sdk/flutter/setting-up",
            to: "/sdk/pnp/flutter/",
          },
          {
            from: "/sdk/react-native/choose-workflows",
            to: "/sdk/pnp/react-native/",
          },
          {
            from: "/sdk/web/customauth",
            to: "/sdk/pnp/web/no-modal/custom-authentication",
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
            from: "/overview/key-management/",
            to: "/infrastructure/",
          },
          {
            from: "/overview/key-management/technical-architecture/",
            to: "/infrastructure/",
          },
          {
            from: "/infrastructure/key-management",
            to: "/infrastructure/",
          },
          {
            from: "/infrastructure/technical-architecture/",
            to: "/infrastructure/",
          },
          {
            from: "/developer-dashboard/",
            to: "/dashboard-setup/",
          },
          {
            from: "/developer-dashboard/get-client-id",
            to: "/dashboard-setup/projects-and-analytics",
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
            to: "/dashboard-setup/billing-and-usage",
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
            from: "/sdk/web/modal/multi-factor-authentication",
            to: "/sdk/pnp/web/modal/mfa",
          },
          {
            from: "/sdk/web/core/multi-factor-authentication",
            to: "/sdk/pnp/web/no-modal/mfa",
          },
          {
            from: "/sdk/web/web3auth/multi-factor-authentication",
            to: "/sdk/pnp/web/modal/mfa",
          },
          {
            from: "/sdk/tkey/initialization",
            to: "/sdk/core-kit/tkey/initialize",
          },
          {
            from: "/sdk/tkey/initialisation",
            to: "/sdk/core-kit/tkey/initialize",
          },
          {
            from: "/troubleshooting/different-wallet-address-issue",
            to: "/troubleshooting/different-private-key",
          },
          {
            from: "/sdk/tkey/installation",
            to: "/sdk/core-kit/tkey/install",
          },
          {
            from: "/connect-blockchain/polygon/",
            to: "/connect-blockchain/evm/polygon/",
          },
          {
            from: "/connect-blockchain/base/",
            to: "/connect-blockchain/evm/base/",
          },
          {
            from: "/connect-blockchain/bnb/",
            to: "/connect-blockchain/evm/bnb/",
          },
          {
            from: "/connect-blockchain/avalanche/",
            to: "/connect-blockchain/evm/avalanche/",
          },
          {
            from: "/connect-blockchain/arbitrum/",
            to: "/connect-blockchain/evm/arbitrum/",
          },
          {
            from: "/connect-blockchain/optimism/",
            to: "/connect-blockchain/evm/optimism/",
          },
          {
            from: "/connect-blockchain/cronos/",
            to: "/connect-blockchain/evm/cronos/",
          },
          {
            from: "/connect-blockchain/harmony/",
            to: "/connect-blockchain/evm/harmony/",
          },
          {
            from: "/connect-blockchain/celo/",
            to: "/connect-blockchain/evm/celo/",
          },
          {
            from: "/connect-blockchain/moonbeam/",
            to: "/connect-blockchain/evm/moonbeam/",
          },
          {
            from: "/connect-blockchain/moonriver/",
            to: "/connect-blockchain/evm/moonriver/",
          },
          {
            from: "/connect-blockchain/klaytn/",
            to: "/connect-blockchain/evm/klaytn/",
          },
          {
            from: "/connect-blockchain/flare/",
            to: "/connect-blockchain/evm/flare/",
          },
          {
            from: "/connect-blockchain/songbird/",
            to: "/connect-blockchain/evm/songbird/",
          },
          {
            from: "/connect-blockchain/skale/",
            to: "/connect-blockchain/evm/skale/",
          },
          {
            from: "/connect-blockcahin/tron/",
            to: "/connect-blockchain/evm/tron/web",
          },
          {
            from: "/connect-blockchain/starkex",
            to: "/connect-blockchain/other/starkex",
          },
          {
            from: "/connect-blockchain/starknet",
            to: "/connect-blockchain/other/starknet",
          },
          {
            from: "/connect-blockchain/tezos",
            to: "/connect-blockchain/other/tezos",
          },
          {
            from: "/connect-blockchain/algorand",
            to: "/connect-blockchain/other/algorand",
          },
          {
            from: "/connect-blockchain/immutablex",
            to: "/connect-blockchain/other/immutablex",
          },
          {
            from: "/connect-blockchain/aptos",
            to: "/connect-blockchain/other/aptos",
          },
          {
            from: "/connect-blockchain/cosmos",
            to: "/connect-blockchain/other/cosmos",
          },
          {
            from: "/connect-blockchain/near",
            to: "/connect-blockchain/other/near",
          },
          {
            from: "/connect-blockchain/polkadot",
            to: "/connect-blockchain/other/polkadot",
          },
          {
            from: "/connect-blockchain/polymesh",
            to: "/connect-blockchain/other/polymesh",
          },
          {
            from: "/connect-blockchain/sui",
            to: "/connect-blockchain/other/sui",
          },
          {
            from: "/account-abstraction/safeauth",
            to: "/sdk/wallet-ecosystems/safeauth",
          },
          {
            from: "/user-flow",
            to: "/features/mfa",
          },
          {
            from: "/pnp/features/connect-external-wallets",
            to: "/features/wallet-aggregation",
          },
          {
            from: "/pnp/features/dapp-share",
            to: "/features/mfa",
          },
          {
            from: "/pnp/going-live",
            to: "/going-live",
          },
          {
            from: "/core-kit/going-live",
            to: "/going-live",
          },
          {
            from: "/auth-provider-setup/federated-identity-providers",
            to: "/auth-provider-setup/authentication-service-providers/auth0-service-provider",
          },
          {
            from: "/auth-provider-setup/byo-jwt-providers",
            to: "/auth-provider-setup/byo-jwt-provider",
          },
          {
            from: "/product-fit",
            to: "/product/product-fit",
          },
          {
            from: "/product-fit/pnp-vs-core-kit",
            to: "/product/product-fit",
          },
          {
            from: "/product-fit/partner-products",
            to: "/product/wallet-ecosystems",
          },
          {
            from: "/product-fit/enterprise",
            to: "/product/wallet-ecosystems",
          },
          {
            from: "/product-fit/web3auth-for-wallets",
            to: "/product/#web3auth-for-wallets",
          },
          {
            from: "/product-fit/web3auth-for-dapps",
            to: "/product/#web3auth-for-dapps",
          },
          {
            from: "/pnp/features/custom-authentication",
            to: "/features/custom-authentication",
          },
          {
            from: "/pnp/features/mfa",
            to: "/features/mfa",
          },
        ],
        createRedirects(existingPath) {
          return [
            existingPath.replace("/sdk", "/api-reference"),
            existingPath.replace("/sdk", "/sdk-reference"),
            existingPath.replace("/guides/", "/content-hub/guides/"),
            existingPath.replace("/sdk/pnp/web/providers/", "/sdk/providers/"),
            existingPath.replace("/sdk/pnp/web/wallet-services/", "/sdk/wallet-services/"),
            existingPath.replace("/features/whitelabel", "/pnp/features/whitelabel/"),
            existingPath.replace("/sdk/web/no-modal", "/sdk/web/core"),
            existingPath.replace("/sdk/web/no-modal", "/sdk/web/customloginui"),
            existingPath.replace("/sdk/web/modal", "/sdk/web/web3auth"),
            existingPath.replace("/sdk/web/modal", "/sdk/web/plugnplay"),
            existingPath.replace("/sdk/tkey", "/sdk/self-host"),
            existingPath.replace("/sdk/tkey", "/sdk/self-host"),
            existingPath.replace(
              "/connect-blockchain/evm/astar-zkyoto/",
              "/connect-blockchain/evm/zkyoto/",
            ),
            existingPath.replace(
              "/connect-blockchain/evm/astar-zkevm/",
              "/connect-blockchain/evm/zkevm/",
            ),
            existingPath.replace("/product/core-kit", "/core-kit/"),
            existingPath.replace("/product/pnp", "/pnp/"),
          ];
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

async function createConfig() {
  const prismTheme = themes.vsDark;

  (config.themeConfig.prism as any).theme = {
    ...prismTheme,
    plain: {
      color: "var(--ifm-color-gray-200)",
      backgroundColor: "var(--ifm-color-gray-800)",
    },
    styles: [
      ...prismTheme.styles,
      {
        types: ["prolog"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["title"],
        style: {
          color: "#569CD6",
          fontWeight: "bold",
        },
      },
      {
        types: ["property", "parameter"],
        style: {
          color: "#9CDCFE",
        },
      },
      {
        types: ["script"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["boolean", "arrow", "atrule", "tag"],
        style: {
          color: "#569CD6",
        },
      },
      {
        types: ["number", "color", "unit"],
        style: {
          color: "#B5CEA8",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#8cc8ff",
        },
      },
      {
        types: ["font-matter"],
        style: {
          color: "#CE9178",
        },
      },
      {
        types: ["keyword", "rule"],
        style: {
          color: "#C586C0",
        },
      },
      {
        types: ["regex"],
        style: {
          color: "#D16969",
        },
      },
      {
        types: ["maybe-class-name"],
        style: {
          color: "#4EC9B0",
        },
      },
      {
        types: ["constant"],
        style: {
          color: "#4FC1FF",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "var(--ifm-color-gray-500)",
        },
      },
    ],
  };
  (config.themeConfig.prism as any).darkTheme = {
    ...prismTheme,
    plain: {
      color: "var(--ifm-color-gray-200)",
      backgroundColor: "#000",
    },
    styles: [
      ...prismTheme.styles,
      {
        types: ["prolog"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["title"],
        style: {
          color: "#569CD6",
          fontWeight: "bold",
        },
      },
      {
        types: ["property", "parameter"],
        style: {
          color: "#9CDCFE",
        },
      },
      {
        types: ["script"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["boolean", "arrow", "atrule", "tag"],
        style: {
          color: "#569CD6",
        },
      },
      {
        types: ["number", "color", "unit"],
        style: {
          color: "#B5CEA8",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#8cc8ff",
        },
      },
      {
        types: ["font-matter"],
        style: {
          color: "#CE9178",
        },
      },
      {
        types: ["keyword", "rule"],
        style: {
          color: "#C586C0",
        },
      },
      {
        types: ["regex"],
        style: {
          color: "#D16969",
        },
      },
      {
        types: ["maybe-class-name"],
        style: {
          color: "#4EC9B0",
        },
      },
      {
        types: ["constant"],
        style: {
          color: "#4FC1FF",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "var(--ifm-color-gray-500)",
        },
      },
    ],
  };

  return config;
}

module.exports = createConfig;
