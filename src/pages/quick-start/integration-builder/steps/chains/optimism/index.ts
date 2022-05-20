import { toSteps } from "../../../utils";
import * as initialize from "./initializing.mdx";

const STEPS = toSteps({
  initialize,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, lang }) {
    const newFiles = files;

    if (lang === "html") {
      filenames.push("chains/eth/evm.js");

      steps.push({
        ...STEPS.initialize,
        pointer: { filename: "chains/eth/evm.js", range: "7" },
      });
    } else {
      filenames.push("chains/eth/evm.ts");

      steps.push({
        ...STEPS.initialize,
        pointer: { filename: "chains/eth/evm.ts", range: "7-18" },
      });
    }

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
