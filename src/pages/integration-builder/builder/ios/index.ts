import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";
// For iOS SDK, dynamicConstructorParams must be YES if whitelabel is YES or customAuth == YES.
// Will also need the ability to have whitelabel and customAuth being YES in the same time as well.

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
