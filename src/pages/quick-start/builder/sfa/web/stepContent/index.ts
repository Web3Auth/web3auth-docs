import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as authProviderLogin from "../../../../commonSteps/authProviderLogin.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as createVerifier from "../../../../commonSteps/createVerifier.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initializeSFAWeb.mdx";
import * as installation from "./installationSFAWeb.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./sfaWebAngularQuickStart.mdx";
import * as htmlQuickStart from "./sfaWebHTMLQuickStart.mdx";
import * as nextQuickStart from "./sfaWebNextQuickStart.mdx";
import * as reactQuickStart from "./sfaWebReactQuickStart.mdx";
import * as vueQuickStart from "./sfaWebVueQuickStart.mdx";
import * as chainConfig from "../../../../commonSteps/chainConfig.mdx";

const STEPS = toSteps({
  reactQuickStart,
  createVerifier,
  authProviderLogin,
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
  htmlQuickStart,
  chainConfig,
});

export default STEPS;
