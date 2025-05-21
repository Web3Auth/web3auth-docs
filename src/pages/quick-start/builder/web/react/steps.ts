import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.reactQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_PACKAGE_JSON,
        files[hostedFileLinks.REACT_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.reactBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_INDEX_HTML,
        files[hostedFileLinks.REACT_INDEX_HTML],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.config,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.REACT_WEB3AUTHCONTEXT_TSX],
        "Config",
      ),
    },
    {
      ...STEPS.setupWeb3AuthProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_MAIN_TSX,
        files[hostedFileLinks.REACT_MAIN_TSX],
        "Setup Web3Auth Provider",
      ),
    },
    {
      ...STEPS.setupWagmiProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_MAIN_TSX,
        files[hostedFileLinks.REACT_MAIN_TSX],
        "Setup Wagmi Provider",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_APP_TSX,
        files[hostedFileLinks.REACT_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.wagmiCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_APP_TSX,
        files[hostedFileLinks.REACT_APP_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.REACT_APP_TSX,
        files[hostedFileLinks.REACT_APP_TSX],
        "Logout",
      ),
    },
  );
}
