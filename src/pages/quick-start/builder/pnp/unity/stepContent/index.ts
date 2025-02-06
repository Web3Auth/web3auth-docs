import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as enableMFA from "../../../../commonSteps/enableMFA.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as blockchainCalls from "./blockchainCallsUnity.mdx";
import * as initialization from "./initializeUnity.mdx";
import * as installation from "./installationUnity.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as unityQuickStart from "./unityQuickStart.mdx";
import * as androidCustomTabs from "./androidCustomTabs.mdx";
import * as configureDeepLink from "./configureDeepLink.mdx";

const STEPS = toSteps({
  unityQuickStart,
  installation,
  registerApp,
  enableMFA,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
  androidCustomTabs,
  configureDeepLink,
});

export default STEPS;
