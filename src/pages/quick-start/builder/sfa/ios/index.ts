import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT);
    filenames.push(hostedFileLinks.SFA_IOS_CONTENTVIEW_SWIFT);
    filenames.push(hostedFileLinks.SFA_IOS_LOGINVIEW_SWIFT);
    filenames.push(hostedFileLinks.SFA_IOS_USERDETAILVIEW_SWIFT);
    return { filenames, files, steps };
  },
};

export default framework;
