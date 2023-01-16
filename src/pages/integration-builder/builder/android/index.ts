import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, filenames, files, steps, whitelabel, customAuth, mfa, web3AuthNetwork }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(chain, files, whitelabel, customAuth, mfa, web3AuthNetwork, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth);
    getFileNames(filenames);

    return { filenames, files, steps };
  },
};

export default framework;
