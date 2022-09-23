import { PLACEHOLDERS } from "../../../commonSnippets";
import { getConstructorCodeFlutter, getLoginCodeFlutter } from "../../../flutterSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
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
        pointer: { filename: "frameworks/flutter/main.dart", range: "4-7" },
      },
      {
        ...STEPS.registerApp,
        pointer: { filename: "frameworks/flutter/main.dart", range: "51-52" },
      },
      {
        ...STEPS.instantiate,
        pointer: { filename: "frameworks/flutter/main.dart", range: "41-57" },
      }
    );
    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthn,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "59-60" }),
      });
    }
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "59-60" }),
      });
    }
    if (mfa === "yes") {
      steps.push({
        ...STEPS.multiFactorAuthentication,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "195-196" }),
      });
    }
    steps.push(
      {
        ...STEPS.triggeringLogin,
        pointer: { filename: "frameworks/flutter/main.dart", range: "192-194" },
      },
      {
        ...STEPS.triggeringLogout,
        pointer: { filename: "frameworks/flutter/main.dart", range: "182" },
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
