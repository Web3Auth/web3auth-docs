import hostedFileLinks from "../../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS);
    filenames.push(hostedFileLinks.SFA_WEB_ANGULAR_PACKAGE_JSON);
    filenames.push(hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_HTML);
    filenames.push(hostedFileLinks.SFA_WEB_ANGULAR_POLYFILL_TS);
    filenames.push(hostedFileLinks.SFA_WEB_ANGULAR_TSCONFIG_JSON);

    return { filenames, files, steps };
  },
};

export default framework;
