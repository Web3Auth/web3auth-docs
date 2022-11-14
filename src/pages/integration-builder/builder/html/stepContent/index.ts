import * as customAuthStep from "../../../commonSteps/customAuthStep.mdx";
import * as getUserInfo from "../../../commonSteps/getUserInfo.mdx";
import * as importModules from "../../../commonSteps/importModules.mdx";
import * as importModulesCustom from "../../../commonSteps/importModulesCustom.mdx";
import * as initialize from "../../../commonSteps/initialize.mdx";
import * as installationEthers from "../../../commonSteps/installation/installationEthers.mdx";
import * as installationSolana from "../../../commonSteps/installation/installationSolana.mdx";
import * as installationStarkEx from "../../../commonSteps/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../../../commonSteps/installation/installationStarkNet.mdx";
import * as installationWeb3 from "../../../commonSteps/installation/installationWeb3.mdx";
import * as instantiateSDK from "../../../commonSteps/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../../../commonSteps/instantiateSDKWhitelabeled.mdx";
import * as login from "../../../commonSteps/login.mdx";
import * as logout from "../../../commonSteps/logout.mdx";
import * as registerApp from "../../../commonSteps/registerApp.mdx";
import * as evmRPCFunctions from "../../../commonSteps/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../../../commonSteps/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../../../commonSteps/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../../../commonSteps/rpcFunctions/starkNetRPCFunctions.mdx";
import * as whiteLabeling from "../../../commonSteps/whitelabeling.mdx";
import { toSteps } from "../../../utils";
import * as installation from "./installation.mdx";
import * as installationCustom from "./installationCustom.mdx";
import * as usingQuickStart from "./usingQuickStart.mdx";

const STEPS = toSteps({
  usingQuickStart,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
  installationEthers,
  installationWeb3,
  installation,
  installationCustom,
  importModules,
  importModulesCustom,
  registerApp,
  instantiateSDK,
  instantiateSDKWhitelabeled,
  whiteLabeling,
  customAuthStep,
  initialize,
  login,
  getUserInfo,
  evmRPCFunctions,
  solanaRPCFunctions,
  starkExRPCFunctions,
  starkNetRPCFunctions,
  logout,
});

export default STEPS;
