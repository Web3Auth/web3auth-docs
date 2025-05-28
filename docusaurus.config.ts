import path from "path";
import dotenv from "dotenv";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";
import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
const sidebarPath = require.resolve("./sidebars");
const customCss = require.resolve("./src/css/custom.css");
// Initialize dotenv
dotenv.config();

const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const baseUrl = process.env.REACT_APP_BASE_URL || "/docs/";

const resourcesDropdown = fs.readFileSync("./src/components/navDropdown/resources.html", "utf-8");
const helpDropdown = fs.readFileSync("./src/components/navDropdown/help.html", "utf-8");
const sdkDropdown = fs.readFileSync("./src/components/navDropdown/sdk.html", "utf-8");

const config: Config = {
  title: "Documentation | Web3Auth",
  tagline: "Web3 Auth and Wallet Management (WaaS) SDKs with MPC",
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
        '<a href="https://web3auth.io/community/t/web3auth-developer-office-hours/8777" target="_blank">Stuck somewhere in the integration? Join the biweekly Web3Auth Office Hours →</a>',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ["groovy", "java", "kotlin", "swift", "dart", "csharp"],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-unfocus",
          line: "unfocus-next-line",
          block: { start: "unfocus-start", end: "unfocus-end" },
        },
        {
          className: "code-focus",
          line: "focus-next-line",
          block: { start: "focus-start", end: "focus-end" },
        },
        {
          className: "git-diff-remove",
          line: "remove-next-line",
          block: { start: "remove-start", end: "remove-end" },
        },
        {
          className: "git-diff-add",
          line: "add-next-line",
          block: { start: "add-start", end: "add-end" },
        },
      ],
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
          label: "Examples",
          to: "/examples",
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
        {
          position: "right",
          href: githubOrgUrl,
          className: "navbar-github-link",
          "aria-label": "GitHub Organization",
        },
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
      insights: true,
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
    {
      src: "https://polyfill.io/v3/polyfill.min.js?features=MutationObserver",
      async: true,
    },
    {
      src: baseUrl + "js/code-focus.js",
      async: false,
      defer: true,
    },
    {
      src: "https://cmp.osano.com/AzZMxHTbQDOQD8c1J/da3b35cc-707f-44ba-a83e-b28b8a08eeac/osano.js",
      async: true,
      defer: true,
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
          sidebarPath,
          remarkPlugins: [remarkMath, [npm2yarn, { sync: true }]],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss,
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
          remarkPlugins: [remarkMath, [npm2yarn, { sync: true }]],
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
            from: "/get-started",
            to: "/quick-start",
          },

          {
            from: "/features/blockchain-agnostic",
            to: "/features/compatible-blockchains",
          },
          {
            from: "/features/wallet-aggregation",
            to: "/features/external-wallets",
          },

          {
            from: "/developer-dashboard/",
            to: "/dashboard/",
          },
          {
            from: "/dashboard-setup/",
            to: "/dashboard/",
          },
          {
            from: "/developer-dashboard/get-client-id",
            to: "/dashboard/",
          },
          {
            from: "/developer-dashboard/enable-interoperability",
            to: "/dashboard/",
          },
          {
            from: "/developer-dashboard/setup-custom-authentication",
            to: "/dashboard/configure-connections",
          },
          {
            from: "/developer-dashboard/billing-and-user-stats",
            to: "/dashboard/create-new-project",
          },
          {
            from: "/customauth",
            to: "/authentication/",
          },
          {
            from: "/customauth/verifiers",
            to: "/authentication/",
          },
          {
            from: "/troubleshooting/different-wallet-address-issue",
            to: "/troubleshooting/different-private-key",
          },
          {
            to: "/features/smart-accounts",
            from: "/features/account-abstraction",
          },
          {
            from: "/pnp/going-live",
            to: "/resources/checklist",
          },
          {
            from: "/core-kit/going-live",
            to: "/resources/checklist",
          },
          {
            from: "/authentication/federated-identity-providers",
            to: "/authentication/custom-connections/auth0",
          },
          {
            from: "/authentication/byo-jwt-providers",
            to: "/authentication/custom-connections/custom-jwt",
          },
          {
            from: "/product/product-fit",
            to: "/product-fit",
          },
          {
            from: "/product/core-kit",
            to: "/product/mpc-core-kit",
          },
          {
            from: "/product-fit/pnp-vs-core-kit",
            to: "/product-fit",
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
          // Only create redirects if the path matches certain patterns
          if (
            existingPath.includes("/sdk/") ||
            existingPath.includes("/guides/") ||
            existingPath.includes("/features/") ||
            existingPath.includes("/product/")
          ) {
            return [
              existingPath.replace("/sdk", "/api-reference"),
              existingPath.replace("/sdk", "/sdk-reference"),
              existingPath.replace(
                "/sdk/mpc-core-kit/mpc-core-kit-js/",
                "/sdk/core-kit/mpc-core-kit/",
              ),
              existingPath.replace("/sdk/pnp/web/", "/sdk/web/"),
              existingPath.replace("/sdk/pnp/android/", "/sdk/mobile/pnp/android/"),
              existingPath.replace("/sdk/pnp/ios/", "/sdk/mobile/pnp/ios/"),
              existingPath.replace("/sdk/pnp/flutter/", "/sdk/mobile/pnp/flutter/"),
              existingPath.replace("/sdk/pnp/react-native/", "/sdk/mobile/pnp/react-native/"),
              existingPath.replace("/sdk/sfa/sfa-android/", "/sdk/mobile/sfa/android/"),
              existingPath.replace("/sdk/sfa/sfa-ios/", "/sdk/mobile/sfa/ios/"),
              existingPath.replace("/sdk/sfa/sfa-flutter/", "/sdk/mobile/sfa/flutter/"),
              existingPath.replace("/sdk/sfa/sfa-react-native/", "/sdk/mobile/sfa/react-native/"),
              existingPath.replace("/guides/", "/content-hub/guides/"),
            ].filter((redirect) => redirect !== existingPath); // Remove any redirects that point to the same path
          }
          return []; // Return empty array for paths that don't need redirects
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

  (config.themeConfig!.prism as any).theme = {
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
  (config.themeConfig!.prism as any).darkTheme = {
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
