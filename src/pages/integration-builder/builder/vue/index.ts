import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, evmFramework, customAuth, mfa, whitelabel, useModal, filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth, evmFramework, chain);
    getFileNames(filenames, chain, evmFramework);

    return { filenames, files, steps };
  },
};

export default framework;
