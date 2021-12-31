/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    "get-started",
    "what-is-web3auth",
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          "Modal": [
            "api-reference/modal/usage",

          ],
          "Core": [
            "api-reference/core/usage",
          ],
        },
      ],

    },
    // {
    //   type: "category",
    //   label: "OpenLogin",
    //   items: [
    //     "plug-n-play/get-started",
    //     "plug-n-play/for-wallets",
    //     "plug-n-play/what-is-openlogin",
    //     {
    //       "API Reference": [
    //         "plug-n-play/api-reference/installation",
    //         "plug-n-play/api-reference/initialization",
    //         "plug-n-play/api-reference/usage",

    //       ],
    //     },
    //   ],

    // },
    // {
    //   type: "category",
    //   label: "Wallet",
    //   items: [
    //     "wallet/get-started",
    //     "wallet/what-is-wallet",
    //     {
    //       "API Reference": [
    //         "wallet/api-reference/installation",
    //         "wallet/api-reference/class",
    //         "wallet/api-reference/account",
    //         "wallet/api-reference/display",
    //         "wallet/api-reference/address-resolver",
    //         "wallet/api-reference/topup",
    //         "wallet/api-reference/ethereum-api",
    //       ],
    //     },
    //     {
    //       "Developing with Torus Wallet": [
    //         "wallet/developing-with-wallet/ganache",
    //         "wallet/developing-with-wallet/networklist",
    //       ],
    //     },
    //     {
    //       Features: [
    //         "wallet/features/layer2",
    //         "wallet/features/accountrecovery",
    //         "wallet/features/purchasecryptocurrency",
    //         "wallet/features/erc721",
    //         "wallet/features/exportprivatekey",
    //         "wallet/features/language",
    //         "wallet/features/nameresolver",
    //         "wallet/features/themes",
    //         "wallet/features/pwa",
    //         "wallet/features/whitelabeling",
    //       ],
    //     },
    //     {
    //       FAQ: ["wallet/faq-1/developers", "wallet/faq-1/users"],
    //     },
    //     "wallet/integration-guidelines",
    //     "wallet/changelog",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Solana Wallet",
    //   items: [
    //     "solana-wallet/get-started",
    //     "solana-wallet/what-is-wallet",
    //     {
    //       "API Reference": [
    //         "solana-wallet/api-reference/installation",
    //         "solana-wallet/api-reference/class",
    //         "solana-wallet/api-reference/account",
    //         "solana-wallet/api-reference/display",
    //         // "solana-wallet/api-reference/address-resolver",
    //         "solana-wallet/api-reference/topup",
    //         { "Solana API" : [
    //           // "solana-wallet/api-reference/solana/solana-api",
    //           "solana-wallet/api-reference/solana/send-transaction",
    //           "solana-wallet/api-reference/solana/sign-transaction",
    //           "solana-wallet/api-reference/solana/sign-message",
    //           "solana-wallet/api-reference/solana/gasless-transaction",
    //         ],
    //       },
    //       "solana-wallet/api-reference/solana-adapter"
    //       ],
    //     },
    //     {
    //       Features: [
    //         "solana-wallet/features/accountrecovery",
    //         "solana-wallet/features/purchasecryptocurrency",
    //         "solana-wallet/features/exportprivatekey",
    //         // "solana-wallet/features/language",
    //         // "solana-wallet/features/nameresolver",
    //         "solana-wallet/features/themes",
    //         "solana-wallet/features/pwa",
    //         // "solana-wallet/features/whitelabeling",
    //       ],
    //     },
    //     // {
    //     //   FAQ: ["solana-wallet/faq-1/developers", "solana-wallet/faq-1/users"],
    //     // },
    //     // "solana-wallet/integration-guidelines",
    //     // "solana-wallet/changelog",
    //   ],
    // },
    {
      type: "category",
      label: "Using your own Auth",
      items: [
        "customauth/get-started",
        "customauth/what-is-customauth",
        "customauth/integrating-customauth",
        {
          "API Reference": [
            "customauth/api-reference/installation",
            "customauth/api-reference/initialization",
            "customauth/api-reference/usage",

          ],
        },
        "customauth/designing-your-key-management-architecture",
        "customauth/verifiers",
        {
          "Setting up Verifiers on Developer Dashboard": [
            "customauth/setting-up-verifiers/seting-up-verifiers",
            "customauth/setting-up-verifiers/custom-verifier",
          ],
        },
        {
          "Compatiblity and common patterns": [
            "customauth/compatibility-and-common-patterns/README",
            "customauth/compatibility-and-common-patterns/gasless-meta-transactions",
            "customauth/compatibility-and-common-patterns/scalability-layer2-solutions",
            "customauth/compatibility-and-common-patterns/password-manager-flow",
            "customauth/compatibility-and-common-patterns/tkey",
          ],
        },
        "customauth/linking-accounts",
        "customauth/redirects-and-service-workers",
        "customauth/faq",
      ],
    },
    "usecases",
    {
      type: "category",
      label: "Security & Key Infrastructure",
      items: [
        "key-infrastructure/overview",
        "key-infrastructure/technical-architecture",
        {
        type: "category",
        label: "Role of Torus nodes",
        items:[
          "key-infrastructure/role-of-torus-nodes/overview",
          "key-infrastructure/role-of-torus-nodes/lifecycle",
          "key-infrastructure/role-of-torus-nodes/key-generation-and-resharing",
        "key-infrastructure/role-of-torus-nodes/logins-key-assignments-and-retrievals",
        "key-infrastructure/role-of-torus-nodes/oauth2-vs-proxy-sign-in",
        "key-infrastructure/role-of-torus-nodes/dkg-specification"
      ],
        },
        "key-infrastructure/node-operators",
        "key-infrastructure/audits",
      ],
    },
    {
      type: "category",
      label: "Legal",
      items: [
        "legal/terms-and-conditions",
        "legal/privacy-policy",
        "legal/cookie-policy",
      ],
    },
    {
      type: "category",
      label: "Contact",
      items: ["contact/bug-bounty"],
    },
  ],
};
