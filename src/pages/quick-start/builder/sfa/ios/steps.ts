import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.iOSQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Installation",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Initialize Web3Auth SFA",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.SFA_IOS_VIEWMODEL_SWIFT],
        "Get Key",
      ),
    },
  );
}
