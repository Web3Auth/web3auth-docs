import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getUpdatedFiles from "./files";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps, whitelabel, customAuth, rnWorkflowMode }) {
    const replacementAggregator = new ReplaceFileAggregator();

    getUpdatedFiles(files, whitelabel, customAuth, rnWorkflowMode, replacementAggregator);
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth, rnWorkflowMode);
    getFileNames(filenames, rnWorkflowMode);

    return { filenames, files, steps };
  },
};

export default framework;
