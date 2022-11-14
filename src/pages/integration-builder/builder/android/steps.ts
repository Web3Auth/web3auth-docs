import { FILENAME_ANDROIDMANIFEST, FILENAME_BUILDGRADLE, FILENAME_MAINACTIVITY, FILENAME_SETTINGSGRADLE, FILENAME_STRINGS } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth, mfa) {
  steps.push(
    {
      ...STEPS.installationAndroid,
      pointer: replacementAggregator.highlightRange(FILENAME_SETTINGSGRADLE, files[FILENAME_SETTINGSGRADLE], "installationAndroid"),
    },
    {
      ...STEPS.installationBuildGradle,
      pointer: replacementAggregator.highlightRange(FILENAME_BUILDGRADLE, files[FILENAME_BUILDGRADLE], "installationBuildGradle"),
    },
    {
      ...STEPS.installationAppManifest,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "installationAppManifest"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_STRINGS, files[FILENAME_STRINGS], "registerApp"),
    },
    {
      ...STEPS.configureDeepLink,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "configureDeepLink"),
    },
    {
      ...STEPS.singleTop,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "singleTop"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "instantiate"),
    }
  );
  if (whitelabel === "yes") {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "whiteLabeling"),
    });
  }
  if (customAuth === "yes") {
    steps.push({
      ...STEPS.CustomAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "CustomAuthentication"),
    });
  }
  if (mfa === "yes") {
    steps.push({
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "multiFactorAuthentication"),
    });
  }
  steps.push(
    {
      ...STEPS.setResultURL,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "setResultURL"),
    },
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
