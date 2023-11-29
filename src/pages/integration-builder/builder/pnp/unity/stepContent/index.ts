import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as blockchainCalls from "./blockchainCallsUnity.mdx";
import * as initialization from "./initializeUnity.mdx";
import * as installation from "./installationUnity.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as unityQuickStart from "./unityQuickStart.mdx";

const STEPS = toSteps({
  unityQuickStart,
  installation,
  registerApp,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
});

export default STEPS;
