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
    filenames.push("web3auth/flutter/main.dart");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "web3auth/flutter/main.dart", range: "3" },
      },
      {
        ...STEPS.registerApp,
        pointer:
          dynamicConstructorParams === "yes"
            ? { filename: "web3auth/flutter/main.dart", range: "3" }
            : { filename: "web3auth/flutter/main.dart", range: "3" },
      },
      {
        ...STEPS.instantiate,
        pointer:
          customAuthentication === "yes" && whitelabel === "yes"
            ? { filename: "web3auth/flutter/main.dart", range: "3" }
            : customAuthentication === "yes"
            ? { filename: "web3auth/flutter/main.dart", range: "3" }
            : whitelabel === "yes"
            ? { filename: "web3auth/flutter/main.dart", range: "3" }
            : dynamicConstructorParams
            ? { filename: "web3auth/flutter/main.dart", range: "3" }
            : { filename: "web3auth/flutter/main.dart", range: "3" },
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: { filename: "web3auth/flutter/main.dart", range: "3" },
          }
        : {
            ...STEPS.triggeringLogin,
            pointer:
              usingEmailPasswordless === "yes"
                ? { filename: "web3auth/flutter/main.dart", range: "3" }
                : { filename: "web3auth/flutter/main.dart", range: "3" },
          },

    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
