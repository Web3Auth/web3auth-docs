import { chainIdMap, rpcTargetMap } from "./maps";

export const getConstructorCode = (chain: "sol" | "starkex" | "starknet", isWhiteLabled: boolean) => {
  let chainDetails = ``;
  let uiConfig = ``;

  if (isWhiteLabled) {
    uiConfig = `
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "twitter"],
          appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
        }`;
  }

  if (chain === "sol") {
    chainDetails = `
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "${chainIdMap[chain]}",
          // rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app`;
  } else if (chain === "starkex" || chain === "starknet") {
    chainDetails = `
          chainNamespace: CHAIN_NAMESPACES.OTHER,
          rpcTarget: "https://rpc.ankr.com/eth_goerli", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app`;
  } else {
    chainDetails = `
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "${chainIdMap[chain]}",
          // rpcTarget: "${rpcTargetMap[chain]}", // This is the mainnet RPC we have added, please pass on your own endpoint while creating an app`;
  }

  const code = `
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {${chainDetails}
        },${uiConfig}
      });`;

  return code;
};
