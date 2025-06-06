import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.ANGULAR_APP_COMPONENT_TS);
    filenames.push(hostedFileLinks.ANGULAR_PACKAGE_JSON);
    filenames.push(hostedFileLinks.ANGULAR_APP_COMPONENT_HTML);
    filenames.push(hostedFileLinks.ANGULAR_POLYFILL_TS);
    filenames.push(hostedFileLinks.ANGULAR_TSCONFIG_JSON);
    filenames.push(hostedFileLinks.ANGULAR_ETHERSRPC_TS);
    filenames.push(hostedFileLinks.ANGULAR_VIEMRPC_TS);

    return { filenames, files, steps };
  },
};

export default framework;
