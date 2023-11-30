import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as authProviderLogin from "../../../../commonSteps/authProviderLogin.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as createVerifier from "../../../../commonSteps/createVerifier.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as enableMFA from "./enableMFA.mdx";
import * as initialization from "./initializeMPCCK.mdx";
import * as installation from "./installationMPCCK.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./mpcckAngularQuickStart.mdx";
import * as nextQuickStart from "./mpcckNextQuickStart.mdx";
import * as reactQuickStart from "./mpcckReactQuickStart.mdx";
import * as vueQuickStart from "./mpcckVueQuickStart.mdx";
import * as recoverAccount from "./recoverAccount.mdx";

const STEPS = toSteps({
  recoverAccount,
  reactQuickStart,
  installation,
  reactBundlerIssues,
  registerApp,
  enableMFA,
  createVerifier,
  authProviderLogin,
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
