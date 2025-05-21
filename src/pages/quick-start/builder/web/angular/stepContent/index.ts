import * as angularBundlerIssues from "./angularBundlerIssues.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as installation from "../../../../commonSteps/installationWeb.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initialize.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./angularQuickStart.mdx";
import * as instantiate from "./instantiate.mdx";

const STEPS = toSteps({
  installation,
  angularQuickStart,
  angularBundlerIssues,
  registerApp,
  initialization,
  login,
  blockchainCalls,
  logout,
  instantiate,
});

export default STEPS;
