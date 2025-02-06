import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import { ReplaceFileAggregator } from "../../../utils";
import getSteps from "./steps";

const framework = {
  build({ filenames, files, steps }) {
    const replacementAggregator = new ReplaceFileAggregator();
    getSteps(steps, files, replacementAggregator);
    filenames.push(hostedFileLinks.SFA_FLUTTER_WEB3AUTH_SFA_DART);
    filenames.push(hostedFileLinks.SFA_FLUTTER_MAIN_DART);
    filenames.push(hostedFileLinks.SFA_FLUTTER_FIREBASE_DART);
    filenames.push(hostedFileLinks.SFA_FLUTTER_PUBSPEC_YAML);
    filenames.push(hostedFileLinks.SFA_FLUTTER_PODFILE);
    filenames.push(hostedFileLinks.SFA_FLUTTER_BUILD_GRADLE);
    filenames.push(hostedFileLinks.SFA_FLUTTER_APP_BUILD_GRADLE);

    return { filenames, files, steps };
  },
};

export default framework;
