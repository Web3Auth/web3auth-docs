/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    "README",
    // "get-started",
    "what-is-web3auth",
    {
      type: "category",
      label: "API Reference",
      items: [
          "api-reference/modal",
          "api-reference/core",
          "api-reference/adapter-config",
          "api-reference/providers",
          "api-reference/glossary",
          {
            "OpenLogin": [
              "api-reference/openlogin/web",
              "api-reference/openlogin/ios-swift",
              "api-reference/openlogin/android"
            ]
          },
          {
            "CustomAuth": [
              "api-reference/customauth/installation",
              "api-reference/customauth/initialization",
              "api-reference/customauth/usage",
            ],
          },
      ],
    },
    {
      type: "category",
      label: "Using your own auth",
      items: [
        "customauth/get-started",
        "customauth/designing-your-key-management-architecture",
        "customauth/verifiers",
        {
          "Setting up Verifiers on Developer Dashboard": [
            "customauth/setting-up-verifiers/seting-up-verifiers",
            "customauth/setting-up-verifiers/custom-verifier",
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
        // "key-infrastructure/technical-architecture",
      //   {
      //   type: "category",
      //   label: "Role of Torus nodes",
      //   items:[
      //     "key-infrastructure/role-of-torus-nodes/overview",
      //     "key-infrastructure/role-of-torus-nodes/lifecycle",
      //     "key-infrastructure/role-of-torus-nodes/key-generation-and-resharing",
      //   "key-infrastructure/role-of-torus-nodes/logins-key-assignments-and-retrievals",
      //   "key-infrastructure/role-of-torus-nodes/oauth2-vs-proxy-sign-in",
        // "key-infrastructure/role-of-torus-nodes/dkg-specification"
      // ],
      //   },
        "key-infrastructure/powered-by-torus",
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
