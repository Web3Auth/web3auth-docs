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
