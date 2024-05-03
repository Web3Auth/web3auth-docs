import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_APP_TSX);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_CONFIG_OVERRIDES);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_PACKAGE_JSON);

    return { filenames, files, steps };
  },
};

export default framework;
