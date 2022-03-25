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
        "overview/audits",
        {
          Legal: ["overview/legal/cookie-policy", "overview/legal/privacy-policy", "overview/legal/terms-and-conditions"]
        }
      ],
    },
    "get-started",
    {
      type: "category",
      label: "Developing with Web3Auth",
      items: [
        "developing-with-web3auth/glossary",
        "developing-with-web3auth/using-dashboard",
        "developing-with-web3auth/adapters-and-configuration",
        "developing-with-web3auth/event-lifecycle",
        {
          type: "category",
          label: "Connect with Blockchain",
          link: { type: "doc", id: "developing-with-web3auth/connect-blockchain/connect-blockchain" },
          items: [
            "developing-with-web3auth/connect-blockchain/arbitrum",
            "developing-with-web3auth/connect-blockchain/avalanche",
            "developing-with-web3auth/connect-blockchain/binance",
            "developing-with-web3auth/connect-blockchain/ethereum",
            "developing-with-web3auth/connect-blockchain/polygon",
            "developing-with-web3auth/connect-blockchain/solana",
            "developing-with-web3auth/connect-blockchain/starknet",
            "developing-with-web3auth/connect-blockchain/zksync",
          ]
        },
        "developing-with-web3auth/verifiers",
      ],
    },
    "whitelabeling",
    "customauth",
    {
      type: "category",
      label: "API Reference",
      link: {
        type: 'generated-index',
        title: 'API Reference',
        description: 'Explore the Web3Auth SDKs at a glance',
        slug: '/category/api-reference',
        keywords: ['api-reference'],
      },
      items: [
        {
          Web: [
            "api-reference/web/choosesdk",
            "api-reference/web/plugnplay",
            "api-reference/web/customui",
            "api-reference/web/adapters",
            "api-reference/web/providers",
            "api-reference/web/customauth"
          ],
        },
        {
          Android: [
            "api-reference/android/setting-up",
            "api-reference/android/usage",
            "api-reference/android/whitelabel",
            "api-reference/android/customauth"
          ],
        },
        {
          iOS: [
            "api-reference/ios/setting-up",
            "api-reference/ios/usage",
            "api-reference/ios/whitelabel",
            "api-reference/ios/customauth"
          ],
        },
        {
          'React Native': [
            "api-reference/react-native/setting-up",
            "api-reference/react-native/usage",
            "api-reference/react-native/whitelabel",
            "api-reference/react-native/customauth"
          ],
        },
        {
          Flutter: [
            "api-reference/flutter/setting-up",
            "api-reference/flutter/usage",
            "api-reference/flutter/whitelabel",
            "api-reference/flutter/customauth"
          ],
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
