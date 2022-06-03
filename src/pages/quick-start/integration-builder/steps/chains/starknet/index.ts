import { toSteps } from "../../../utils";
import * as initialize from "./initializing.mdx";

const STEPS = toSteps({
  initialize,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, lang }) {
    const newFiles = files;

    filenames.push("chains/starknet/starknet.js");
    filenames.push("chains/starknet/ArgentAccount.json");

    steps.push({
      ...STEPS.initialize,
      pointer: { filename: "chains/starknet/starknet.js", range: "30-51" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
