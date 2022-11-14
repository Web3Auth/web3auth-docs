import { EXPO } from "../choices";
import { FILENAME_ANDROID_MANIFEST, FILENAME_APP_JSON, FILENAME_APP_TSX, FILENAME_BARE_PACKAGE_JSON, FILENAME_EXPO_PACKAGE_JSON } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuth, rnWorkflowMode) {
  const isExpo = rnWorkflowMode === EXPO;
  const isCustomAuth = customAuth === "yes";
  const isWhitelabel = whitelabel === "yes";
  steps.push(
    ...(isExpo
      ? [
          {
            ...STEPS.installation,
            pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installation"),
          },
        ]
      : [
          {
            ...STEPS.installation,
            pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installation"),
          },
        ]),

    ...(isExpo
      ? [
          {
            ...STEPS.installWebBrowser,
            pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installWebBrowser"),
          },
        ]
      : [
          {
            ...STEPS.installWebBrowser,
            pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installWebBrowser"),
          },
        ]),
    ...(isExpo
      ? [
          {
            ...STEPS.platformSetup,
            pointer: replacementAggregator.highlightRange(FILENAME_APP_JSON, files[FILENAME_APP_JSON], "platformSetup"),
          },
        ]
      : [
          {
            ...STEPS.platformSetup,
            pointer: replacementAggregator.highlightRange(FILENAME_ANDROID_MANIFEST, files[FILENAME_ANDROID_MANIFEST], "platformSetup"),
          },
        ]),
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "registerApp"),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "instantiate"),
    },
    {
      ...(isCustomAuth ? STEPS.loginWithJwt : STEPS.triggeringLogin),
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], isCustomAuth ? "loginWithJwt" : "triggeringLogin"),
    },
    ...(isWhitelabel
      ? [
          {
            ...STEPS.whiteLabeling,
            pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "whiteLabeling"),
          },
        ]
      : [])
  );
}
