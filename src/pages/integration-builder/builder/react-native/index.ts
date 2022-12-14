import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, customAuth, mfa, rnMode, whitelabel, filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(chain, customAuth, mfa, rnMode, whitelabel, files, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth, rnMode);
    getFileNames(filenames, rnMode);

    return { filenames, files, steps };
  },
};

export default framework;
