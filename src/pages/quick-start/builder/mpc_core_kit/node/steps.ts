import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.nodeQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_PACKAGE_JSON,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.socialRecoveryFactor,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Export Social Account Factor",
      ),
    },
    {
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Enable Multi Factor Authentication",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS,
        files[hostedFileLinks.MPC_CORE_KIT_NODE_INDEX_JS],
        "Logout",
      ),
    },
  );
}
