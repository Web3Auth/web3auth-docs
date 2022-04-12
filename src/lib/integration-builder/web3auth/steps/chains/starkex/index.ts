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
              chainConfig: { chainNamespace: "eip155" },

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
              chainConfig: { chainNamespace: "eip155" },

          };
        `
      );

    filenames.push("starkex/starkex.ts");

    steps.push({
      ...STEPS.initialize,
      pointer: { filename: "starkex/starkex.ts", range: "17-43" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
