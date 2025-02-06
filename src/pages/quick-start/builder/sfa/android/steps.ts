import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.androidQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT,
        files[hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT],
        "Quick Start",
      ),
    },
    {
      ...STEPS.requirements,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_BUILD_GRADLE,
        files[hostedFileLinks.SFA_ANDROID_BUILD_GRADLE],
        "Requirements",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_BUILD_GRADLE,
        files[hostedFileLinks.SFA_ANDROID_BUILD_GRADLE],
        "Installation",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT,
        files[hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT,
        files[hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT],
        "Initialize Web3Auth SFA",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT,
        files[hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT,
        files[hostedFileLinks.SFA_ANDROID_MAINACTIVITY_KT],
        "Get Key",
      ),
    },
  );
}
