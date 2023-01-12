import * as customAuthCore from "../../../commonSteps/core/customAuthCore.mdx";
import * as initializeCore from "../../../commonSteps/core/initializeCore.mdx";
import * as loginCore from "../../../commonSteps/core/loginCore.mdx";
import * as customAuth from "../../../commonSteps/customAuth.mdx";
import * as getUserInfo from "../../../commonSteps/getUserInfo.mdx";
import * as importModules from "../../../commonSteps/importModules/importModules.mdx";
import * as importModulesCore from "../../../commonSteps/importModules/importModulesCore.mdx";
import * as importModulesCustom from "../../../commonSteps/importModules/importModulesCustom.mdx";
import * as importModulesCustomCore from "../../../commonSteps/importModules/importModulesCustomCore.mdx";
import * as initialize from "../../../commonSteps/initialize.mdx";
import * as installation from "../../../commonSteps/installation/installation.mdx";
import * as installationCore from "../../../commonSteps/installation/installationCore.mdx";
import * as installationCustom from "../../../commonSteps/installation/installationCustom.mdx";
import * as installationCustomCore from "../../../commonSteps/installation/installationCustomCore.mdx";
import * as installationEthers from "../../../commonSteps/installation/installationEthers.mdx";
import * as installationSolana from "../../../commonSteps/installation/installationSolana.mdx";
import * as installationStarkEx from "../../../commonSteps/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../../../commonSteps/installation/installationStarkNet.mdx";
import * as installationTezos from "../../../commonSteps/installation/installationTezos.mdx";
import * as installationWeb3 from "../../../commonSteps/installation/installationWeb3.mdx";
import * as instantiateSDK from "../../../commonSteps/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../../../commonSteps/instantiateSDKWhitelabeled.mdx";
import * as login from "../../../commonSteps/login.mdx";
import * as logout from "../../../commonSteps/logout.mdx";
import * as mfa from "../../../commonSteps/mfa.mdx";
import * as registerApp from "../../../commonSteps/registerApp.mdx";
import * as evmRPCFunctions from "../../../commonSteps/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../../../commonSteps/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../../../commonSteps/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../../../commonSteps/rpcFunctions/starkNetRPCFunctions.mdx";
import * as tezosRPCFunctions from "../../../commonSteps/rpcFunctions/tezosRPCFunctions.mdx";
import * as whiteLabeling from "../../../commonSteps/whitelabeling.mdx";
import { toSteps } from "../../../utils";
import * as buildingApp from "./buildingApp.mdx";
import * as webpackIssues from "./webpackIssues.mdx";

const STEPS = toSteps({
  buildingApp,
  mfa,
  customAuthCore,
  initializeCore,
  loginCore,
  customAuth,
  webpackIssues,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
  installationTezos,
  installationEthers,
  installationWeb3,
  installation,
  installationCore,
  installationCustom,
  installationCustomCore,
  importModules,
  importModulesCore,
  importModulesCustom,
  importModulesCustomCore,
  registerApp,
  instantiateSDK,
  instantiateSDKWhitelabeled,
  whiteLabeling,
  initialize,
  login,
  getUserInfo,
  evmRPCFunctions,
  solanaRPCFunctions,
  starkExRPCFunctions,
  starkNetRPCFunctions,
  tezosRPCFunctions,
  logout,
});

export default STEPS;
