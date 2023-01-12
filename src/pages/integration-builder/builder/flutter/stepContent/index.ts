import { toSteps } from "../../../utils";
import * as buildingApp from "./buildingApp.mdx";
import * as customAuthn from "./custom-authentication.mdx";
import * as evmRPCFunctions from "./evmRPCFunctions.mdx";
import * as installationFlutter from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as RequirementsAndroid from "./requirements-android.mdx";
import * as RequirementsIOS from "./requirements-ios.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  buildingApp,
  installationFlutter,
  registerApp,
  instantiate,
  triggeringLogin,
  triggeringLogout,
  loginWithJwt,
  whiteLabeling,
  customAuthn,
  multiFactorAuthentication,
  evmRPCFunctions,
  RequirementsAndroid,
  RequirementsIOS,
});

export default STEPS;
