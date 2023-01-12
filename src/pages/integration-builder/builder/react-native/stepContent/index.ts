import { toSteps } from "../../../utils";
import * as buildingApp from "./config/buildingApp.mdx";
import * as configureDeeplinkAndroid from "./config/configureDeeplinkAndroid.mdx";
import * as configureDeeplinkiOS from "./config/configureDeeplinkiOS.mdx";
import * as buildingAppExpo from "./config/expo/buildingAppExpo.mdx";
import * as configureDeeplinkExpo from "./config/expo/configureDeeplinkExpo.mdx";
import * as installWebBrowserExpo from "./config/expo/installWebBrowserExpo.mdx";
import * as redirectUrlExpo from "./config/expo/redirectUrlExpo.mdx";
import * as requirementsExpo from "./config/expo/requirementsExpo.mdx";
import * as installation from "./config/installation.mdx";
import * as installWebBrowser from "./config/installWebBrowser.mdx";
import * as redirectUrl from "./config/redirectUrl.mdx";
import * as requirements from "./config/requirements.mdx";
import * as customAuth from "./customAuth.mdx";
import * as evmRPCFunctions from "./evmRPCFunctions.mdx";
import * as instantiateSDK from "./instantiateSDK.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as mfa from "./mfa.mdx";
import * as registerApp from "./registerApp.mdx";
import * as whitelabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  buildingApp,
  buildingAppExpo,
  configureDeeplinkAndroid,
  configureDeeplinkiOS,
  configureDeeplinkExpo,
  installation,
  installWebBrowser,
  installWebBrowserExpo,
  redirectUrl,
  redirectUrlExpo,
  registerApp,
  requirements,
  requirementsExpo,
  customAuth,
  evmRPCFunctions,
  instantiateSDK,
  login,
  logout,
  mfa,
  whitelabeling,
});

export default STEPS;
