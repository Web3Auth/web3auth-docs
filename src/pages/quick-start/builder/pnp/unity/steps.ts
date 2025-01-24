import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.unityQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_MANIFEST_JSON,
        files[hostedFileLinks.PNP_UNITY_MANIFEST_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.androidCustomTabs,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_ANDROID_MANIFEST,
        files[hostedFileLinks.PNP_UNITY_ANDROID_MANIFEST],
        "Android Custom Tabs",
      ),
    },
    {
      ...STEPS.configureDeepLink,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_ANDROID_MANIFEST,
        files[hostedFileLinks.PNP_UNITY_ANDROID_MANIFEST],
        "Configure Deep Link",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Get User Information",
      ),
    },
    {
      ...STEPS.enableMFA,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Enable MFA",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Logout",
      ),
    },
  );
}
