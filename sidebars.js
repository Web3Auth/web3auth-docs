/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    // Overview Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Overview</span>",
      defaultStyle: true,
    },
    "what-is-web3auth",
    "how-web3auth-works",
    "user-flow",
    {
      type: "category",
      label: "Deciding your Product Fit",
      link: { type: "doc", id: "product-fit/product-fit" },
      items: ["product-fit/pnp-vs-core-kit", "product-fit/web3auth-for-wallets", "product-fit/web3auth-for-dapps"],
    },
    {
      type: "category",
      label: "Web3Auth Infrastructure",
      link: { type: "doc", id: "infrastructure/infrastructure" },
      items: [
        "infrastructure/mpc-architecture",
        "infrastructure/sss-architecture",
        "infrastructure/nodes-and-dkg",
        "infrastructure/glossary",
        {
          type: "link",
          label: "Compliance, Audits and Trust", // The link label
          href: "https://trust.web3auth.io", // The external URL
        },
      ],
    },
    // Plug and Play Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Plug and Play</span>",
      defaultStyle: true,
    },
    "pnp/introduction",
    {
      type: "category",
      label: "Features",
      // link: { type: "doc", id: "pnp/features/features" },
      items: [
        {
          type: "category",
          label: "Whitelabel",
          link: { type: "doc", id: "pnp/features/whitelabel/whitelabel" },
          items: ["pnp/features/whitelabel/login-modal", "pnp/features/whitelabel/user-flow-screens", "pnp/features/whitelabel/torus-wallet-plugin"],
        },
        "pnp/features/custom-authentication",
        "pnp/features/mfa",
        // "pnp/features/session-management",
        {
          type: "category",
          label: "Server Side Verification",
          link: { type: "doc", id: "pnp/features/server-side-verification/server-side-verification" },
          items: [
            "pnp/features/server-side-verification/social-login-users",
            {
              type: "category",
              label: "External Wallets",
              collapsed: false,
              collapsible: true,
              link: { type: "doc", id: "pnp/features/server-side-verification/external-wallets" },
              items: [
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
          ],
        },
        "pnp/features/interoperability",
        "pnp/features/connect-external-wallets",
        "pnp/features/dapp-share",
      ],
    },
    {
      type: "link",
      label: "Integration Builder",
      href: "/integration-builder",
    },
    "pnp/going-live",
    {
      type: "category",
      label: "Migration Guides",
      items: [
        {
          type: "category",
          label: "PnP Web Modal",
          collapsed: true,
          collapsible: true,
          items: ["pnp/migration-guides/modal-v6-to-v7", "pnp/migration-guides/modal-v5-to-v6"],
        },
        {
          type: "category",
          label: "PnP Web No Modal",
          collapsed: true,
          collapsible: true,
          items: ["pnp/migration-guides/no-modal-v6-to-v7", "pnp/migration-guides/no-modal-v5-to-v6"],
        },

        "pnp/migration-guides/rn-v3-to-v4",
      ],
    },
    // Core Kit Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Core Kit</span>",
      defaultStyle: true,
    },
    "core-kit/introduction",
    "core-kit/going-live",
    // Resources Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Resources</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Dashboard Setup",
      link: { type: "doc", id: "dashboard-setup/dashboard-setup" },
      items: [
        "dashboard-setup/projects-and-analytics",
        "dashboard-setup/whitelisting",
        "dashboard-setup/enable-interoperability",
        "dashboard-setup/setup-custom-authentication",
        "dashboard-setup/billing-and-usage",
        "dashboard-setup/roles-and-permissions",
      ],
    },
    {
      type: "category",
      label: "Auth Provider Setup",
      link: { type: "doc", id: "auth-provider-setup/auth-provider-setup" },
      items: [
        "auth-provider-setup/verifiers",
        "auth-provider-setup/aggregate-verifier",
        {
          type: "category",
          label: "Social Providers",
          link: { type: "doc", id: "auth-provider-setup/social-providers/social-providers" },
          items: [
            "auth-provider-setup/social-providers/google",
            "auth-provider-setup/social-providers/facebook",
            "auth-provider-setup/social-providers/twitch",
            "auth-provider-setup/social-providers/discord",
            "auth-provider-setup/social-providers/twitter",
            "auth-provider-setup/social-providers/apple",
            "auth-provider-setup/social-providers/linkedin",
            "auth-provider-setup/social-providers/github",
            "auth-provider-setup/social-providers/line",
            "auth-provider-setup/social-providers/baidu",
            "auth-provider-setup/social-providers/bitbucket",
            "auth-provider-setup/social-providers/microsoft",
            "auth-provider-setup/social-providers/renren",
            "auth-provider-setup/social-providers/slack",
            "auth-provider-setup/social-providers/spotify",
            "auth-provider-setup/social-providers/vkontakte",
            "auth-provider-setup/social-providers/yandex",
          ],
          collapsible: true,
          collapsed: false,
        },
        "auth-provider-setup/federated-identity-providers",
        "auth-provider-setup/byo-jwt-providers",
      ],
    },
    {
      type: "category",
      label: "Connect Blockchain",
      link: { type: "doc", id: "connect-blockchain/connect-blockchain" },
      items: [
        "connect-blockchain/multi-chain",
        {
          type: "category",
          label: "Ethereum",
          link: { type: "doc", id: "connect-blockchain/ethereum/ethereum" },
          items: [
            "connect-blockchain/ethereum/web",
            "connect-blockchain/ethereum/android",
            "connect-blockchain/ethereum/ios",
            "connect-blockchain/ethereum/react-native",
            "connect-blockchain/ethereum/flutter",
            "connect-blockchain/ethereum/unity",
          ],
        },
        "connect-blockchain/solana",
        "connect-blockchain/xrpl",
        {
          type: "category",
          label: "EVM Based Chains",
          items: [
            "connect-blockchain/polygon",
            "connect-blockchain/base",
            "connect-blockchain/bnb",
            "connect-blockchain/avalanche",
            "connect-blockchain/arbitrum",
            "connect-blockchain/optimism",
            "connect-blockchain/cronos",
            "connect-blockchain/harmony",
            "connect-blockchain/celo",
            "connect-blockchain/moonbeam",
            "connect-blockchain/moonriver",
            "connect-blockchain/klaytn",
            "connect-blockchain/flare",
            "connect-blockchain/songbird",
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          type: "category",
          label: "Non EVM Chains",
          items: [
            "connect-blockchain/starkex",
            "connect-blockchain/starknet",
            "connect-blockchain/tezos",
            "connect-blockchain/algorand",
            "connect-blockchain/immutablex",
            "connect-blockchain/aptos",
            "connect-blockchain/cosmos",
            "connect-blockchain/near",
          ],
          collapsible: true,
          collapsed: false,
        },
      ],
    },
    "examples",
    {
      type: "link",
      label: "Guides",
      href: "/content-hub?type=guides",
    },
    {
      type: "category",
      label: "Troubleshooting",
      link: { type: "doc", id: "troubleshooting/troubleshooting" },
      items: [
        "troubleshooting/different-private-key",
        "troubleshooting/sdk-errors-warnings",
        "troubleshooting/error-429",
        "troubleshooting/webpack-issues",
        "troubleshooting/vite-issues",
        "troubleshooting/metro-issues",
        "troubleshooting/jwt-errors",
        "troubleshooting/supported-browsers",
        "troubleshooting/react-big-int-error",
      ],
    },
    {
      type: "category",
      label: "Contribute",
      link: { type: "doc", id: "contribute/contribute" },
      items: ["contribute/bug-bounty"],
    },
    {
      type: "link",
      label: "SDK Reference",
      href: "/sdk",
    },
    {
      Legal: [
        "legal/cookie-policy",
        "legal/privacy-policy",
        "legal/terms-and-conditions",
        {
          type: "link",
          label: "Trust Center", // The link label
          href: "https://trust.web3auth.io", // The external URL
        },
      ],
    },
  ],
  sdk: [
    {
      type: "html",
      value: "<span class='sidebarHeading'>Plug and Play</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Web SDKs",
      link: { type: "doc", id: "sdk/pnp/web/web" },
      items: [
        {
          type: "category",
          label: "Modal SDK",
          link: { type: "doc", id: "sdk/pnp/web/modal/modal" },
          items: [
            "sdk/pnp/web/modal/install",
            "sdk/pnp/web/modal/initialize",
            "sdk/pnp/web/modal/usage",
            {
              type: "category",
              collapsible: true,
              collapsed: false,
              label: "Additional Settings",
              items: [
                "sdk/pnp/web/modal/whitelabel",
                "sdk/pnp/web/modal/custom-authentication",
                "sdk/pnp/web/modal/mfa",
                "sdk/pnp/web/modal/initiate-topup",
                "sdk/pnp/web/modal/show-wallet-connect",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "No Modal SDK",
          link: { type: "doc", id: "sdk/pnp/web/no-modal/no-modal" },
          items: [
            "sdk/pnp/web/no-modal/install",
            "sdk/pnp/web/no-modal/initialize",
            "sdk/pnp/web/no-modal/usage",
            {
              type: "category",
              collapsible: true,
              collapsed: false,
              label: "Additional Settings",
              items: [
                "sdk/pnp/web/no-modal/whitelabel",
                "sdk/pnp/web/no-modal/custom-authentication",
                "sdk/pnp/web/no-modal/mfa",
                "sdk/pnp/web/no-modal/initiate-topup",
                "sdk/pnp/web/no-modal/show-wallet-connect",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Adapters",
          link: { type: "doc", id: "sdk/pnp/web/adapters/adapters" },
          items: [
            "sdk/pnp/web/adapters/openlogin",
            "sdk/pnp/web/adapters/torus-evm",
            "sdk/pnp/web/adapters/torus-solana",
            "sdk/pnp/web/adapters/metamask",
            "sdk/pnp/web/adapters/phantom",
            "sdk/pnp/web/adapters/wallet-connect-v1",
            "sdk/pnp/web/adapters/wallet-connect-v2",
            "sdk/pnp/web/adapters/coinbase",
            "sdk/pnp/web/adapters/slope",
            "sdk/pnp/web/adapters/solflare",
          ],
        },
        "sdk/pnp/web/wagmi-connector",
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-web/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Android SDK",
      link: { type: "doc", id: "sdk/pnp/android/android" },
      items: [
        "sdk/pnp/android/install",
        "sdk/pnp/android/initialize",
        "sdk/pnp/android/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: ["sdk/pnp/android/whitelabel", "sdk/pnp/android/custom-authentication", "sdk/pnp/android/mfa", "sdk/pnp/android/dapp-share"],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-android-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "iOS SDK",
      link: { type: "doc", id: "sdk/pnp/ios/ios" },
      items: [
        "sdk/pnp/ios/install",
        "sdk/pnp/ios/initialize",
        "sdk/pnp/ios/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: ["sdk/pnp/ios/whitelabel", "sdk/pnp/ios/custom-authentication", "sdk/pnp/ios/mfa", "sdk/pnp/ios/dapp-share"],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-swift-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "React Native SDK",
      link: { type: "doc", id: "sdk/pnp/react-native/react-native" },
      items: [
        "sdk/pnp/react-native/install",
        "sdk/pnp/react-native/initialize",
        "sdk/pnp/react-native/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/pnp/react-native/whitelabel",
            "sdk/pnp/react-native/custom-authentication",
            "sdk/pnp/react-native/mfa",
            "sdk/pnp/react-native/dapp-share",
          ],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-react-native-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Flutter SDK",
      link: { type: "doc", id: "sdk/pnp/flutter/flutter" },
      items: [
        "sdk/pnp/flutter/install",
        "sdk/pnp/flutter/initialize",
        "sdk/pnp/flutter/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: ["sdk/pnp/flutter/whitelabel", "sdk/pnp/flutter/custom-authentication", "sdk/pnp/flutter/mfa", "sdk/pnp/flutter/dapp-share"],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-flutter-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Unity SDK",
      link: { type: "doc", id: "sdk/pnp/unity/unity" },
      items: [
        "sdk/pnp/unity/install",
        "sdk/pnp/unity/initialize",
        "sdk/pnp/unity/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: ["sdk/pnp/unity/whitelabel", "sdk/pnp/unity/custom-authentication", "sdk/pnp/unity/mfa", "sdk/pnp/unity/dapp-share"],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-unity-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Unreal SDK",
      link: { type: "doc", id: "sdk/pnp/unreal/unreal" },
      items: [
        "sdk/pnp/unreal/install",
        "sdk/pnp/unreal/initialize",
        "sdk/pnp/unreal/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: ["sdk/pnp/unreal/whitelabel", "sdk/pnp/unreal/custom-authentication", "sdk/pnp/unreal/mfa"],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-unreal-sdk/releases", // The external URL
        },
      ],
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Core Kit</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "MPC Core Kit SDK",
      link: { type: "doc", id: "sdk/core-kit/mpc-core-kit/mpc-core-kit" },
      items: [
        "sdk/core-kit/mpc-core-kit/install",
        "sdk/core-kit/mpc-core-kit/initialize",
        "sdk/core-kit/mpc-core-kit/authentication",
        "sdk/core-kit/mpc-core-kit/usage",
      ],
    },
    {
      type: "category",
      label: "tKey JS SDK",
      link: { type: "doc", id: "sdk/core-kit/tkey/tkey" },
      items: [
        "sdk/core-kit/tkey/install",
        "sdk/core-kit/tkey/initialize",
        "sdk/core-kit/tkey/usage",
        {
          type: "category",
          label: "Modules",
          collapsible: true,
          collapsed: false,
          link: { type: "doc", id: "sdk/core-kit/tkey/modules/modules" },
          items: [
            "sdk/core-kit/tkey/modules/web-storage",
            "sdk/core-kit/tkey/modules/react-native-storage",
            "sdk/core-kit/tkey/modules/chrome-storage",
            "sdk/core-kit/tkey/modules/security-questions",
            "sdk/core-kit/tkey/modules/share-transfer",
            "sdk/core-kit/tkey/modules/share-serialization",
            "sdk/core-kit/tkey/modules/seed-phrase",
            "sdk/core-kit/tkey/modules/private-keys",
          ],
        },
        {
          type: "category",
          label: "Additional Reading",
          collapsible: true,
          collapsed: false,
          items: ["sdk/core-kit/tkey/intrinsic-flow"],
        },

        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/tkey/tkey/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "tKey iOS SDK",
      link: { type: "doc", id: "sdk/core-kit/tkey-ios/tkey-ios" },
      items: [
        "sdk/core-kit/tkey-ios/install",
        "sdk/core-kit/tkey-ios/initialize",
        "sdk/core-kit/tkey-ios/usage",
        {
          type: "category",
          label: "Modules",
          link: { type: "doc", id: "sdk/core-kit/tkey-ios/modules/modules" },
          items: [
            "sdk/core-kit/tkey-ios/modules/private-keys",
            "sdk/core-kit/tkey-ios/modules/security-questions",
            "sdk/core-kit/tkey-ios/modules/seed-phrase",
            "sdk/core-kit/tkey-ios/modules/share-serialization",
            "sdk/core-kit/tkey-ios/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/tkey/tkey-ios/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "tKey Android SDK",
      link: { type: "doc", id: "sdk/core-kit/tkey-android/tkey-android" },
      items: [
        "sdk/core-kit/tkey-android/install",
        "sdk/core-kit/tkey-android/initialize",
        "sdk/core-kit/tkey-android/usage",
        {
          type: "category",
          label: "Modules",
          link: { type: "doc", id: "sdk/core-kit/tkey-android/modules/modules" },
          items: [
            "sdk/core-kit/tkey-android/modules/private-keys",
            "sdk/core-kit/tkey-android/modules/security-questions",
            "sdk/core-kit/tkey-android/modules/seed-phrase",
            "sdk/core-kit/tkey-android/modules/share-serialization",
            "sdk/core-kit/tkey-android/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/tkey/tkey-android/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Single Factor Auth SDKs",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "category",
          label: "SFA Web SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-web/sfa-web" },
          items: [
            "sdk/core-kit/sfa-web/install",
            "sdk/core-kit/sfa-web/initialize",
            "sdk/core-kit/sfa-web/authentication",
            "sdk/core-kit/sfa-web/usage",
            {
              type: "link",
              label: "Release Notes", // The link label
              href: "https://github.com/web3auth/single-factor-auth-web/releases", // The external URL
            },
          ],
        },
        {
          type: "category",
          label: "SFA Node SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-node/sfa-node" },
          items: [
            "sdk/core-kit/sfa-node/install",
            "sdk/core-kit/sfa-node/initialize",
            "sdk/core-kit/sfa-node/authentication",
            "sdk/core-kit/sfa-node/usage",
            {
              type: "link",
              label: "Release Notes", // The link label
              href: "https://github.com/web3auth/web3auth-backend/releases", // The external URL
            },
          ],
        },
        {
          type: "category",
          label: "SFA Android SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-android/sfa-android" },
          items: [
            "sdk/core-kit/sfa-android/install",
            "sdk/core-kit/sfa-android/initialize",
            "sdk/core-kit/sfa-android/authentication",
            "sdk/core-kit/sfa-android/usage",
            {
              type: "link",
              label: "Release Notes", // The link label
              href: "https://github.com/web3auth/single-factor-auth-android/releases", // The external URL
            },
          ],
        },
        {
          type: "category",
          label: "SFA iOS SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-ios/sfa-ios" },
          items: [
            "sdk/core-kit/sfa-ios/install",
            "sdk/core-kit/sfa-ios/initialize",
            "sdk/core-kit/sfa-ios/authentication",
            "sdk/core-kit/sfa-ios/usage",
            {
              type: "link",
              label: "Release Notes", // The link label
              href: "https://github.com/web3auth/single-factor-auth-swift/releases", // The external URL
            },
          ],
        },
        {
          type: "category",
          label: "SFA React Native SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-react-native/sfa-react-native" },
          items: [
            "sdk/core-kit/sfa-react-native/install",
            "sdk/core-kit/sfa-react-native/initialize",
            "sdk/core-kit/sfa-react-native/authentication",
            "sdk/core-kit/sfa-react-native/usage",
          ],
        },
        {
          type: "category",
          label: "SFA Flutter SDK",
          link: { type: "doc", id: "sdk/core-kit/sfa-flutter/sfa-flutter" },
          items: [
            "sdk/core-kit/sfa-flutter/install",
            "sdk/core-kit/sfa-flutter/initialize",
            "sdk/core-kit/sfa-flutter/authentication",
            "sdk/core-kit/sfa-flutter/usage",
            {
              type: "link",
              label: "Release Notes", // The link label
              href: "https://github.com/web3auth/single-factor-auth-flutter/releases", // The external URL
            },
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Helper SDKs</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Providers",
      link: { type: "doc", id: "sdk/helper-sdks/providers/providers" },
      items: [
        "sdk/helper-sdks/providers/evm",
        "sdk/helper-sdks/providers/solana",
        "sdk/helper-sdks/providers/xrpl",
        "sdk/helper-sdks/providers/common",
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-web/releases", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Plugins",
      link: { type: "doc", id: "sdk/helper-sdks/plugins/plugins" },
      items: [
        "sdk/helper-sdks/plugins/evm-wallet",
        "sdk/helper-sdks/plugins/solana-wallet",
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/Web3Auth/web3auth-web/releases", // The external URL
        },
      ],
    },
  ],
};
