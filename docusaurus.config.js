const path = require("path");

const githubOrg = "torusresearch";
const githubRepo = "torus-documentation";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const contactUrl = "https://web3auth.io/contact-us.html"; // TODO: Confirm with content team
const mediumUrl = "https://medium.com/web3auth";
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Documentation",
  tagline: "Flexible, Universal Key Management", // TODO: Confirm with content team
  url: "https://tor.us",
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
          target: "_self",
          position: "right",
          className: "navbar__button",
        },
        // {
        //   label: "Integration Builder",
        //   to: "/integration-builder",
        //   position: "left",
        //   className: "navbar__button",
        // },
        {
          label: "Guides",
          to: "/guides",
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
              href: "https://toruswallet.io/",
            },
            {
              label: "OpenLogin",
              href: "https://openlogin.com", // TODO: beta.openlogin.com?
            }
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
              href: "https://t.me/torusdev", //TODO
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
    gtag: {
      trackingID: "UA-126622802-2",
    },
    algolia: {
      apiKey: "bfa3491434f947c6262b60ce9b66471c",
      indexName: "torus",
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
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-guides"),
    path.resolve(__dirname, "plugins", "docusaurus-plugin-mdx-components"),
    [
      path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"),
      { rootDir: "files" },
    ],
    path.resolve(__dirname, "plugins", "node-polyfills"),
  ],
};
