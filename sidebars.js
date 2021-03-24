/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "OpenLogin",
      items: [
        "open-login/quick-start",
        {
          type: "category",
          label: "Guides",
          items: ["open-login/guides/how-to-build-x-with-openlogin"],
        },
      ],
    },
    {
      type: "category",
      label: "Wallet",
      items: [
        "wallet/getting-started",
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
        {
          Integeration: [
            "customauth/integrating-customauth/README",
            "customauth/integrating-customauth/designing-your-key-management-architecture",
            "customauth/integrating-customauth/deploying-on-the-torus-network",
            "customauth/integrating-customauth/integrate-with-different-networks",
          ],
        },
        {
          "Verifiers/Logins": [
            "customauth/supported-authenticators-verifiers",
            "customauth/setting-up-verifiers-logins/README",
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
        "customauth/integration-guidelines",
        "customauth/redirects-and-service-workers",
        "customauth/examples",
        "customauth/faq",
      ],
    },
    {
      type: "category",
      label: "How Torus works",
      items: [
        "how-torus-works/system-architecture",
        "how-torus-works/role-of-torus-nodes",
        "how-torus-works/key-generation-and-resharing",
        "how-torus-works/logins-key-assignments-and-retrievals",
        "how-torus-works/wallet",
        "how-torus-works/oauth2-vs-proxy-sign-in",
        "how-torus-works/dkg-specification",
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
