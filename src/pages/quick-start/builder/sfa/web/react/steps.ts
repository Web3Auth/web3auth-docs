import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.reactQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_PACKAGE_JSON,
        files[hostedFileLinks.SFA_WEB_REACT_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.reactBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_VITE_CONFIG,
        files[hostedFileLinks.SFA_WEB_REACT_VITE_CONFIG],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Logout",
      ),
    },
  );
}
