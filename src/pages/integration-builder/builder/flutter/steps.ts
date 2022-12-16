import { NONE, YES } from "../choices";
import { FILENAME_BUILDGRADLE, FILENAME_MAINACTIVITY, FILENAME_PODFILE, FILENAME_PUBSPEC } from "./filenames";
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
      ...STEPS.RequirementsIOS,
      pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "installationIOS"),
    },
    {
      ...STEPS.installationFlutter,
      pointer: replacementAggregator.highlightRange(FILENAME_PUBSPEC, files[FILENAME_PUBSPEC], "installationFlutter"),
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
  if (customAuth !== NONE) {
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
  steps.push(
    {
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "multiFactorAuthentication"),
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
