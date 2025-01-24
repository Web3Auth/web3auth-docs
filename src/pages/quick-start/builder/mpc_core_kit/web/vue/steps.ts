import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_PACKAGE_JSON,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_CONFIG_JS,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.socialRecoveryFactor,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Export Social Account Factor",
      ),
    },
    {
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Enable Multi Factor Authentication",
      ),
    },
    {
      ...STEPS.recoverAccount,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Recover MFA Enabled Account",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_VUE_HOME_VUE],
        "Logout",
      ),
    },
  );
}
