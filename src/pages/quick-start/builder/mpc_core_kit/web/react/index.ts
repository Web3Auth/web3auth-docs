import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.MPC_CORE_KIT_WEB_REACT_APP_TSX);
    filenames.push(hostedFileLinks.MPC_CORE_KIT_WEB_REACT_PACKAGE_JSON);
    filenames.push(hostedFileLinks.MPC_CORE_KIT_WEB_REACT_CONFIG_OVERRIDES);

    return { filenames, files, steps };
  },
};

export default framework;
