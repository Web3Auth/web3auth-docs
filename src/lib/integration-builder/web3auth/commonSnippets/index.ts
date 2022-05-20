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
  eth: "https://ropsten.infura.io/v3/",
  matic: "https://rpc-mumbai.maticvigil.com",
  bnb: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  sol: "https://ssc-dao.genesysgo.net",
  avax: "https://api.avax-test.network/ext/bc/C/rpc",
  arbitrum: "https://rinkeby.arbitrum.io/rpc",
  optimism: "https://optimism-kovan.infura.io/v3/",
};
export const getConstructorCode = (
  isWhiteLabled: boolean,
  chain: "eth" | "sol" | "starkex" | "starknet"
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
  if (chain === "starkex" || chain === "starknet") {
    if (isWhiteLabled) {
      code = `
          const web3AuthCtorParams = {
            clientId,
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.OTHER,
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
              chainNamespace: CHAIN_NAMESPACES.OTHER,
            }
          }`;
    }
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
  chain: "eth" | "sol" | "starkex" | "starknet"
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
  if (chain === "starknet") {
    code = `
import RPC from "./starknet";`;
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
  chain: "eth" | "sol" | "starkex" | "starknet",
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
  } else if (chain === "starkex") {
    code = `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
    }.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@toruslabs/starkware-crypto@1.1.0/dist/starkwareCrypto.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@starkware-industries/starkex-js@0.0.6/dist/browser.min.js"></script>
    <script src="./starkex.js"></script>
    `;
  }

  return {
    code,
  };
};

export const getRPCFunctions = (
  chain: "eth" | "sol" | "starkex" | "starknet"
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
  if (chain === "starknet") {
    code = `
  const onGetStarkHDAccount = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const starkaccounts = await rpc.getStarkAccount();
    uiConsole(starkaccounts);
  };

  const onDeployAccount = async () => {
    const rpc = new RPC(provider as SafeEventEmitterProvider);
    const deployaccount =  await rpc.deployAccount();
    uiConsole(deployaccount);
  };
`;
  }
  return {
    code,
  };
};

// HTML Functions

export const getRPCFunctionsHTML = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
  $("#get-accounts").click(async function (event) {
    try {
      const accounts = await rpc.getAccounts(web3auth.provider);
      $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
    } catch (error) {
      console.error(error.message);
    }
  });

  $("#get-balance").click(async function (event) {
    try {
      const balance = await rpc.getBalance(web3auth.provider);
      $("#code").text(JSON.stringify(["balance", balance], null, 2));
    } catch (error) {
      console.error(error.message);
    }
  });

  $("#sign-message").click(async function (event) {
    try {
      const signedMsg = await rpc.signMessage(web3auth.provider);
      $("#code").text(JSON.stringify(["signed message", signedMsg], null, 2));
    } catch (error) {
      console.error(error.message);
    }
  });`;
  if (chain === "starkex") {
    code = `
    $("#get-stark-accounts").click(async function (event) {
      try {
        const accounts = await rpc.getStarkAccount(web3auth.provider);
        $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });

    $("#mint-request").click(async function (event) {
      try {
        const response = await rpc.onMintRequest(web3auth.provider, starkExAPI);
        $("#code").text(JSON.stringify(["mint-request", response], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });

    $("#deposit-request").click(async function (event) {
      try {
        const response = await rpc.onDepositRequest(web3auth.provider, starkExAPI);
        $("#code").text(JSON.stringify(["deposit-request", response], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });

    $("#withdraw-request").click(async function (event) {
      try {
        const response = await rpc.onWithdrawalRequest(web3auth.provider, starkExAPI);
        $("#code").text(JSON.stringify(["withdraw-request", response], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });`;
  }
  if (chain === "starknet") {
    code = `
      $("#get-stark-hd-account").click(async function (event) {
        try {
          const accounts = await rpc.getStarkAccount(web3auth.provider);
          $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#on-deploy-account").click(async function (event) {
        try {
          const balance = await rpc.deployAccount(web3auth.provider);
          $("#code").text(JSON.stringify(["balance", balance], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });`;
  }
  return {
    code,
  };
};

export const getConnectCodeHTML = (
  isCustomAuth: boolean
): {
  code: string;
} => {
  let code = ``;
  if (isCustomAuth) {
    code = `
      const jwtToken = "YOUR_ID_TOKEN";
      const web3authProvider = await web3auth.connectTo("openlogin", {
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

export const getRPCFunctionsUIButtonsHTML = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
        <button id="get-accounts" class="btn">Get Accounts</button>
        <button id="get-balance" class="btn">Get Balance</button>
        <button id="sign-message" class="btn">Sign Message</button>
    `;
  if (chain === "starkex") {
    code = `
        <button id="get-stark-accounts" class="btn">Get Stark Accounts</button>
        <button id="mint-request" class="btn">Mint Request</button>
        <button id="deposit-request" class="btn">Deposit Request</button>
        <button id="withdraw-request" class="btn">Withdraw Request</button>
    `;
  }
  if (chain === "starknet") {
    code = `
        <button id="get-stark-hd-account" class="btn">Get Stark Accounts</button>
        <button id="on-deploy-account" class="btn">Mint Request</button>
    `;
  }
  return {
    code,
  };
};

export const getConstructorCodeHTML = (
  isWhiteLabled: boolean,
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let chainNamespace = "eip155";
  if (chain === "sol") chainNamespace = "solana";
  let code = "";
  if (isWhiteLabled) {
    code = `
        const web3AuthCtorParams = {
          clientId,
          chainConfig: {
            chainNamespace: "${chainNamespace}",
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
            chainNamespace: "${chainNamespace}",
            chainId:  "${chainIdMap[chain]}",
            rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app
          }
        }`;
  }
  if (chain === "starkex") {
    if (isWhiteLabled) {
      code = `
          starkExAPI = new StarkExAPI({
            endpoint: "https://gw.playground-v2.starkex.co",
          });
          const web3AuthCtorParams = {
            clientId,
            chainConfig: {
              chainNamespace: "eip155",
            },
            uiConfig: {
              theme: "dark",
              loginMethodsOrder: ["facebook", "twitter"],
              appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
            }
          }`;
    } else {
      code = `
          starkExAPI = new StarkExAPI({
            endpoint: "https://gw.playground-v2.starkex.co",
          });
          const web3AuthCtorParams = {
            clientId,
            chainConfig: {
              chainNamespace: "other",
            }
          }`;
    }
  }
  if (chain === "starknet") {
    if (isWhiteLabled) {
      code = `
          const web3AuthCtorParams = {
            clientId,
            chainConfig: {
              chainNamespace: "other",
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
              chainNamespace: "other",
            }
          }`;
    }
  }

  return {
    code,
  };
};

// React Functions

export const getRPCFunctionsUIButtonsReact = (
  chain: "eth" | "sol" | "starkex" | "starknet"
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
  if (chain === "starknet") {
    code = `
      <button onClick={onGetStarkHDAccount} className="card">
        Get Stark Accounts
      </button>
      <button onClick={onDeployAccount} className="card">
        Deploy Account
      </button>`;
  }
  return {
    code,
  };
};

export const getReactPackageJson = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
    "@web3auth/ethereum-provider": "^0.9.4",
    "web3": "^1.7.0",`;
  if (chain === "sol") {
    code = `
    "@web3auth/solana-provider": "^0.9.4",
    "@solana/web3.js": "^1.36.0",`;
  }
  if (chain === "starkex") {
    code = `
    "@starkware-industries/starkex-js": "0.0.6",
    "@toruslabs/starkware-crypto": "^1.1.0",
    "bn.js": "^5.2.0",
    "elliptic": "^6.5.4",`;
  }
  if (chain === "starknet") {
    code = `
    "@toruslabs/openlogin-starkkey": "^1.7.0",
    "bn.js": "^5.2.0",
    "elliptic": "^6.5.4",
    "starknet": "^3.11.0",
    "web3": "^1.7.0",`;
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
