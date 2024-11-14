import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.rnQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.requirementsAndroid,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_BUILD_GRADLE,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_BUILD_GRADLE],
        "Requirements Android",
      ),
    },
    {
      ...STEPS.requirementsIOS,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_PODFILE,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_PODFILE],
        "Requirements iOS",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_PACKAGE_JSON,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.reactNativeBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_METRO_CONFIG_JS,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_METRO_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
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
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Blockchain Calls",
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
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Enable Multi Factor Authentication",
      ),
    },
    {
      ...STEPS.recoverAccount,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Recover MFA Enabled Account",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_REACT_NATIVE_APP_TSX],
        "Logout",
      ),
    },
  );
}
