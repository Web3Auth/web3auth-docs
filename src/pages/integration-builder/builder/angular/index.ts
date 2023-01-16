import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, replacementAggregator);
    getSteps(steps, files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, replacementAggregator);
    getFileNames(filenames, chain, evmFramework);

    return { filenames, files, steps };
  },
};

export default framework;
