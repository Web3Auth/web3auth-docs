import { toSteps } from "../../../utils";
import * as buildingApp from "./buildingApp.mdx";
import * as configureDeepLink from "./configure-deeplink.mdx";
import * as CustomAuthentication from "./custom-authentication.mdx";
import * as evmRPCFunctions from "./evmRPCFunctions.mdx";
import * as installationAppManifest from "./install-app-manifest.mdx";
import * as installationAndroid from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as JitpackURL from "./jitpack.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./register-app.mdx";
import * as RequirementsAndroid from "./requirements.mdx";
import * as setResultURL from "./setResultURL.mdx";
import * as singleTop from "./singleTop.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  buildingApp,
  RequirementsAndroid,
  JitpackURL,
  installationAndroid,
  installationAppManifest,
  registerApp,
  configureDeepLink,
  singleTop,
  instantiate,
  setResultURL,
  triggeringLogin,
  triggeringLogout,
  whiteLabeling,
  CustomAuthentication,
  evmRPCFunctions,
  multiFactorAuthentication,
});

export default STEPS;
