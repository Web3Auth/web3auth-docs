import { replaceFileVariable, toSteps } from "../../../../utils";

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
    filenames.push("web3auth/android/MainActivity.kt");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "web3auth/android/MainActivity.kt", range: "7" },
      },
      {
        ...STEPS.registerApp,
        pointer:
          dynamicConstructorParams === "yes"
            ? { filename: "web3auth/android/MainActivity.kt", range: "6" }
            : { filename: "web3auth/android/MainActivity.kt", range: "48" },
      },
      {
        ...STEPS.instantiate,
        pointer:
          customAuthentication === "yes" && whitelabel === "yes"
            ? { filename: "web3auth/android/MainActivity.kt", range: "108-121" }
            : customAuthentication === "yes"
            ? { filename: "web3auth/android/MainActivity.kt", range: "108-121" }
            : whitelabel === "yes"
            ? { filename: "web3auth/android/MainActivity.kt", range: "108-121" }
            : dynamicConstructorParams
            ? { filename: "web3auth/android/MainActivity.kt", range: "108-121" }
            : { filename: "web3auth/android/MainActivity.kt", range: "108-121" },
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: { filename: "web3auth/android/MainActivity.kt", range: "43-66" },
          }
        : {
            ...STEPS.triggeringLogin,
            pointer:
              usingEmailPasswordless === "yes"
                ? { filename: "web3auth/android/MainActivity.kt", range: "43-66" }
                : { filename: "web3auth/android/MainActivity.kt", range: "43-66" },
          },

    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
