import { replaceFileVariable, toSteps } from "../../../../utils";
import * as initialize from "./initializing.mdx";

const STEPS = toSteps({
  initialize,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, customLogin }) {
    const newFiles = files;
    if (customLogin === "no")
      newFiles["web3auth/web/input.js"] = replaceFileVariable(
        files["web3auth/web/input.js"],
        "const web3AuthCtorParams = {};",
        `
        const web3AuthCtorParams = {
          clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
          chainConfig: {
              chainNamespace: "eip155",
              rpcTarget: "https://rpc-mumbai.maticvigil.com",
              blockExplorer: "https://mumbai-explorer.matic.today",
              chainId: "0x13881",
              displayName: "Polygon Mumbai Testnet",
              ticker: "matic",
              tickerName: "matic",
          },
      };
`
      );
    else
      newFiles["web3auth/web/customInput.js"] = replaceFileVariable(
        files["web3auth/web/customInput.js"],
        "const web3AuthCtorParams = {};",
        `
          const web3AuthCtorParams = {
              clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
              chainConfig: {
                  chainNamespace: "eip155",
                  rpcTarget: "https://rpc-mumbai.maticvigil.com",
                  blockExplorer: "https://mumbai-explorer.matic.today",
                  chainId: "0x13881",
                  displayName: "Polygon Mumbai Testnet",
                  ticker: "matic",
                  tickerName: "matic",
              },

          };

        `
      );

    filenames.push("eth/evm.ts");

    steps.push({
      ...STEPS.initialize,
      pointer: { filename: "eth/evm.ts", range: "7-18" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
