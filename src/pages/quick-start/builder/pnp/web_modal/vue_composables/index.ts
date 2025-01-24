import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX);
    filenames.push(hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE);
    filenames.push(hostedFileLinks.MODAL_VUE_COMPOSABLES_APP_VUE);
    filenames.push(hostedFileLinks.MODAL_VUE_COMPOSABLES_CONFIG_JS);
    filenames.push(hostedFileLinks.MODAL_VUE_COMPOSABLES_PACKAGE_JSON);
    filenames.push(hostedFileLinks.ETHERSRPC_TS);
    filenames.push(hostedFileLinks.VIEMRPC_TS);
    filenames.push(hostedFileLinks.WEB3RPC_TS);

    return { filenames, files, steps };
  },
};

export default framework;
