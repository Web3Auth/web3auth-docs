import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const replacementAggregator = new ReplaceFileAggregator();

    getUpdatedFiles(files, whitelabel, customAuthentication, chain, evmFramework, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuthentication, evmFramework, chain);
    getFileNames(filenames, chain, evmFramework);

    return { filenames, files, steps };
  },
};

export default framework;
