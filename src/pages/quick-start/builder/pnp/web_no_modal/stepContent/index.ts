import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initializePnPNoModal.mdx";
import * as chainConfig from "../../../../commonSteps/chainConfig.mdx";
import * as installation from "./installationPnPNoModal.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./noModalAngularQuickStart.mdx";
import * as htmlQuickStart from "./noModalHTMLQuickStart.mdx";
import * as nextQuickStart from "./noModalNextQuickStart.mdx";
import * as reactQuickStart from "./noModalReactQuickStart.mdx";
import * as reactHooksQuickStart from "./noModalReactHooksQuickStart.mdx";
import * as vueQuickStart from "./noModalVueQuickStart.mdx";
import * as vueComposablesQuickStart from "./noModalVueComposablesQuickStart.mdx";
import * as instantiate from "./instantiatePnPNoModal.mdx";
import * as setupWeb3AuthProvider from "./setupWeb3AuthProvider.mdx";
import * as configureExternalWallets from "./configureExternalWallets.mdx";

const STEPS = toSteps({
  reactQuickStart,
  installation,
  reactBundlerIssues,
  registerApp,
  chainConfig,
  initialization,
  htmlQuickStart,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
  nextQuickStart,
  angularQuickStart,
  vueQuickStart,
  vueBundlerIssues,
  angularBundlerIssues,
  reactHooksQuickStart,
  vueComposablesQuickStart,
  instantiate,
  setupWeb3AuthProvider,
  configureExternalWallets,
});

export default STEPS;
