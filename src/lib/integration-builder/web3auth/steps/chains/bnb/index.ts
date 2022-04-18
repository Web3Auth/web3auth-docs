import { replaceFileVariable, toSteps } from "../../../../utils";
import * as initialize from "./initializing.mdx";

const STEPS = toSteps({
  initialize,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, customLogin }) {
    const newFiles = files;
    if (customLogin !== "yes")
      newFiles["web3auth/web/input.js"] = replaceFileVariable(
        files["web3auth/web/input.js"],
        "const web3AuthCtorParams = {};",
        `
    const web3AuthCtorParams = {
      clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
      chainConfig: {
        chainNamespace: "eip155",
        rpcTarget: "https://data-seed-prebsc-2-s3.binance.org:8545",
        blockExplorer: "https://testnet.bscscan.com",
        chainId: "0x61",
        displayName: "Binance SmartChain Testnet",
        ticker: "BNB",
        tickerName: "BNB",
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
                  rpcTarget: "https://data-seed-prebsc-2-s3.binance.org:8545",
                  blockExplorer: "https://testnet.bscscan.com",
                  chainId: "0x61",
                  displayName: "Binance SmartChain Testnet",
                  ticker: "BNB",
                  tickerName: "BNB",
              }
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
