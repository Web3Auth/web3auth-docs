import { chainIdMap, rpcTargetMap } from "./maps";

export const getConstructorCodeHTML = (chain: "sol", isWhiteLabled: boolean) => {
  let chainDetails = ``;
  let uiConfig = ``;

  if (isWhiteLabled) {
    uiConfig = `
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "google"],
          appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
        }`;
  }

  if (chain === "sol") {
    chainDetails = `
          chainNamespace: "solana",
          chainId: "${chainIdMap[chain]}",
          rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app`;
  } else {
    chainDetails = `
          chainNamespace: "eip155",
          chainId: "${chainIdMap[chain]}",
          rpcTarget: "${rpcTargetMap[chain]}", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app`;
  }

  const code = `
      web3auth = new window.Web3auth.Web3Auth({
        clientId,
        chainConfig: {${chainDetails}
        },${uiConfig}
      });`;

  return code;
};
