import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getSteps from "./steps";
// For iOS SDK, dynamicConstructorParams must be YES if whitelabel is YES or customAuth == YES.
// Will also need the ability to have whitelabel and customAuth being YES in the same time as well.

const framework = {
  build({ filenames, files, steps, whitelabel, customAuth }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator, whitelabel, customAuth);
    getFileNames(filenames);

    return { filenames, files, steps };
  },
};

export default framework;
