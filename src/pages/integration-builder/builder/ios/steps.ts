import { NONE, YES } from "../choices";
import { FILENAME_CONTENTVIEW, FILENAME_MAIN, FILENAME_PODFILE, FILENAME_WEB3AUTH_PLIST, FILENAME_WEB3RPC } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth) {
  steps.push(
    {
      ...STEPS.buildingApp,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "buildingApp"),
    },
    {
      ...STEPS.RequirementsIOS,
      pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "installationIOS"),
    },
    {
      ...STEPS.installationIOS,
      pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "installationPodfile"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH_PLIST, files[FILENAME_WEB3AUTH_PLIST], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "instantiate"),
    }
  );
  if (whitelabel === YES) {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "whiteLabeling"),
    });
  }
  if (customAuth !== NONE) {
    steps.push({
      ...STEPS.CustomAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "customAuthStep"),
    });
  }
  steps.push(
    {
      ...STEPS.multiFactorAuthentication,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "multiFactorAuthentication"),
    },
    {
      ...STEPS.triggeringLogin,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "triggeringLogin"),
    },
    {
      ...STEPS.evmRPCFunctions,
      pointer: replacementAggregator.highlightRange(FILENAME_WEB3RPC, files[FILENAME_WEB3RPC], "evmRPCFunctions"),
    },
    {
      ...STEPS.triggeringLogout,
      pointer: replacementAggregator.highlightRange(FILENAME_MAIN, files[FILENAME_MAIN], "triggeringLogout"),
    }
  );
}
