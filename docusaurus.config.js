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
  url: "https://docs.web3auth.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: githubOrg,
  projectName: githubRepo,
  themeConfig: {
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
          label: "Quick Start",
          activeBasePath: "/quick-start",
          to: "/quick-start",
          position: "left",
        },
        {
          label: "SDK/ API Reference",
          activeBasePath: "/api-reference",
          to: "/api-reference",
          position: "left",
        },
        {
          label: "Dashboard",
          href: "https://dashboard.web3auth.io",
          target: "_blank",
          position: "left",
        },
        {
          label: "Schedule a Demo",
          href: contactUrl,
          position: "left",
        },
        {
          position: "right",
          href: githubCoreRepoUrl,
          className: "navbar-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    algolia: {
      appId: "6OF28D8CMV",
      apiKey: "425a1e860cb4b9b4ce1f7d9b117c7a81",
      indexName: "docs-web3auth",
      schedule: 'every 1 day at 3:00 pm',
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
    [path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"), { rootDir: "files" }],
    path.resolve(__dirname, "plugins", "node-polyfills"),
  ],
};
