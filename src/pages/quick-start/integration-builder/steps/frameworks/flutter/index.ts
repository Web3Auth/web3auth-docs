import { replaceFileVariable, toSteps } from "../../../utils";

import * as installationAndroid from "./installation.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";

const STEPS = toSteps({
  installationAndroid,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  whiteLabeling,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, dynamicConstructorParams, usingEmailPasswordless }) {
    filenames.push("frameworks/flutter/main.dart");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "frameworks/flutter/main.dart", range: "1" },
      },
      {
        ...STEPS.registerApp,
        pointer:
          dynamicConstructorParams === "yes"
            ? { filename: "frameworks/flutter/main.dart", range: "1" }
            : { filename: "frameworks/flutter/main.dart", range: "1" },
      },
      {
        ...STEPS.instantiate,
        pointer:
          customAuthentication === "yes" && whitelabel === "yes"
            ? { filename: "frameworks/flutter/main.dart", range: "29-40" }
            : customAuthentication === "yes"
            ? { filename: "frameworks/flutter/main.dart", range: "29-40" }
            : whitelabel === "yes"
            ? { filename: "frameworks/flutter/main.dart", range: "29-40" }
            : dynamicConstructorParams
            ? { filename: "frameworks/flutter/main.dart", range: "29-40" }
            : { filename: "frameworks/flutter/main.dart", range: "29-40" },
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: { filename: "frameworks/flutter/main.dart", range: "85-100" },
          }
        : {
            ...STEPS.triggeringLogin,
            pointer:
              usingEmailPasswordless === "yes"
                ? { filename: "frameworks/flutter/main.dart", range: "85-100" }
                : { filename: "frameworks/flutter/main.dart", range: "85-100" },
          }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
