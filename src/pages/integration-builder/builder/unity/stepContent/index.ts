import { toSteps } from "../../../utils";
import * as CustomAuthentication from "./customAuth.mdx";
import * as getUserInfo from "./getUserInfo.mdx";
import * as installation from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./registerApp.mdx";
import * as triggeringLogin from "./triggeringLogin.mdx";
import * as triggeringLogout from "./triggeringLogout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installation,
  registerApp,
  instantiate,
  triggeringLogin,
  getUserInfo,
  triggeringLogout,
  whiteLabeling,
  CustomAuthentication,
  multiFactorAuthentication,
});

export default STEPS;
