/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: false,
      items: [
        "overview/what-is-web3auth",
        "overview/how-web3auth-works",
        "overview/key-management",
        "overview/web3auth-and-wallets",
        "overview/audits",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      link: { type: "doc", id: "get-started/get-started" },
      items: [
        "get-started/quickstart",
        "get-started/glossary",
        "get-started/understand-sdk",
      ]
    },
    "using-dashboard",
    "adapters",
    "connect-blockchain",
    {
      type: "category",
      label: "Using Custom Authentication",
      link: { type: "doc", id: "customauth/customauth" },
      items: [
        "customauth/verifiers",
        "customauth/auth0"],
    },
    "interoperability",
    "whitelabeling",
    {
      type: "link",
      label: "SDK/ API Reference",
      href: "/api-reference",
    },
    {
      type: "category",
      label: "Authenticating Users",
      link: { type: "doc", id: "authenticating-users/overview" },
      items: ["authenticating-users/social-login-users", "authenticating-users/external-wallets"],
    },
    {
      type: "category",
      label: "Examples",
      link: { type: "doc", id: "examples/examples" },
      items: [
        "examples/demo",
        "examples/productionexamples"],
    },
    {
      type: "category",
      label: "Contribute",
      items: [
        "contribute/open-source",
        "contribute/bug-bounty"],
    },
    {
      Troubleshooting: [
        "troubleshooting/webpack-issues"
      ],
    },
    {
      Legal: [
        "legal/cookie-policy",
        "legal/privacy-policy",
        "legal/terms-and-conditions"
      ],
    },
    { type: "html", value: "<hr /><strong style='color: #606770'>Quick Links</strong>", defaultStyle: true },

    {
      type: "link",
      label: "GitHub",
      href: "https://github.com/web3auth/web3auth",
    },
    {
      type: "link",
      label: "Support (Telegram)",
      href: "https://t.me/web3authdev",
    },
    {
      type: "link",
      label: "Discord",
      href: "https://discord.gg/web3auth",
    },
    {
      type: "link",
      label: "Dashboard",
      href: "https://dashboard.web3auth.io/",
    },
    {
      type: "link",
      label: "Schedule a Demo",
      href: "https://calendly.com/web3auth/meeting-with-web3auth",
    },
    {
      type: "link",
      label: "Status",
      href: "https://status.web3auth.io/",
    },
  ],
  apiReference:
    [
      { type: "html", value: "<strong style='color: #606770'>Web3Auth Plug and Play</strong>", defaultStyle: true },

      {
        type: "category",
        label: "Web",
        items: [
          "api-reference/web/choosesdk",
          "api-reference/web/plugnplay",
          "api-reference/web/customloginui",
          {
            type: "category",
            label: "Providers",
            link: { type: "doc", id: "api-reference/web/providers/providers" },
            items: ["api-reference/web/providers/evm", "api-reference/web/providers/solana"],
          },
          {
            type: "category",
            label: "Plugins",
            link: { type: "doc", id: "api-reference/web/plugins/plugins" },
            items: ["api-reference/web/plugins/torusevmwalletplugin", "api-reference/web/plugins/torussolanawalletplugin"],
          },
          {
            type: "category",
            label: "Adapters",
            link: { type: "doc", id: "api-reference/web/adapters/adapters" },
            items: [
              "api-reference/web/adapters/openlogin",
              "api-reference/web/adapters/torus-evm",
              "api-reference/web/adapters/torus-solana",
              "api-reference/web/adapters/metamask",
              "api-reference/web/adapters/phantom",
              "api-reference/web/adapters/wallet-connect-v1",
            ],
          },
          ,
          "api-reference/web/customauth",
        ],
      },
      {
        Android: [
          "api-reference/android/setting-up",
          "api-reference/android/usage",
          "api-reference/android/whitelabel",
          "api-reference/android/customauth",
        ],
      },
      {
        iOS: [
          "api-reference/ios/setting-up",
          "api-reference/ios/usage",
          "api-reference/ios/whitelabel",
          "api-reference/ios/customauth"],
      },
      {
        "React Native": [
          "api-reference/react-native/choose-workflows",
          "api-reference/react-native/setting-up",
          "api-reference/react-native/usage",
          "api-reference/react-native/whitelabel",
          "api-reference/react-native/customauth",
        ],
      },
      {
        Flutter: [
          "api-reference/flutter/setting-up",
          "api-reference/flutter/usage",
          "api-reference/flutter/whitelabel"],
      },
      { type: "html", value: "<strong style='color: #606770'>Web3Auth Self Hosting</strong>", defaultStyle: true },

      { type: "html", value: "<hr /><strong style='color: #606770'>Quick Links</strong>", defaultStyle: true },

      {
        type: "link",
        label: "GitHub",
        href: "https://github.com/web3auth/web3auth",
      },
      {
        type: "link",
        label: "Support (Telegram)",
        href: "https://t.me/web3authdev",
      },
      {
        type: "link",
        label: "Discord",
        href: "https://discord.gg/web3auth",
      },
      {
        type: "link",
        label: "Dashboard",
        href: "https://dashboard.web3auth.io/",
      },
      {
        type: "link",
        label: "Schedule a Demo",
        href: "https://calendly.com/web3auth/meeting-with-web3auth",
      },
      {
        type: "link",
        label: "Status",
        href: "https://status.web3auth.io/",
      },
    ],
};
