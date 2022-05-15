const chainIdMap = {
  eth: "0x1",
  matic: "0x13881",
  bnb: "0x38",
  sol: "0x1",
  avax: "0x43114",
  arbitrum: "0x42161",
  optimism: "0x10",
};
const rpcTargetMap = {
  eth: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  matic: "https://rpc-mumbai.maticvigil.com",
  bnb: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  sol: "https://ssc-dao.genesysgo.net",
  avax: "https://api.avax-test.network/ext/bc/C/rpc",
  arbitrum: "https://rinkeby.arbitrum.io/rpc",
  optimism: "https://optimism-kovan.infura.io/v3/",
};
export const getConstructorCode = (
  isWhiteLabled: boolean,
  chain: "eth" | "sol" | "matic" | "bnb" | "avax" | "arbitrum" | "optimism" // todo: move to a type
): {
  code: string;
} => {
  let chainNamespace = "CHAIN_NAMESPACES.EIP155";
  if (chain === "sol") chainNamespace = "CHAIN_NAMESPACES.SOLANA";
  let code = "";
  if (isWhiteLabled) {
    code = `
        const web3AuthCtorParams = {
          clientId,
          chainConfig: {
            chainNamespace: ${chainNamespace},
            chainId: "${chainIdMap[chain]}",
            rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app
          },
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "twitter"],
            appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
          }
        }`;
  } else {
    code = `
        const web3AuthCtorParams = {
          clientId,
          chainConfig: {
            chainNamespace: ${chainNamespace},
            chainId:  "${chainIdMap[chain]}",
            rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app
          }
        }`;
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
    const initParams = {}
  `;
  if (isWhiteLabled) {
    code = `

    const initParams = {
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
    import RPC from "./evm";
  `;
  if (chain === "sol") {
    code = `
import RPC from "./solana"`;
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
          domain: "YOUR_APP_DOMAIN",
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
  chain: "eth" | "sol" | "matic" | "bnb" | "avax" | "arbitrum" | "optimism" // todo: move to a type
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
      code = `
          const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
          whitelabel: {
            name: "Your app Name",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
            },
          loginConfig: {
            jwt: {
              name: "Custom Verifier Login",
              verifier: "YOUR_VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId,
            },
          },
        },
      });`;
      return { code };
    }
    code = `
        const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
          loginConfig: {
            jwt: {
              name: "Custom Verifier Login",
              verifier: "YOUR_VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId,
            },
          },
        },
      });`;
    return { code };
  }
  if (isWhiteLabled) {
    code = `        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: "testnet",
            uxMode: "redirect",
            whitelabel: {
              name: "Your app Name",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
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

export const getScriptImportsCode = (
  chain: "eth" | "sol",
  customLogin
): {
  code: string;
} => {
  let code = "";
  if (chain === "eth") {
    code = `
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customLogin ? "core" : "web3auth"}@0/dist/${
      customLogin ? "core" : "web3auth"
    }.umd.min.js"></script>
    <script src="./evm.js"></script>
    `;
  } else if (chain === "sol") {
    code = `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customLogin ? "core" : "web3auth"}@0/dist/${
      customLogin ? "core" : "web3auth"
    }.umd.min.js"></script>
    <script src="https://unpkg.com/@solana/web3.js@1/lib/index.iife.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/buffer@6"></script>
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@0.9.0/dist/solanaProvider.umd.min.js"></script>
    <script src="./solana.js"></script>
    `;
  }

  return {
    code,
  };
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
  SCRIPTS_IMPORT: "deps-import",
};
