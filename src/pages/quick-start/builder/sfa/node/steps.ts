import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.nodeQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_PACKAGE_JSON,
        files[hostedFileLinks.SFA_NODE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "Verifier Creation",
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
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_NODE_INDEX_JS,
        files[hostedFileLinks.SFA_NODE_INDEX_JS],
        "Login",
      ),
    },
  );
}
