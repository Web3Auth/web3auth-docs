import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS);
    filenames.push(hostedFileLinks.PNP_UNITY_MANIFEST_JSON);
    filenames.push(hostedFileLinks.PNP_UNITY_ANDROID_MANIFEST);

    return { filenames, files, steps };
  },
};

export default framework;
