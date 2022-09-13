import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as customAuthn from "./custom-authentication.mdx";
import * as installationAndroid from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";

const STEPS = toSteps({
  installationAndroid,
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

    filenames.push("frameworks/flutter/main.dart");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "frameworks/flutter/main.dart", range: "5-8" },
      },
      {
        ...STEPS.registerApp,
        pointer: { filename: "frameworks/flutter/main.dart", range: "52-53" },
      },
      {
        ...STEPS.instantiate,
        pointer: { filename: "frameworks/flutter/main.dart", range: "51-59" },
      }
    );
    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthn,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "34-40" }),
      });
    }
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "56-57" }),
      });
    }
    if (mfa === "yes") {
      steps.push({
        ...STEPS.multiFactorAuthentication,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/flutter/main.dart", range: "140" }),
      });
    }
    steps.push(
      {
        ...STEPS.triggeringLogin,
        pointer: { filename: "frameworks/flutter/main.dart", range: "141-144" },
      },
      {
        ...STEPS.triggeringLogout,
        pointer: { filename: "frameworks/flutter/main.dart", range: "127" },
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
