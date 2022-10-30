import { ReplaceFileAggregator } from "../../utils";
import getFileNames from "./filenames";
import getSteps from "./steps";
// For iOS SDK, dynamicConstructorParams must be "yes" if whitelabel is "yes" or customAuthentication == "yes".
// Will also need the ability to have whitelabel and customAuthentication being "yes" in the same time as well.

const framework = {
  build({ filenames, files, steps, whitelabel, customAuthentication }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator, whitelabel, customAuthentication);
    getFileNames(filenames);

    return { filenames, files, steps };
  },
};

export default framework;
