/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Overview",
      items: [
        "overview/what-is-web3auth",
        "overview/key-management-and-security",
        "overview/release-notes",
        "overview/audits",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      items: [
        "get-started/basic-installation",
        {
          type: 'link',
          label: 'Quick Starts',
          href: 'https://facebook.com',
        },
        {
          type: 'link',
          label: 'Demo Apps',
          href: '../examples-and-usecases',
        },
      ],
    },
    {
      type: "category",
      label: "Developing with Web3Auth",
      items: [
        "developing-with-web3auth/adapters-and-configuration",
        "developing-with-web3auth/event-lifecycle",
        "developing-with-web3auth/providers",
        "developing-with-web3auth/verifiers",
      ],
    },
    {
      type: "category",
      label: "Whitelabeling & Customisation",
      items: [
        "whitelabeling/adapters",
      ],
    },
    {
      type: "category",
      label: "Using your own auth",
      items: [
        "customauth/get-started",
        "customauth/designing-your-key-management-architecture",
        "customauth/verifiers",
        {
          "Setting up Verifiers on Developer Dashboard": [
            "customauth/setting-up-verifiers/seting-up-verifiers",
            "customauth/setting-up-verifiers/custom-verifier",
          ],
        },
        "customauth/linking-accounts",
        "customauth/redirects-and-service-workers",
        "customauth/faq",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "api-reference/modal",
        "api-reference/core",
        "api-reference/adapter-config",
        "api-reference/whitelabel",
        "api-reference/providers",
        "api-reference/glossary",
        {
          OpenLogin: ["api-reference/openlogin/web", "api-reference/openlogin/ios-swift", "api-reference/openlogin/android"],
        },
        {
          CustomAuth: ["api-reference/customauth/installation", "api-reference/customauth/initialization", "api-reference/customauth/usage"],
        },
      ],
    },
    "examples-and-usecases",
    {
      type: "category",
      label: "Contribute",
      items: ["contribute/open-source", "contribute/bug-bounty"],
    },
    {
      type: 'category',
      label: 'Quick Links',
      collapsible: false,
      items: [
        {
          type: 'link',
          label: 'GitHub',
          href: 'https://github.com/web3auth/web3auth',
        },
        {
          type: 'link',
          label: 'Support',
          href: 'https://t.me/web3authdev',
        },
        {
          type: 'link',
          label: 'Discord',
          href: 'https://discord.gg/web3auth',
        },
        {
          type: 'link',
          label: 'Dashboard',
          href: 'https://dashboard.web3auth.io/',
        },
        {
          type: 'link',
          label: 'Schedule a Demo',
          href: 'https://calendly.com/web3auth/meeting-with-web3auth',
        },
        {
          type: 'link',
          label: 'Status',
          href: 'https://status.web3auth.io/',
        },
      ]
    },
  ],
};
