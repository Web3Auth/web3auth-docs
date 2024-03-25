import * as hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.MODAL_NUXT_CONFIG_JS);
    filenames.push(hostedFileLinks.MODAL_NUXT_HOME_VUE);
    filenames.push(hostedFileLinks.MODAL_NUXT_PACKAGE_JSON);

    return { filenames, files, steps };
  },
};

export default framework;
