import { YES } from "../choices";
import { FILENAME_MAINACTIVITY } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth, mfa) {
  steps.push(
    {
      ...STEPS.installationFlutter,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "installationFlutter"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "instantiate"),
    }
  );
  if (customAuth === YES) {
    steps.push({
      ...STEPS.customAuthn,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "customAuthn"),
    });
  }
  if (whitelabel === YES) {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "whiteLabeling"),
    });
  }
  if (mfa === YES) {
    steps.push({
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "multiFactorAuthentication"),
    });
  }
  steps.push(
    {
      ...STEPS.triggeringLogin,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "triggeringLogin"),
    },
    {
      ...STEPS.triggeringLogout,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "triggeringLogout"),
    }
  );
}
