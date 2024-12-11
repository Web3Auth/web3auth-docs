import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.reactQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_PACKAGE_JSON,
        files[hostedFileLinks.NO_MODAL_REACT_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.reactBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_VITE_CONFIG,
        files[hostedFileLinks.NO_MODAL_REACT_VITE_CONFIG],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.configureExternalWallets,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Configuring External Wallets",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_REACT_APP_TSX,
        files[hostedFileLinks.NO_MODAL_REACT_APP_TSX],
        "Logout",
      ),
    },
  );
}
