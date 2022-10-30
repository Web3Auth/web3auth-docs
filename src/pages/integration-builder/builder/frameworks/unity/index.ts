import { getLoginCode, getWeb3AuthOptions, PLACEHOLDERS } from "../../unitySnippets";
import { ReplaceFileAggregator, toSteps } from "../../utils";
import * as CustomAuthentication from "./customAuthentication.mdx";
import * as getUserInfo from "./getUserInfo.mdx";
import * as installation from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as multiFactorAuthentication from "./mfa.mdx";
import * as registerApp from "./registerApp.mdx";
import * as triggeringLogin from "./triggeringLogin.mdx";
import * as triggeringLogout from "./triggeringLogout.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installation,
  registerApp,
  instantiate,
  triggeringLogin,
  getUserInfo,
  triggeringLogout,
  whiteLabeling,
  CustomAuthentication,
  multiFactorAuthentication,
});

const unitySteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, mfa }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_WEB3AUTH = "frameworks/unity/Web3Auth.cs";
    const FILENAME_MANIFEST = "frameworks/unity/manifest.json";

    const Web3AuthOptions = getWeb3AuthOptions(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_WEB3AUTH] = replacementAggregator.replaceFileVariable(
      files[FILENAME_WEB3AUTH],
      FILENAME_WEB3AUTH,
      PLACEHOLDERS.WEB3AUTH_OPTIONS,
      Web3AuthOptions
    );

    const LoginCode = getLoginCode(mfa === "yes");
    newFiles[FILENAME_WEB3AUTH] = replacementAggregator.replaceFileVariable(
      files[FILENAME_WEB3AUTH],
      FILENAME_WEB3AUTH,
      PLACEHOLDERS.LOGIN_CONFIG,
      LoginCode
    );

    filenames.push(FILENAME_WEB3AUTH);
    filenames.push(FILENAME_MANIFEST);

    steps.push(
      {
        ...STEPS.installation,
        pointer: replacementAggregator.highlightRange(FILENAME_MANIFEST, files[FILENAME_MANIFEST], "installation"),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "registerApp"),
      },
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "instantiate"),
      }
    );
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "whiteLabeling"),
      });
    }
    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.CustomAuthentication,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "CustomAuthentication"),
      });
    }
    if (mfa === "yes") {
      steps.push({
        ...STEPS.multiFactorAuthentication,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "multiFactorAuthentication"),
      });
    }
    steps.push(
      {
        ...STEPS.triggeringLogin,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "triggeringLogin"),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "getUserInfo"),
      },
      {
        ...STEPS.triggeringLogout,
        pointer: replacementAggregator.highlightRange(FILENAME_WEB3AUTH, files[FILENAME_WEB3AUTH], "triggeringLogout"),
      }
    );
    return { filenames, files, steps };
  },
};

export default unitySteps;
