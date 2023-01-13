import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, customAuth, mfa, rnMode, whitelabel, web3AuthNetwork, filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(chain, customAuth, mfa, rnMode, whitelabel, web3AuthNetwork, files, replacementAggregator);
    getSteps(steps, chain, customAuth, mfa, rnMode, whitelabel, filenames, files, replacementAggregator);
    getFileNames(filenames, rnMode);

    return { filenames, files, steps };
  },
};

export default framework;
