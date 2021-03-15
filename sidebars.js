/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Torus Wallet",
      items: [
        "torus-wallet/quick-start",
        "torus-wallet/changelog",
        {
          Features: [
            "torus-wallet/features/list-of-features",
            "torus-wallet/features/accountrecovery",
            "torus-wallet/features/purchasecryptocurrency",
            "torus-wallet/features/erc721",
            "torus-wallet/features/exportprivatekey",
            "torus-wallet/features/language",
            "torus-wallet/features/nameresolver",
            "torus-wallet/features/themes",
            "torus-wallet/features/pwa",
            "torus-wallet/features/whitelabeling",
          ],
        },
        {
          "API Reference": [
            "torus-wallet/api-reference/class",
            "torus-wallet/api-reference/account",
            "torus-wallet/api-reference/display",
            "torus-wallet/api-reference/address-resolver",
            "torus-wallet/api-reference/topup",
            "torus-wallet/api-reference/ethereum-api",
          ],
        },
        {
          "Developing with Torus Wallet": [
            "torus-wallet/developing-with-torus-wallet/oauth",
            "torus-wallet/developing-with-torus-wallet/layer2",
            "torus-wallet/developing-with-torus-wallet/ganache",
            "torus-wallet/developing-with-torus-wallet/networklist",
          ],
        },
        {
          FAQ: ["torus-wallet/faq-1/developers", "torus-wallet/faq-1/users"],
        },
        "torus-wallet/integration-guidelines",
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
      label: "OpenLogin",
      items: ["open-login/quick-start"],
    },
    {
      type: "category",
      label: "How Torus works",
      items: [
        "how-torus-works/system-architecture",
        "how-torus-works/role-of-torus-nodes",
        "how-torus-works/key-generation-and-resharing",
        "how-torus-works/logins-key-assignments-and-retrievals",
        "how-torus-works/torus-wallet",
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
