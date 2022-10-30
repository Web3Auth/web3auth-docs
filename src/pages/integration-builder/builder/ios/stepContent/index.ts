import { toSteps } from "../../../utils";
import * as getUserInfo from "./get-user-info.mdx";
import * as installationIOS from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installationIOS,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  getUserInfo,
  whiteLabeling,
});

export default STEPS;
