import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const reactSteps = {
  build({ filenames, files, steps, whitelabel, customAuthentication, mfa }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getUpdatedFiles(files, whitelabel, customAuthentication, mfa, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuthentication, mfa);
    getFileNames(filenames);

    return { filenames, files, steps };
  },
};

export default reactSteps;
