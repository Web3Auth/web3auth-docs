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
