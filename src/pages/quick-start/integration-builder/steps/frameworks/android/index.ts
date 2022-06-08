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
    filenames.push("frameworks/android/MainActivity.kt");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "frameworks/android/MainActivity.kt", range: "7" },
      },
      {
        ...STEPS.registerApp,
        pointer:
          dynamicConstructorParams === "yes"
            ? { filename: "frameworks/android/MainActivity.kt", range: "6" }
            : { filename: "frameworks/android/MainActivity.kt", range: "48" },
      },
      {
        ...STEPS.instantiate,
        pointer:
          customAuthentication === "yes" && whitelabel === "yes"
            ? { filename: "frameworks/android/MainActivity.kt", range: "108-121" }
            : customAuthentication === "yes"
            ? { filename: "frameworks/android/MainActivity.kt", range: "108-121" }
            : whitelabel === "yes"
            ? { filename: "frameworks/android/MainActivity.kt", range: "108-121" }
            : dynamicConstructorParams
            ? { filename: "frameworks/android/MainActivity.kt", range: "108-121" }
            : { filename: "frameworks/android/MainActivity.kt", range: "108-121" },
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: { filename: "frameworks/android/MainActivity.kt", range: "43-66" },
          }
        : {
            ...STEPS.triggeringLogin,
            pointer:
              usingEmailPasswordless === "yes"
                ? { filename: "frameworks/android/MainActivity.kt", range: "43-66" }
                : { filename: "frameworks/android/MainActivity.kt", range: "43-66" },
          }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
