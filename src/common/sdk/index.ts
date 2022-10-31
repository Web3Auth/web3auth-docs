import { getConstructorCodeAndroid, getLoginCodeAndroid } from "../../../androidSnippets";
import { PLACEHOLDERS } from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as configureDeepLink from "./configure-deeplink.mdx";
import * as CustomAuthentication from "./custom-authentication.mdx";
import * as installationAppManifest from "./install-app-manifest.mdx";
import * as installationBuildGradle from "./install-build-gradle.mdx";
import * as installationAndroid from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as setResultURL from "./setResultURL.mdx";
import * as singleTop from "./singleTop.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installationAndroid,
  installationBuildGradle,
  installationAppManifest,
  registerApp,
  configureDeepLink,
  singleTop,
  instantiate,
  setResultURL,
  triggeringLogin,
  triggeringLogout,
  whiteLabeling,
  CustomAuthentication,
  multiFactorAuthentication,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, mfa }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_ANDROIDMANIFEST = "frameworks/android/AndroidManifest.xml";
    const FILENAME_MAINACTIVITY = "frameworks/android/MainActivity.kt";
    const FILENAME_SETTINGSGRADLE = "frameworks/android/settings.gradle";
    const FILENAME_BUILDGRADLE = "frameworks/android/build.gradle";
    const FILENAME_STRINGS = "frameworks/android/strings.xml";
    const FILENAME_ACTIVITY_MAIN_XML = "frameworks/android/activity_main.xml";

    const ConstructorCodeAndroid = getConstructorCodeAndroid(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
      files[FILENAME_MAINACTIVITY],
      FILENAME_MAINACTIVITY,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeAndroid
    );

    const LoginCodeAndroid = getLoginCodeAndroid(mfa === "yes");
    newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
      files[FILENAME_MAINACTIVITY],
      FILENAME_MAINACTIVITY,
      PLACEHOLDERS.ANDROID_LOGIN_CONFIG,
      LoginCodeAndroid
    );

    filenames.push(FILENAME_MAINACTIVITY);

    filenames.push(FILENAME_ANDROIDMANIFEST);
    filenames.push(FILENAME_BUILDGRADLE);
    filenames.push(FILENAME_SETTINGSGRADLE);
    filenames.push(FILENAME_STRINGS);
    filenames.push(FILENAME_ACTIVITY_MAIN_XML);

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
    if (customAuthentication === "yes") {
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
    return { filenames, files, steps };
  },
};

export default reactSteps;
