import { toSteps } from "../../../utils";
import * as whiteLabeling from "../../common/whitelabeling.mdx";
import * as customAuthn from "./custom-authentication.mdx";
import * as installationFlutter from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";

const STEPS = toSteps({
  installationFlutter,
  registerApp,
  instantiate,
  triggeringLogin,
  triggeringLogout,
  loginWithJwt,
  whiteLabeling,
  customAuthn,
  multiFactorAuthentication,
});

export default STEPS;
