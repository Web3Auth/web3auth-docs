import * as hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_PACKAGE_JSON,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_CONFIG_JS,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX],
        "Enable Multi Factor Authentication",
      ),
    },
    {
      ...STEPS.socialRecoveryFactor,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Export Social Account Factor",
      ),
    },
    {
      ...STEPS.recoverAccount,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_APP_TSX],
        "Recover MFA Enabled Account",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_VUE_HOME_VUE],
        "Logout",
      ),
    },
  );
}
