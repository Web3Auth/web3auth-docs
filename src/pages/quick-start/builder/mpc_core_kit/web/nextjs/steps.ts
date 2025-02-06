import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.nextQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PACKAGE_JSON,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.socialRecoveryFactor,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Export Social Account Factor",
      ),
    },
    {
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Enable Multi Factor Authentication",
      ),
    },
    {
      ...STEPS.recoverAccount,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Recover MFA Enabled Account",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX,
        files[hostedFileLinks.MPC_CORE_KIT_WEB_NEXT_PAGE_TSX],
        "Logout",
      ),
    },
  );
}
