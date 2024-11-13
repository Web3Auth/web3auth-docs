import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.rnQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.requirementsAndroid,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_BUILD_GRADLE,
        files[hostedFileLinks.SFA_REACT_NATIVE_BUILD_GRADLE],
        "Requirements Android",
      ),
    },
    {
      ...STEPS.requirementsIOS,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_PODFILE,
        files[hostedFileLinks.SFA_REACT_NATIVE_PODFILE],
        "Requirements iOS",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_PACKAGE_JSON,
        files[hostedFileLinks.SFA_REACT_NATIVE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.reactNativeBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_METRO_CONFIG_JS,
        files[hostedFileLinks.SFA_REACT_NATIVE_METRO_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Chain Config",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_REACT_NATIVE_APP_TSX,
        files[hostedFileLinks.SFA_REACT_NATIVE_APP_TSX],
        "Logout",
      ),
    },
  );
}
