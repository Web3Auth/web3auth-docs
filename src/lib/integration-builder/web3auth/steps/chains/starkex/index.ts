import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import * as initializeProvider from "./initializing.mdx";

const STEPS = toSteps({
  initializeProvider,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, lang }) {
    const newFiles = files;

    filenames.push("starkex/starkex.ts");

    steps.push({
      ...STEPS.initializeProvider,
      pointer: { filename: "starkex/starkex.ts", range: "17-43" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
