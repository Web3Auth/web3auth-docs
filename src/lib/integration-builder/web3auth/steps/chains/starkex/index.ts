import { toSteps } from "../../../../utils";
import * as initialize from "./initializing.mdx";

const STEPS = toSteps({
  initialize,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, lang }) {
    const newFiles = files;

    filenames.push("starkex/starkex.ts");

    steps.push({
      ...STEPS.initialize,
      pointer: { filename: "starkex/starkex.ts", range: "17-43" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
