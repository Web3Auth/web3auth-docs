import { ReplaceFileAggregator, toSteps } from "../../utils";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as installationIOS from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

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
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_WEB3AUTH_PLIST = "frameworks/ios/Web3Auth.plist";
    const FILENAME_CONTENTVIEW = "frameworks/ios/ContentView.swift";
    const FILENAME_PODFILE = "frameworks/ios/Podfile";

    filenames.push(FILENAME_WEB3AUTH_PLIST);
    filenames.push(FILENAME_CONTENTVIEW);
    filenames.push(FILENAME_PODFILE);

    steps.push(
      {
        ...STEPS.installationIOS,
        pointer: replacementAggregator.highlightRange(FILENAME_PODFILE, files[FILENAME_PODFILE], "installationIOS"),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH_PLIST, files[FILENAME_WEB3AUTH_PLIST], "registerApp"),
      },
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.highlightRange(FILENAME_CONTENTVIEW, files[FILENAME_CONTENTVIEW], "instantiate"),
      },
      customAuthentication === "yes"
        ? {
            ...STEPS.loginWithJwt,
            pointer: replacementAggregator.highlightRange(FILENAME_CONTENTVIEW, files[FILENAME_CONTENTVIEW], "loginWithJwt"),
          }
        : {
            ...STEPS.triggeringLogin,
            pointer: replacementAggregator.highlightRange(FILENAME_CONTENTVIEW, files[FILENAME_CONTENTVIEW], "triggeringLogin"),
          },

      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.highlightRange(FILENAME_CONTENTVIEW, files[FILENAME_CONTENTVIEW], "getUserInfo"),
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
