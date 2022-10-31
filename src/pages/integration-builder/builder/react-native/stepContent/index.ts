import { toSteps } from "../../../utils";
import * as installation from "./installation.mdx";
import * as installWebBrowser from "./installWebBrowser.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as platformSetup from "./platform-setup.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installation,
  installWebBrowser,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  whiteLabeling,
  platformSetup,
});

export default STEPS;
