import { PLACEHOLDERS } from "../../commonSnippets";
import { getConstructorCodeFlutter, getLoginCodeFlutter } from "../../flutterSnippets";
import { ReplaceFileAggregator, toSteps } from "../../utils";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as customAuthn from "./custom-authentication.mdx";
import * as installationFlutter from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";

const STEPS = toSteps({
  installationFlutter,
  registerApp,
  instantiate,
  triggeringLogin,
  triggeringLogout,
  loginWithJwt,
  whiteLabeling,
  customAuthn,
  multiFactorAuthentication,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, mfa }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_MAINACTIVITY = "frameworks/flutter/main.dart";

    const ConstructorCodeFlutter = getConstructorCodeFlutter(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
      files[FILENAME_MAINACTIVITY],
      FILENAME_MAINACTIVITY,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeFlutter
    );

    const LoginCodeFlutter = getLoginCodeFlutter(mfa === "yes");
    newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
      files[FILENAME_MAINACTIVITY],
      FILENAME_MAINACTIVITY,
      PLACEHOLDERS.FLUTTER_LOGIN_CONFIG,
      LoginCodeFlutter
    );

    filenames.push(FILENAME_MAINACTIVITY);

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
    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthn,
        pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "customAuthn"),
      });
    }
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.highlightRange(FILENAME_MAINACTIVITY, files[FILENAME_MAINACTIVITY], "whiteLabeling"),
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
