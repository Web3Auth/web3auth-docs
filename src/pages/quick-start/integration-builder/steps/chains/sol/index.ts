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
      filenames.push("chains/sol/solana.js");

      steps.push({
        ...STEPS.initialize,
        pointer: { filename: "chains/sol/solana.js", range: "7-13" },
      });
    } else {
      filenames.push("chains/sol/solana.ts");

      steps.push({
        ...STEPS.initialize,
        pointer: { filename: "chains/sol/solana.ts", range: "16-27" },
      });
    }

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
