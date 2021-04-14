/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "OpenLogin",
      items: [
        "open-login/get-started",
        "open-login/what-is-openlogin",
        {
          "API Reference": [
            "open-login/api-reference/installation",
            "open-login/api-reference/initialization",
            "open-login/api-reference/usage",

          ],
        },
      ],

    },
    {
      type: "category",
      label: "Wallet",
      items: [
        "wallet/get-started",
        "wallet/what-is-wallet",
        {
          "API Reference": [
            "wallet/api-reference/installation",
            "wallet/api-reference/class",
            "wallet/api-reference/account",
            "wallet/api-reference/display",
            "wallet/api-reference/address-resolver",
            "wallet/api-reference/topup",
            "wallet/api-reference/ethereum-api",
          ],
        },
        {
          "Developing with Torus Wallet": [
            "wallet/developing-with-wallet/ganache",
            "wallet/developing-with-wallet/networklist",
          ],
        },
        {
          Features: [
            "wallet/features/layer2",
            "wallet/features/accountrecovery",
            "wallet/features/purchasecryptocurrency",
            "wallet/features/erc721",
            "wallet/features/exportprivatekey",
            "wallet/features/language",
            "wallet/features/nameresolver",
            "wallet/features/themes",
            "wallet/features/pwa",
            "wallet/features/whitelabeling",
          ],
        },
        {
          FAQ: ["wallet/faq-1/developers", "wallet/faq-1/users"],
        },
        "wallet/integration-guidelines",
        "wallet/changelog",
      ],
    },
    {
      type: "category",
      label: "CustomAuth",
      items: [
        "customauth/get-started",
        "customauth/what-is-customauth",
        "customauth/integrating-customauth",
        "customauth/designing-your-key-management-architecture",
        {
          "Logins (Verifiers)": [
            "customauth/supported-authenticators-verifiers",
            "customauth/setting-up-verifiers-logins/setting-up-a-proxy-provider-auth0",
          ],
        },
        {
          "Compatiblity and common patterns": [
            "customauth/compatibility-and-common-patterns/README",
            "customauth/compatibility-and-common-patterns/gasless-meta-transactions",
            "customauth/compatibility-and-common-patterns/scalability-layer2-solutions",
            "customauth/compatibility-and-common-patterns/password-manager-flow",
            "customauth/compatibility-and-common-patterns/untitled",
          ],
        },
        "customauth/linking-accounts",
        "customauth/redirects-and-service-workers",
        "customauth/faq",
      ],
    },
    {
      type: "category",
      label: "How Torus works",
      items: [
        "how-torus-works/overview",
        "how-torus-works/technical-architecture",
        {
        type: "category",
        label: "Role of Torus nodes",
        items:[
          "how-torus-works/role-of-torus-nodes/overview",
          "how-torus-works/role-of-torus-nodes/lifecycle",
          "how-torus-works/role-of-torus-nodes/key-generation-and-resharing",
        "how-torus-works/role-of-torus-nodes/logins-key-assignments-and-retrievals",
        "how-torus-works/role-of-torus-nodes/oauth2-vs-proxy-sign-in",
        "how-torus-works/role-of-torus-nodes/dkg-specification"
      ],
        },

        "how-torus-works/audits",
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
