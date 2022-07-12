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
        "overview/web3auth-vs-wallets",
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
      items: [
        "developer-dashboard/get-client-id",
        "developer-dashboard/enable-interoperability",
        "developer-dashboard/setup-custom-authentication",
      ],
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
            "connect-blockchain/evm/ethereum",
            "connect-blockchain/evm/polygon",
            "connect-blockchain/evm/bnb",
            "connect-blockchain/evm/avalanche",
            "connect-blockchain/evm/arbitrum",
            "connect-blockchain/evm/optimism",
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
        "custom-authentication/create-verifiers",
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
      items: ["server-side-verification/social-login-users", "server-side-verification/external-wallets"],
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
      label: "SDK/ API Reference",
      href: "/api-reference",
    },
  ],
  apiReference: [
    {
      type: "doc",
      label: "Introduction",
      id: "api-reference/api-reference",
    },
    {
      type: "category",
      label: "Web",
      link: { type: "doc", id: "api-reference/web/web" },
      items: [
        {
          type: "category",
          label: "@web3auth/web3auth",
          link: { type: "doc", id: "api-reference/web/web3auth/web3auth" },
          items: [
            "api-reference/web/web3auth/initialize",
            "api-reference/web/web3auth/whitelabel",
            "api-reference/web/web3auth/custom-authentication",
            "api-reference/web/web3auth/usage",
          ],
        },
        {
          type: "category",
          label: "@web3auth/core",
          link: { type: "doc", id: "api-reference/web/core/core" },
          items: [
            "api-reference/web/core/initialize",
            "api-reference/web/core/whitelabel",
            "api-reference/web/core/custom-authentication",
            "api-reference/web/core/usage",
          ],
        },
        {
          type: "category",
          label: "Providers",
          link: { type: "doc", id: "api-reference/web/providers/providers" },
          items: ["api-reference/web/providers/evm", "api-reference/web/providers/solana", "api-reference/web/providers/other"],
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
      ],
    },
    {
      type: "category",
      label: "Android",
      link: { type: "doc", id: "api-reference/android/android" },
      items: [
        "api-reference/android/initialize",
        "api-reference/android/whitelabel",
        "api-reference/android/custom-authentication",
        "api-reference/android/dapp-share",
        "api-reference/android/usage",
      ],
    },
    {
      type: "category",
      label: "iOS",
      link: { type: "doc", id: "api-reference/ios/ios" },
      items: [
        "api-reference/ios/initialize",
        "api-reference/ios/whitelabel",
        "api-reference/ios/custom-authentication",
        "api-reference/ios/dapp-share",
        "api-reference/ios/usage",
      ],
    },
    {
      type: "category",
      label: "React Native",
      link: { type: "doc", id: "api-reference/react-native/react-native" },
      items: [
        "api-reference/react-native/initialize",
        "api-reference/react-native/whitelabel",
        "api-reference/react-native/custom-authentication",
        "api-reference/react-native/dapp-share",
        "api-reference/react-native/usage",
      ],
    },
    {
      type: "category",
      label: "Flutter",
      link: { type: "doc", id: "api-reference/flutter/flutter" },
      items: [
        "api-reference/flutter/initialize",
        "api-reference/flutter/whitelabel",
        "api-reference/flutter/custom-authentication",
        "api-reference/flutter/dapp-share",
        "api-reference/flutter/usage",
      ],
    },
    {
      type: "category",
      label: "Web3Auth Self Host",
      link: { type: "doc", id: "api-reference/self-host/self-host" },
      items: ["api-reference/self-host/initialize", "api-reference/self-host/usage"],
    },
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
      type: "link",
      label: "Guides",
      href: "/guides",
    },
  ],
};
