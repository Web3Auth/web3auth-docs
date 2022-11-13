import { chainIdMap, rpcTargetMap } from "../../../commonCode/maps";
import { SOL } from "../../choices";

export const getConstructorCodeHTML = (chain: string, isWhiteLabled: boolean) => {
  let chainDetails = ``;
  let uiConfig = ``;

  if (isWhiteLabled) {
    uiConfig = `
        // HIGHLIGHTSTART-whiteLabeling
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "google"],
          appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
        }
        // HIGHLIGHTEND-whiteLabeling`;
  }

  if (chain === SOL) {
    chainDetails = `
          chainNamespace: "solana",
          chainId: "0x1", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
          rpcTarget: "${rpcTargetMap[chain]}", // This is the public RPC we have added, please pass on your own endpoint while creating an app`;
  } else {
    chainDetails = `
          chainNamespace: "eip155",
          chainId: "${chainIdMap[chain]}",
          rpcTarget: "${rpcTargetMap[chain]}", // This is the public RPC we have added, please pass on your own endpoint while creating an app`;
  }

  const code = `
      // HIGHLIGHTSTART-instantiateSDK
      web3auth = new window.Modal.Web3Auth({
        clientId,
        chainConfig: {${chainDetails}
        },${uiConfig}
      });
      // HIGHLIGHTEND-instantiateSDK`;

  return code;
};
