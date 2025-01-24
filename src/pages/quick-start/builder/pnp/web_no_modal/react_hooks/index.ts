import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_WEB3AUTHCONTEXT_TSX);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_APP_TSX);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_MAIN_TSX);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_VITE_CONFIG);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_INDEX_HTML);
    filenames.push(hostedFileLinks.NO_MODAL_REACT_HOOKS_PACKAGE_JSON);
    filenames.push(hostedFileLinks.ETHERSRPC_TS);
    filenames.push(hostedFileLinks.VIEMRPC_TS);
    filenames.push(hostedFileLinks.WEB3RPC_TS);

    return { filenames, files, steps };
  },
};

export default framework;
