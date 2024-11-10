import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.SFA_WEB_NEXT_PAGE_TSX);
    filenames.push(hostedFileLinks.SFA_WEB_NEXT_PACKAGE_JSON);

    return { filenames, files, steps };
  },
};

export default framework;
