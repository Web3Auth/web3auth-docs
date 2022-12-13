import { YES } from "../choices";
import { FILENAME_CONTENTVIEW, FILENAME_MAIN, FILENAME_PODFILE, FILENAME_WEB3AUTH_PLIST } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth) {
  steps.push(
    {
      ...STEPS.installationIOS,
      pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "installationIOS"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH_PLIST, files[FILENAME_WEB3AUTH_PLIST], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "instantiate"),
    },
    customAuth === YES
      ? {
          ...STEPS.loginWithJwt,
          pointer: replacementAggregator.highlightRange(FILENAME_CONTENTVIEW, files[FILENAME_CONTENTVIEW], "loginWithJwt"),
        }
      : {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "triggeringLogin"),
        },

    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "getUserInfo"),
    }
  );
}
