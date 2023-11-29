import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initializePnPNoModal.mdx";
import * as installation from "./installationPnPNoModal.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./noModalAngularQuickStart.mdx";
import * as nextQuickStart from "./noModalNextQuickStart.mdx";
import * as reactQuickStart from "./noModalReactQuickStart.mdx";
import * as vueQuickStart from "./noModalVueQuickStart.mdx";

const STEPS = toSteps({
  reactQuickStart,
  installation,
  reactBundlerIssues,
  registerApp,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
  nextQuickStart,
  angularQuickStart,
  vueQuickStart,
  vueBundlerIssues,
  angularBundlerIssues,
});

export default STEPS;
