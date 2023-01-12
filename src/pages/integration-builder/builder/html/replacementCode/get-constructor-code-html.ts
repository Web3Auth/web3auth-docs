import { chainIdMap, rpcTargetMap } from "../../../commonCode/maps";
import { OTHER_CHAINS, SOL } from "../../choices";

export const getConstructorCode = (chain: string, whitelabel: boolean, useModal: boolean) => {
  let chainDetails = ``;

  if (chain === SOL) {
    chainDetails = `
            chainNamespace: "solana",
            chainId: "0x1", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
            rpcTarget: "${rpcTargetMap[chain]}", // This is the public RPC we have added, please pass on your own endpoint while creating an app`;
  } else if (chain in OTHER_CHAINS) {
    chainDetails = `
            chainNamespace: "other"`;
  } else {
    chainDetails = `
            chainNamespace: "eip155",
            chainId: "${chainIdMap[chain]}",
            rpcTarget: "${rpcTargetMap[chain]}", // This is the public RPC we have added, please pass on your own endpoint while creating an app`;
  }

  if (useModal) {
    let uiConfig = ``;

    if (whitelabel) {
      uiConfig = `
          // HIGHLIGHTSTART-whiteLabeling
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "google"],
            appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
          }
          // HIGHLIGHTEND-whiteLabeling`;
    }

    const code = `
        // HIGHLIGHTSTART-instantiateSDK
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: "cyan", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {${chainDetails}
          },${uiConfig}
        });
        // HIGHLIGHTEND-instantiateSDK`;

    return code;
  }

  const code = `
        // HIGHLIGHTSTART-instantiateSDK
        const web3auth = new Web3AuthCore({
          clientId,
          web3AuthNetwork: "cyan", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {${chainDetails}
          },
        });
        // HIGHLIGHTEND-instantiateSDK`;

  return code;
};
