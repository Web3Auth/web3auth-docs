import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initializePnPModal.mdx";
import * as chainConfig from "./chainConfigPnPModal.mdx";
import * as installation from "./installationPnPModal.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./modalAngularQuickStart.mdx";
import * as htmlQuickStart from "./modalHTMLQuickStart.mdx";
import * as nextQuickStart from "./modalNextQuickStart.mdx";
import * as reactQuickStart from "./modalReactQuickStart.mdx";
import * as vueQuickStart from "./modalVueQuickStart.mdx";
import * as reactHooksQuickStart from "./modalReactHooksQuickStart.mdx";
import * as vueComposablesQuickStart from "./modalVueComposablesQuickStart.mdx";
import * as instantiate from "./instantiatePnPModal.mdx";
import * as setupWeb3AuthProvider from "./setupWeb3AuthProvider.mdx";
import * as configureExternalWallets from "./configureExternalWallets.mdx";

const STEPS = toSteps({
  reactQuickStart,
  reactHooksQuickStart,
  installation,
  reactBundlerIssues,
  registerApp,
  initialization,
  chainConfig,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
  nextQuickStart,
  angularQuickStart,
  vueQuickStart,
  vueComposablesQuickStart,
  htmlQuickStart,
  vueBundlerIssues,
  instantiate,
  angularBundlerIssues,
  setupWeb3AuthProvider,
  configureExternalWallets,
});

export default STEPS;
