import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS);
    filenames.push(hostedFileLinks.NO_MODAL_ANGULAR_PACKAGE_JSON);
    filenames.push(hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_HTML);
    filenames.push(hostedFileLinks.NO_MODAL_ANGULAR_POLYFILL_TS);
    filenames.push(hostedFileLinks.NO_MODAL_ANGULAR_TSCONFIG_JSON);
    filenames.push(hostedFileLinks.ETHERSRPC_TS);
    filenames.push(hostedFileLinks.VIEMRPC_TS);
    filenames.push(hostedFileLinks.WEB3RPC_TS);

    return { filenames, files, steps };
  },
};

export default framework;
