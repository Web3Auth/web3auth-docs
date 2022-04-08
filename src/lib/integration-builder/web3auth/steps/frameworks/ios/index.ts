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

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    filenames.push("web3auth/ios/Web3Auth.plist");
    filenames.push("web3auth/ios/ContentView.swift");
    steps.push(
      {
        ...STEPS.installationIOS,
      },
      {
        ...STEPS.registerApp,
      },
      {
        ...STEPS.instantiate,
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
          }
        : {
            ...STEPS.triggeringLogin,
          },
      {
        ...STEPS.getUserInfo,
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
