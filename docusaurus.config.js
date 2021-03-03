const path = require("path");

module.exports = {
  title: "Torus Documentation",
  tagline: "Flexible, Universal Key Management",
  url: "https://docs.tor.us",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "torus",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Torus",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "integration-builder",
          label: "Integration Builder",
          position: "right",
        },
        {
          href: "https://dashboard.tor.us", // TODO: replace with actual dashboard link
          label: "Dashboard",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Users",
          items: [
            {
              label: "OpenLogin",
              href: "https://openlogin.com",
            },
            {
              label: "Torus Wallet",
              href: "https://app.tor.us/",
            },
            {
              label: "Torus Extension (coming soon)",
              href: "https://tor.us/media-kit.html#",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "OpenLogin",
              href: "https://openlogin.com",
            },
            {
              label: "DirectAuth",
              href: "https://docs.tor.us/direct-auth/what-is-directauth",
            },
            {
              label: "Torus Embed",
              href:
                "https://docs.tor.us/torus-wallet/quick-start#integrate-via",
            },
            {
              label: "tKey",
              href: "https://hackmd.io/keVuRfrwSxygfyCfzsrQfw",
            },
            {
              label: "Status",
              href: "https://status.torusnode.com/",
            },
            {
              label: "Support",
              href: "https://t.me/torusdev",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/TorusLabs",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/TorusLabs",
            },
            {
              label: "Medium",
              href: "https://tor.us/images/Exclude.png",
            },
            {
              label: "Github",
              href: "https://github.com/torusresearch/",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/toruslabs",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/toruslabs",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/c/toruslabs",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About us",
              to: "https://tor.us/about-us.html",
            },
            {
              label: "Partners",
              href: "https://tor.us/partners.html",
            },
            {
              label: "Career",
              href: "https://angel.co/company/torus-2",
            },
            {
              label: "Media kit",
              href: "https://tor.us/media-kit.html",
            },
            {
              label: "Blog",
              href: "https://medium.com/@TorusLabs",
            },
            {
              label: "Contact us",
              href: "https://tor.us/contact-us.html",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Torus Labs Private Limited`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/torusresearch/torus-documentation/edit/master/",
        },
        theme: {
          customCss: require.resolve("./styles.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-mdx-component"),
  ],
};
