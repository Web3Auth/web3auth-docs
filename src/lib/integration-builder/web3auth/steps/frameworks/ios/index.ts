import { replaceFileVariable, toSteps } from "../../../../utils";

import * as installationIOS from "./installation.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";

const STEPS = toSteps({
  installationIOS,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  getUserInfo,
  whiteLabeling,
});

// For iOS SDK, dynamicConstructorParams must be "yes" if whitelabel is "yes" or customAuthentication == "yes".
// Will also need the ability to have whitelabel and customAuthentication being "yes" in the same time as well.

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, dynamicConstructorParams, usingEmailPasswordless }) {
    filenames.push("web3auth/ios/Web3Auth.plist");
    filenames.push("web3auth/ios/ContentView.swift");
    filenames.push("web3auth/ios/Podfile");
    steps.push(
      {
        ...STEPS.installationIOS,
        pointer: { filename: "web3auth/ios/Podfile", range: "7" },
      },
      {
        ...STEPS.registerApp,
        pointer:
          dynamicConstructorParams === "yes"
            ? { filename: "web3auth/ios/Web3Auth.plist", range: "6" }
            : { filename: "web3auth/ios/ContentView.swift", range: "48" },
      },
      {
        ...STEPS.instantiate,
        pointer:
          customAuthentication === "yes" && whitelabel === "yes"
            ? { filename: "web3auth/ios/ContentView.swift", range: "206-224" }
            : customAuthentication === "yes"
            ? { filename: "web3auth/ios/ContentView.swift", range: "154-167" }
            : whitelabel === "yes"
            ? { filename: "web3auth/ios/ContentView.swift", range: "126-136" }
            : dynamicConstructorParams
            ? { filename: "web3auth/ios/ContentView.swift", range: "46-51" }
            : { filename: "web3auth/ios/ContentView.swift", range: "10" },
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: { filename: "web3auth/ios/ContentView.swift", range: "168-189" },
          }
        : {
            ...STEPS.triggeringLogin,
            pointer:
              usingEmailPasswordless === "yes"
                ? { filename: "web3auth/ios/ContentView.swift", range: "88-109" }
                : { filename: "web3auth/ios/ContentView.swift", range: "11" },
          },
      {
        ...STEPS.getUserInfo,
        pointer: { filename: "web3auth/ios/ContentView.swift", range: "270-273" },
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
