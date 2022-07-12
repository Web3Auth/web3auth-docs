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
        "overview/web3auth-and-wallets",
        {
          type: "category",
          label: "Key Management",
          link: { type: "doc", id: "overview/key-management/key-management" },
          items: [
            {
              type: "category",
              label: "Technical Architecture",
              link: { type: "doc", id: "overview/key-management/technical-architecture/technical-architecture" },
              items: [
                {
                  type: "category",
                  label: "Role of Nodes",
                  link: { type: "doc", id: "overview/key-management/technical-architecture/role-of-nodes/role-of-nodes" },
                  items: [
                    "overview/key-management/technical-architecture/role-of-nodes/lifecycle",
                    "overview/key-management/technical-architecture/role-of-nodes/key-generation",
                    "overview/key-management/technical-architecture/role-of-nodes/logins-key-assignment",
                    "overview/key-management/technical-architecture/role-of-nodes/oauth2-vs-proxy-signin",
                    {
                      type: "link",
                      label: "DKG Technical Specification",
                      href: "https://github.com/torusresearch/audit/blob/master/Torus_DKG_Technical_Specification.pdf",
                    },
                  ],
                },
              ],
            },
            "overview/key-management/audits",
          ],
        },
      ],
    },
    "quick-start",
    {
      type: "category",
      label: "Developer Dashboard",
      link: { type: "doc", id: "developer-dashboard/developer-dashboard" },
      items: ["developer-dashboard/get-client-id", "developer-dashboard/enable-interoperability", "developer-dashboard/setup-custom-authentication"],
    },
    "self-hosting",
    {
      type: "category",
      label: "Connect Blockchain",
      link: { type: "doc", id: "connect-blockchain/connect-blockchain" },
      items: [
        {
          type: "category",
          label: "EVM Based Chains",
          items: [
            "connect-blockchain/ethereum",
            "connect-blockchain/polygon",
            "connect-blockchain/bnb",
            "connect-blockchain/avalanche",
            "connect-blockchain/arbitrum",
            "connect-blockchain/optimism",
          ],
          collapsible: true,
          collapsed: false,
        },
        "connect-blockchain/solana",
        "connect-blockchain/starkex",
        "connect-blockchain/starknet",
        "connect-blockchain/tezos",
      ],
    },
    {
      type: "category",
      label: "Custom Authentication",
      link: { type: "doc", id: "custom-authentication/custom-authentication" },
      items: [
        "custom-authentication/verifiers",
        {
          type: "category",
          label: "Social Providers",
          link: { type: "doc", id: "custom-authentication/social-providers/social-providers" },
          items: [
            "custom-authentication/social-providers/google",
            "custom-authentication/social-providers/facebook",
            "custom-authentication/social-providers/twitch",
            "custom-authentication/social-providers/discord",
          ],
          collapsible: true,
          collapsed: false,
        },
        "custom-authentication/federated-identity-providers",
        "custom-authentication/byo-jwt-providers",
      ],
    },
    {
      type: "category",
      label: "Whitelabel",
      link: { type: "doc", id: "whitelabel/whitelabel" },
      items: ["whitelabel/login-modal", "whitelabel/user-flow-screens", "whitelabel/torus-wallet-plugin"],
    },
    "interoperability",
    {
      type: "category",
      label: "Server Side Verification",
      link: { type: "doc", id: "server-side-verification/server-side-verification" },
      items: [
        "server-side-verification/social-login-users",
        "server-side-verification/external-wallets",
        {
          type: "link",
          label: "Sign in with Web3",
          href: "https://siww.web3auth.io/",
        },
        {
          type: "link",
          label: "Sign in with Solana",
          href: "https://siws.web3auth.io/",
        },
        {
          type: "link",
          label: "Sign in with Starkware",
          href: "https://siwst.web3auth.io/",
        },
      ],
    },
    {
      type: "category",
      label: "Examples",
      link: { type: "doc", id: "examples/examples" },
      items: [
        "examples/liveexamples",
        {
          type: "link",
          label: "Integration Builder",
          href: "/integration-builder",
        },
        {
          type: "link",
          label: "Guides",
          href: "/guides",
        },
      ],
    },
    "connect-external-wallets",
    {
      type: "html",
      value: "<hr /><strong style='color: #606770'>Additional Reading</strong>",
      className: "sidebar-title",
      defaultStyle: true,
    },
    {
      Troubleshooting: ["troubleshooting/error-429", "troubleshooting/webpack-issues"],
    },
    {
      type: "category",
      label: "Contribute",
      link: { type: "doc", id: "contribute/contribute" },
      items: ["contribute/bug-bounty"],
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
    },
    {
      type: "link",
      label: "SDK Reference",
      href: "/sdk",
    },
  ],
  sdk: [
    {
      type: "doc",
      label: "Introduction",
      id: "sdk/sdk",
    },
    {
      type: "category",
      label: "Web3Auth Plug and Play",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Web",
          link: { type: "doc", id: "sdk/web/web" },
          items: [
            {
              type: "category",
              label: "@web3auth/web3auth",
              link: { type: "doc", id: "sdk/web/web3auth/web3auth" },
              items: [
                "sdk/web/web3auth/initialize",
                "sdk/web/web3auth/whitelabel",
                "sdk/web/web3auth/custom-authentication",
                "sdk/web/web3auth/usage",
              ],
            },
            {
              type: "category",
              label: "@web3auth/core",
              link: { type: "doc", id: "sdk/web/core/core" },
              items: [
                "sdk/web/core/initialize",
                "sdk/web/core/whitelabel",
                "sdk/web/core/custom-authentication",
                "sdk/web/core/usage"
              ],
            },
            "sdk/web/openlogin",
            {
              type: "category",
              label: "Providers",
              link: { type: "doc", id: "sdk/web/providers/providers" },
              items: ["sdk/web/providers/evm", "sdk/web/providers/solana", "sdk/web/providers/other"],
            },
            {
              type: "category",
              label: "Plugins",
              link: { type: "doc", id: "sdk/web/plugins/plugins" },
              items: ["sdk/web/plugins/torus-wallet", "sdk/web/plugins/solana-wallet"],
            },
            {
              type: "category",
              label: "Adapters",
              link: { type: "doc", id: "sdk/web/adapters/adapters" },
              items: [
                "sdk/web/adapters/torus-evm",
                "sdk/web/adapters/torus-solana",
                "sdk/web/adapters/metamask",
                "sdk/web/adapters/phantom",
                "sdk/web/adapters/wallet-connect-v1",
                "sdk/web/adapters/coinbase",
                "sdk/web/adapters/slope",
                "sdk/web/adapters/solflare",
                "sdk/web/adapters/sollet",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Android",
          link: { type: "doc", id: "sdk/android/android" },
          items: ["sdk/android/initialize", "sdk/android/whitelabel", "sdk/android/custom-authentication", "sdk/android/usage"],
        },
        {
          type: "category",
          label: "iOS",
          link: { type: "doc", id: "sdk/ios/ios" },
          items: ["sdk/ios/initialize", "sdk/ios/whitelabel", "sdk/ios/custom-authentication", "sdk/ios/usage"],
        },
        {
          type: "category",
          label: "React Native",
          link: { type: "doc", id: "sdk/react-native/react-native" },
          items: ["sdk/react-native/initialize", "sdk/react-native/whitelabel", "sdk/react-native/custom-authentication", "sdk/react-native/usage"],
        },
        {
          type: "category",
          label: "Flutter",
          link: { type: "doc", id: "sdk/flutter/flutter" },
          items: ["sdk/flutter/initialize", "sdk/flutter/whitelabel", "sdk/flutter/custom-authentication", "sdk/flutter/usage"],
        },
      ],
    },
    {
      type: "category",
      label: "Web3Auth Self Host",
      collapsible: false,
      items: [
        "sdk/self-host/installation",
        "sdk/self-host/initialization",
        "sdk/self-host/service-provider",
        "sdk/self-host/storage-layer",
        {
          type: "category",
          label: "Modules",
          link: { type: "doc", id: "sdk/self-host/modules/modules" },
          items: [
            "sdk/self-host/modules/chrome-storage",
            "sdk/self-host/modules/web-storage",
            "sdk/self-host/modules/security-questions",
            "sdk/self-host/modules/share-transfer",
            "sdk/self-host/modules/seed-phrase",
            "sdk/self-host/modules/private-keys",
            "sdk/self-host/modules/share-serialization",
          ],
        },
        "sdk/self-host/usage",
      ],
    },
    {
      type: "html",
      value: "<hr /><strong style='color: #606770'>Additional Reading</strong>",
      className: "sidebar-title",
      defaultStyle: true,
    },
    {
      type: "link",
      label: "Troubleshooting",
      href: "/docs/troubleshooting/webpack-issues",
    },
    {
      type: "link",
      label: "Server Side Verification",
      href: "/docs/server-side-verification/",
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
    },
    {
      type: "link",
      label: "SDK Reference",
      href: "/sdk",
    },
  ],
};
