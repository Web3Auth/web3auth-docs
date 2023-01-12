import { EXPO, NONE, YES } from "../choices";
import {
  FILENAME_ANDROID_MANIFEST,
  FILENAME_APP_JSON,
  FILENAME_APP_TSX,
  FILENAME_BARE_PACKAGE_JSON,
  FILENAME_BUILD_GRADLE,
  FILENAME_ETHERS_JS,
  FILENAME_EXPO_PACKAGE_JSON,
  FILENAME_PODFILE,
} from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, chain, customAuth, mfa, rnMode, whitelabel, filenames, files, replacementAggregator) {
  if (rnMode === EXPO) {
    steps.push(
      {
        ...STEPS.buildingAppExpo,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "buildingApp"),
      },
      {
        ...STEPS.requirementsExpo,
        pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "requirements"),
      },
      {
        ...STEPS.configureDeeplinkExpo,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_JSON, files[FILENAME_APP_JSON], "configureDeeplink"),
      },
      {
        ...STEPS.installation,
        pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installation"),
      },
      {
        ...STEPS.installWebBrowserExpo,
        pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installWebBrowser"),
      },
      {
        ...STEPS.redirectUrlExpo,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "redirectUrl"),
      }
    );
  } else {
    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "buildingApp"),
      },
      {
        ...STEPS.requirements,
        pointer: replacementAggregator.highlightRange(FILENAME_BUILD_GRADLE, files[FILENAME_BUILD_GRADLE], "requirements"),
      },
      {
        ...STEPS.configureDeeplinkAndroid,
        pointer: replacementAggregator.highlightRange(FILENAME_ANDROID_MANIFEST, files[FILENAME_ANDROID_MANIFEST], "configureDeeplink"),
      },
      {
        ...STEPS.configureDeeplinkiOS,
        pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "configureDeeplink"),
      },
      {
        ...STEPS.installation,
        pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installation"),
      },
      {
        ...STEPS.installWebBrowser,
        pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installWebBrowser"),
      },
      {
        ...STEPS.redirectUrl,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "redirectUrl"),
      }
    );
  }
  steps.push(
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "registerApp"),
    },
    {
      ...STEPS.instantiateSDK,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "instantiate"),
    }
  );
  if (whitelabel === YES) {
    steps.push({
      ...STEPS.whitelabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "whiteLabeling"),
    });
  }
  if (customAuth !== NONE) {
    steps.push({
      ...STEPS.customAuth,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "customAuthStep"),
    });
  }
  steps.push(
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "triggeringLogin"),
    },
    {
      ...STEPS.mfa,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "mfa"),
    },
    {
      ...STEPS.evmRPCFunctions,
      pointer: replacementAggregator.highlightRange(FILENAME_ETHERS_JS, files[FILENAME_ETHERS_JS], "evmRPCFunctions"),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "triggeringLogout"),
    }
  );
}
