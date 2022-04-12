const chainIdMap = {
  eth: "0x1",
  matic: "0x13881",
  bnb: "0x38",
};
export const getConstructorCode = (
  isWhiteLabled: boolean,
  chain: "eth" | "sol" | "matic" | "bnb" // todo: move to a type
): {
  code: string;
} => {
  let chainNamespace = "eip155";
  if (chain === "sol") chainNamespace = "solana";
  let code = "";
  if (isWhiteLabled) {
    code = `
      const web3AuthCtorParams = {
        clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io,
        chainConfig: { chainNamespace: "${chainNamespace}", chainId: "${chainIdMap[chain]}"
         },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "twitter"],
          appLogo: "https://your-logo-url.com",
        };
      }
    };
    `;
  } else {
    code = `
        const web3AuthCtorParams = {
          clientId,
          chainConfig: { chainNamespace:  "${chainNamespace}", chainId:  ${chainIdMap[chain]} }
        };
      `;
  }

  return {
    code,
  };
};

export const getInitCode = (
  isWhiteLabled: boolean
): {
  code: string;
} => {
  let code = `
    export const initParams = {}
  `;
  if (isWhiteLabled) {
    code = `

    export const initParams = {
        modalConfig: {
          [WALLET_ADAPTERS.OPENLOGIN]: {
            label: "openlogin",
            loginMethods: {
              reddit: {
                showOnModal: false,
                name: "reddit",
              },
            },
          },
        },
      };`;
  }
  return {
    code,
  };
};

export const getChainRpcImport = (
  chain: "eth" | "sol"
): {
  code: string;
} => {
  let code = `
    import RPC from "./ethereum";
  `;
  if (chain === "sol") {
    code = `
    import RPC from "./solana"
  `;
  }
  return {
    code,
  };
};

export const getChainNamespace = (
  chain: "eth" | "sol"
): {
  code: string;
} => {
  const code =
    chain === "eth"
      ? `
  const chainNamespace = "eip155";
  `
      : `
    const chainNamespace = "solana";
  `;
  return {
    code,
  };
};

export const getConnectCode = (
  isCustomLogin: boolean,
  isCustomVerifier: boolean
): {
  code: string;
} => {
  let code = ``;
  if (isCustomVerifier) {
    code = `
      const jwtToken = "YOUR_ID_TOKEN";
      const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        relogin: true,
        loginProvider: "jwt",
        extraLoginOptions: {
          id_token: jwtToken,
          domain: process.env.VUE_APP_DOMAIN,
          verifierIdField: "sub",
        },
      });
      `;
  } else if (isCustomLogin) {
    code = `
    const jwtToken = "YOUR_ID_TOKEN";
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      relogin: true,
      loginProvider: "google",
    });
       `;
  } else {
    code = `
        const web3authProvider = await web3auth.connect();
        `;
  }
  return {
    code,
  };
};

export const getCoreConstructorCode = (
  chain: "eth" | "sol" | "matic" | "bnb" // todo: move to a type
): {
  code: string;
} => {
  let chainNamespace = "eip155";
  if (chain === "sol") chainNamespace = "solana";
  const code = `
  const web3AuthCoreCtorParams = {
    clientId,
    chainConfig: { chainNamespace:  "${chainNamespace}", chainId: "HEX_CHAIN_ID" }
  };
`;
  return {
    code,
  };
};

export const getOpenloginAdapter = (
  isWhiteLabled: boolean,
  isCustomAuth: boolean,
  isCustomLogin: boolean
): {
  code: string;
} => {
  let code = ``;

  if (isCustomAuth) {
    if (isWhiteLabled) {
      code = `const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
          whitelabel: {
            name: "Your app Name",
            logoLight: "https://example-light-logo.com",
            logoDark: "https://example-light-logo.com",
            defaultLanguage: "en",
            /**
             * Whether to enable dark mode
             *
             * @defaultValue false
             */
            dark: true,
          },
          loginConfig: {
            jwt: {
              name: "Custom Verifier Login",
              verifier: process.env.VUE_APP_VERIFIER || "YOUR_VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId,
            },
          },
        },
      });`;
      return { code };
    }
    code = `const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
          loginConfig: {
            jwt: {
              name: "Custom Verifier Login",
              verifier: process.env.VUE_APP_VERIFIER || "YOUR_VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId,
            },
          },
        },
      });`;
    return { code };
  }
  if (isWhiteLabled) {
    code = `const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
          whitelabel: {
            name: "Your app Name",
            logoLight: "https://example-light-logo.com",
            logoDark: "https://example-light-logo.com",
            defaultLanguage: "en",
            /**
             * Whether to enable dark mode
             *
             * @defaultValue false
             */
            dark: true,
          }
        },
      });`;
  } else {
    code = `const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        clientId,
        network: "testnet",
        uxMode: "redirect",
      },
    });`;
  }

  if (!isCustomLogin) {
    code = `${code}
    web3auth.configureAdapter(openloginAdapter);`;
  }
  return { code };
};
export const PLACEHOLDERS = {
  CONSTRUCTOR: "const web3AuthCtorParams = {};",
  CORE_CONSTRUCTOR: "const web3AuthCoreCtorParams = {};",
  OPENLOGIN_CONFIGURE: "const web3AuthOpenloginConfigure = {};",
  INIT: "const web3AuthInitParams = {};",
  CHAIN_RPC: "web3authChainRpc",
  CONNECT: "const web3AuthConnect = {};",
  CHAIN_RPC_IMPORT: "web3authChainRpcImport",
  CHAIN_NAMESPACE: "web3authChainNamespace",
};
