const chainIdMap = {
  eth: "0x1",
  matic: "0x13881",
  bnb: "0x38",
  sol: "0x1",
  avax: "0x43114",
  arbitrum: "0x42161",
  optimism: "0x10",
  starkex: "0x1",
};
const rpcTargetMap = {
  eth: "https://ropsten.infura.io/v3/",
  matic: "https://rpc-mumbai.maticvigil.com",
  bnb: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  sol: "https://ssc-dao.genesysgo.net",
  avax: "https://api.avax-test.network/ext/bc/C/rpc",
  arbitrum: "https://rinkeby.arbitrum.io/rpc",
  optimism: "https://optimism-kovan.infura.io/v3/",
  starkex: "https://ropsten.infura.io/v3/",
};
export const getConstructorCode = (
  isWhiteLabled: boolean,
  chain: "eth" | "sol" | "matic" | "bnb" | "avax" | "arbitrum" | "optimism" | "starkex" // todo: move to a type
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
  chain: "eth" | "sol" | "starkex"
): {
  code: string;
} => {
  let code = `
import RPC from "./evm";`;
  if (chain === "sol") {
    code = `
import RPC from "./solana";`;
  }
  if (chain === "starkex") {
    code = `
import RPC from "./starkex";`;
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
  isCustomAuth: boolean
): {
  code: string;
} => {
  let code = ``;
  if (isCustomAuth) {
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
  } else {
    code = `
        const web3authProvider = await web3auth.connect();
        `;
  }
  return {
    code,
  };
};

export const getOpenloginAdapter = (
  isWhiteLabled: boolean,
  isCustomAuth: boolean
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
          whiteLabel: {
            name: "Your app Name",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
            },
          loginConfig: {
            jwt: {
              name: "Custom Auth Login",
              verifier: "YOUR_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
              typeOfLogin: "jwt", // Pass on the login provider of the verifier you've created
              clientId, // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
            },
          },
        },
      });
      web3auth.configureAdapter(openloginAdapter);`;
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
              name: "Custom Auth Login",
              verifier: "YOUR_VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId,
            },
          },
        },
      });
      web3auth.configureAdapter(openloginAdapter);`;
    return { code };
  }
  if (isWhiteLabled) {
    code = `        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: "testnet",
            uxMode: "redirect",
            whiteLabel: {
              name: "Your app Name",
              logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
            }
          },
        });
        web3auth.configureAdapter(openloginAdapter);`;
  } else {
    code = `const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        clientId,
        network: "testnet",
        uxMode: "redirect",
      },
    });
    web3auth.configureAdapter(openloginAdapter);`;
  }
  return { code };
};

export const getScriptImportsCode = (
  chain: "eth" | "sol",
  customAuth
): {
  code: string;
} => {
  let code = "";
  if (chain === "eth") {
    code = `
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
    }.umd.min.js"></script>
    <script src="./evm.js"></script>
    `;
  } else if (chain === "sol") {
    code = `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
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

export const getRPCFunctions = (
  chain: "eth" | "sol" | "starkex"
): {
  code: string;
} => {
  let code = `
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const userAccount = await rpc.getAccounts();
    uiConsole(userAccount);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    uiConsole(balance);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const result = await rpc.signMessage();
    uiConsole(result);
  };

  const signTransaction = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const result = await rpc.signTransaction();
    uiConsole(result);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const result = await rpc.signAndSendTransaction();
    uiConsole(result);
  };
`;
  if (chain === "starkex") {
    code = `
  const onGetStarkHDAccount = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const starkaccounts = await rpc.getStarkAccount();
    uiConsole(starkaccounts);
  };

  const onMintRequest = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const request = await rpc.onMintRequest();
    uiConsole(request);
  };

  const onDepositRequest = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const request = await rpc.onDepositRequest();
    uiConsole(request);
  };

  const onWithdrawalRequest = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const request = await rpc.onWithdrawalRequest();
    uiConsole(request);
  };
`;
  }
  return {
    code,
  };
};

export const getRPCFunctionsUIButtonsReact = (
  chain: "eth" | "sol" | "starkex"
): {
  code: string;
} => {
  let code = `
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={signTransaction} className="card">
        Sign Transaction
      </button>
      <button onClick={sendTransaction} className="card">
        Send Transaction
      </button>
`;
  if (chain === "starkex") {
    code = `
      <button onClick={onGetStarkHDAccount} className="card">
        Get Stark Accounts
      </button>
      <button onClick={onMintRequest} className="card">
        Mint Request
      </button>
      <button onClick={onDepositRequest} className="card">
        Deposit Request
      </button>
      <button onClick={onWithdrawalRequest} className="card">
        Withdraw Request
      </button>`;
  }
  return {
    code,
  };
};

export const getReactPackageJson = (
  chain: "eth" | "sol" | "starkex"
): {
  code: string;
} => {
  let code = `
    "@web3auth/ethereum-provider": "^0.7.0",
    "web3": "^1.7.0",`;
  if (chain === "sol") {
    code = `
    "@web3auth/solana-provider": "^0.7.0",
    "@solana/web3.js": "^1.36.0",`;
  }
  if (chain === "starkex") {
    code = `
    "@starkware-industries/starkex-js": "0.0.6",
    "@toruslabs/starkware-crypto": "^1.1.0",
    "bn.js": "^5.2.0",
    "elliptic": "^6.5.4",`;
  }
  return {
    code,
  };
};

export const PLACEHOLDERS = {
  CONSTRUCTOR: "const web3AuthCtorParams = {};",
  OPENLOGIN_CONFIGURE: "const web3AuthOpenloginConfigure = {};",
  INIT: "const web3AuthInitParams = {};",
  CHAIN_RPC: "web3authChainRpc",
  CONNECT: "const web3AuthConnect = {};",
  CHAIN_RPC_IMPORT: "web3authChainRpcImport",
  CHAIN_NAMESPACE: "web3authChainNamespace",
  SCRIPTS_IMPORT: "deps-import",
  RPC_FUNCTIONS: "rpcFunctionsImport",
  RPC_FUNCTIONS_BUTTONS: "rpcFunctionsUIButtonsImport",
  REACT_PACKAGE_JSON: "reactPackageJsonImport",
};
