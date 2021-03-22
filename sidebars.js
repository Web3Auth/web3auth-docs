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
        "wallet/quick-start",
        "wallet/changelog",
        {
          Features: [
            "wallet/features/list-of-features",
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
          "API Reference": [
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
            "wallet/developing-with-wallet/oauth",
            "wallet/developing-with-wallet/layer2",
            "wallet/developing-with-wallet/ganache",
            "wallet/developing-with-wallet/networklist",
          ],
        },
        {
          FAQ: ["wallet/faq-1/developers", "wallet/faq-1/users"],
        },
        "wallet/integration-guidelines",
      ],
    },
    {
      type: "category",
      label: "Direct Auth",
      items: [
        // "direct-auth/get-started",
        "direct-auth/quick-start",
        "direct-auth/what-is-directauth",
        {
          Integeration: [
            "direct-auth/integrating-directauth/README",
            "direct-auth/integrating-directauth/designing-your-key-management-architecture",
            "direct-auth/integrating-directauth/deploying-on-the-torus-network",
            "direct-auth/integrating-directauth/integrate-with-different-networks",
          ],
        },
        {
          "Verifiers/Logins": [
            "direct-auth/supported-authenticators-verifiers",
            "direct-auth/setting-up-verifiers-logins/README",
            "direct-auth/setting-up-verifiers-logins/setting-up-a-proxy-provider-auth0",
          ],
        },
        {
          "Compatiblity and common patterns": [
            "direct-auth/compatibility-and-common-patterns/README",
            "direct-auth/compatibility-and-common-patterns/gasless-meta-transactions",
            "direct-auth/compatibility-and-common-patterns/scalability-layer2-solutions",
            "direct-auth/compatibility-and-common-patterns/password-manager-flow",
            "direct-auth/compatibility-and-common-patterns/untitled",
          ],
        },
        "direct-auth/linking-accounts",
        "direct-auth/integration-guidelines",
        "direct-auth/redirects-and-service-workers",
        "direct-auth/examples",
        "direct-auth/faq",
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
