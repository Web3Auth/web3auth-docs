import { NONE, YES } from "../choices";
import { FILENAME_ANDROIDMANIFEST, FILENAME_BUILDGRADLE, FILENAME_MAINACTIVITY, FILENAME_SETTINGSGRADLE, FILENAME_STRINGS } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth) {
  steps.push(
    {
      ...STEPS.buildingApp,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "buildingApp"),
    },
    {
      ...STEPS.RequirementsAndroid,
      pointer: replacementAggregator.highlightRange(FILENAME_BUILDGRADLE, files[FILENAME_BUILDGRADLE], "installationAndroid"),
    },
    {
      ...STEPS.installationAndroid,
      pointer: replacementAggregator.highlightRange(FILENAME_BUILDGRADLE, files[FILENAME_BUILDGRADLE], "installationBuildGradle"),
    },
    {
      ...STEPS.JitpackURL,
      pointer: replacementAggregator.highlightRange(FILENAME_SETTINGSGRADLE, files[FILENAME_SETTINGSGRADLE], "JitpackURL"),
    },
    {
      ...STEPS.installationAppManifest,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "installationAppManifest"),
    },
    {
      ...STEPS.singleTop,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "singleTop"),
    },
    {
      ...STEPS.configureDeepLink,
      pointer: replacementAggregator.highlightRange(FILENAME_ANDROIDMANIFEST, files[FILENAME_ANDROIDMANIFEST], "configureDeepLink"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_STRINGS, files[FILENAME_STRINGS], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "instantiate"),
    }
  );
  if (whitelabel === YES) {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "whiteLabeling"),
    });
  }
  if (customAuth !== NONE) {
    steps.push({
      ...STEPS.CustomAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "customAuthStep"),
    });
  }
  steps.push(
    {
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "multiFactorAuthentication"),
    },
    {
      ...STEPS.setResultURL,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "setResultURL"),
    },
    {
      ...STEPS.triggeringLogin,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "triggeringLogin"),
    },
    {
      ...STEPS.evmRPCFunctions,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "evmRPCFunctions"),
    },
    {
      ...STEPS.triggeringLogout,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "triggeringLogout"),
    }
  );
}
