const path = require("path");

const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const contactUrl = "https://web3auth.io/contact-us.html"; // TODO: Confirm with content team
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
      disableSwitch: true, // Set to "true" when Dark mode is ready
      respectPrefersColorScheme: false, // Set to "true" when Dark mode is ready
    },
    prism: {
      additionalLanguages: ["groovy", "java", "kotlin", "swift"],
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Web3Auth's Logo",
        src: "images/documentation-logo.svg",
      },
      items: [
        {
          label: "Dashboard",
          href: "https://dashboard.web3auth.io",
          target: "_blank",
          position: "right",
          className: "navbar__button",
        },
        {
          label: "Quick Start",
          to: "/quick-start",
          position: "left",
          className: "navbar__button",
        },
        {
          label: "Contact us",
          href: contactUrl,
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Users",
          items: [
            {
              label: "Torus Wallet",
              href: "https://app.tor.us",
            },
            {
              label: "OpenLogin",
              href: "https://app.openlogin.com",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Torus Wallet",
              href: "https://toruswallet.io/",
            },
            {
              label: "CustomAuth",
              href: "https://customauth.io",
            },
            {
              label: "OpenLogin",
              href: "https://openlogin.com",
            },
            {
              label: "tKey",
              href: "https://tkey.io/",
            },
            {
              label: "Status",
              href: "https://status.web3auth.io",
            },
            {
              label: "Support",
              href: "https://t.me/web3authdev",
            },
          ],
        },
        {
          // TODO: Confirm with content team
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/web3auth",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/web3auth",
            },
            {
              label: "Medium",
              href: mediumUrl,
            },
            {
              label: "Github",
              href: githubOrgUrl,
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/web3auth",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/web3auth",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/c/web3auth",
            },
          ],
        },
        {
          // TODO: Confirm with content team
          title: "Company",
          items: [
            {
              label: "About us",
              to: "https://web3auth.io/about-us.html",
            },
            {
              label: "Partners",
              href: "https://web3auth.io/partners.html",
            },
            {
              label: "Career",
              href: "https://angel.co/company/torus-2",
            },
            {
              label: "Media kit",
              href: "https://web3auth.io/media-kit.html",
            },
            {
              label: "Blog",
              href: mediumUrl,
            },
            {
              label: "Contact us",
              href: contactUrl,
            },
          ],
        },
      ],
      logo: {
        alt: "Web3Auth's Logo",
        src: "images/logo.svg",
      },
      copyright: `© ${new Date().getFullYear()} Torus Labs Private Limited`,
    },
    // gtag: {
    //   trackingID: "UA-126622802-2",
    // },
    algolia: {
      appId: "6OF28D8CMV",
      apiKey: "425a1e860cb4b9b4ce1f7d9b117c7a81",
      indexName: "docs-web3auth",
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
        /** Uncomment to enable Blog features, see https://v2.docusaurus.io/docs/blog
        blog: {
          showReadingTime: true,
          editUrl: githubEditUrl,
        },
        */
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          //
          trackingID: "GTM-ML3T5M6",
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-guides"),
    [path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"), { rootDir: "files" }],
    path.resolve(__dirname, "plugins", "node-polyfills"),
  ],
};
