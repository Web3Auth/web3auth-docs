import { FILENAME_MANIFEST, FILENAME_WEB3AUTH } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth, mfa) {
  steps.push(
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(FILENAME_MANIFEST, files[FILENAME_MANIFEST], "installation"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "instantiate"),
    }
  );
  if (whitelabel === "yes") {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "whiteLabeling"),
    });
  }
  if (customAuth === "yes") {
    steps.push({
      ...STEPS.CustomAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "CustomAuthentication"),
    });
  }
  if (mfa === "yes") {
    steps.push({
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "multiFactorAuthentication"),
    });
  }
  steps.push(
    {
      ...STEPS.triggeringLogin,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "triggeringLogin"),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "getUserInfo"),
    },
    {
      ...STEPS.triggeringLogout,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "triggeringLogout"),
    }
  );
}
