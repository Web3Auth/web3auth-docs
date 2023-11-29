import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactNativeBundlerIssues from "../../../../commonSteps/reactNativeBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as blockchainCalls from "./blockchainCallsReactNative.mdx";
import * as initialization from "./initializeReactNative.mdx";
import * as installation from "./installationReactNative.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as rnQuickStart from "./rnQuickStart.mdx";

const STEPS = toSteps({
  rnQuickStart,
  reactNativeBundlerIssues,
  installation,
  registerApp,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
});

export default STEPS;
