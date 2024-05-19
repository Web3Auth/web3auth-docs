import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.NO_MODAL_HTML_INDEX_HTML);
    filenames.push(hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS);
    filenames.push(hostedFileLinks.NO_MODAL_HTML_STYLE_CSS);

    return { filenames, files, steps };
  },
};

export default framework;
