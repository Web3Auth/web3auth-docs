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
    "whitelabeling",
    "customauth",
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          Web: ["api-reference/web/setting-up", "api-reference/web/plugnplay", "api-reference/web/customui", "api-reference/web/adapters", "api-reference/web/providers", "api-reference/web/customauth"],
        },
        {
          Android: ["api-reference/android/setting-up", "api-reference/android/usage", "api-reference/android/whitelabel", "api-reference/android/customauth"],
        },
        {
          iOS: ["api-reference/ios/setting-up", "api-reference/ios/usage", "api-reference/ios/whitelabel", "api-reference/ios/customauth"],
        },
        {
          'React Native': ["api-reference/react-native/setting-up", "api-reference/react-native/usage", "api-reference/react-native/whitelabel", "api-reference/react-native/customauth"],
        },
        {
          Flutter: ["api-reference/flutter/setting-up", "api-reference/flutter/usage", "api-reference/flutter/whitelabel", "api-reference/flutter/customauth"],
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
