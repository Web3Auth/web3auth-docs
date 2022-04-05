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
      export const web3AuthCtorParams = {
        clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io,
        chainConfig: { chainNamespace: "${chainNamespace}", chainId: "HEX_CHAIN_ID" //eg: "0x1"
         },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "twitter"],
          appLogo: "https://your-logo-url.com",
        };
      }
    };`;
  } else {
    code = `
        export const web3AuthCtorParams = {
          clientId,
          chainConfig: { chainNamespace:  "${chainNamespace}", chainId: "HEX_CHAIN_ID" }
        };`;
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
      export async function connectWithWeb3Auth(web3auth: Web3Auth): Promise<SafeEventEmitterProvider> {
        try {
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
          return web3authProvider;
        } catch (error) {
          console.error(error);
        }
      }`;
  } else if (isCustomLogin) {
    code = `
        export async function connectWithWeb3Auth(web3auth: Web3Auth): Promise<SafeEventEmitterProvider> {
          try {
            const jwtToken = "YOUR_ID_TOKEN";
            const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
              relogin: true,
              loginProvider: "google",
            });
            return web3authProvider;
          } catch (error) {
            console.error(error);
          }
        }`;
  } else {
    code = `
        export async function connectWithWeb3Auth(web3auth: Web3Auth): Promise<SafeEventEmitterProvider> {
          try {
            const web3authProvider = await web3auth.connect();
            return web3authProvider;
          } catch (error) {
            console.error(error);
          }
        }`;
  }
  return {
    code,
  };
};

export const PLACEHOLDERS = {
  CONSTRUCTOR: "const web3AuthCtorParams = {};",
  INIT: "const web3AuthInitParams = {};",
  CHAIN_RPC: "web3authChainRpc",
  CONNECT: "const web3AuthConnect = {};",
  CHAIN_RPC_IMPORT: "web3authChainRpcImport",
  CHAIN_NAMESPACE: "web3authChainNamespace",
};
