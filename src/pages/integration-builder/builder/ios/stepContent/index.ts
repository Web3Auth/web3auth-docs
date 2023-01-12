import { toSteps } from "../../../utils";
import * as buildingApp from "./buildingApp.mdx";
import * as CustomAuthentication from "./custom-authentication.mdx";
import * as evmRPCFunctions from "./evmRPCFunctions.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as installationIOS from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as RequirementsIOS from "./requirements.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  buildingApp,
  RequirementsIOS,
  installationIOS,
  registerApp,
  instantiate,
  triggeringLogin,
  triggeringLogout,
  whiteLabeling,
  CustomAuthentication,
  evmRPCFunctions,
  multiFactorAuthentication,
});

export default STEPS;
