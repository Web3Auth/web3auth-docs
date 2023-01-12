import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ chain, filenames, files, steps, whitelabel, customAuth, mfa }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(chain, files, whitelabel, customAuth, mfa, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth, mfa);
    getFileNames(filenames);

    return { filenames, files, steps };
  },
};

export default framework;
