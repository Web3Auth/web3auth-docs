import { ReplaceFileAggregator, replaceFileVariable, toSteps } from "../../../utils";

import * as installation from "./installation.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";
import { PLACEHOLDERS } from "../../../commonSnippets";
import { getConstructorCodeRN, getInitCodeRN, getModuleImportRN, getResolvedRedirectUrl } from "../../../reactNativeSnippets";

const STEPS = toSteps({
  installation,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  whiteLabeling,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, usingEmailPasswordless, mode }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_APP_TSX = "frameworks/react-native/App.tsx";

    const ConstructorCodeRN = getConstructorCodeRN(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeRN
    );

    const InitCodeRN = getInitCodeRN(customAuthentication === "yes", usingEmailPasswordless === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.INIT_CODE,
      InitCodeRN
    );

    const ModuleImportRN = getModuleImportRN(mode);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImportRN
    );

    const ResolvedRedirectUrl = getResolvedRedirectUrl(mode);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.RN_RESOLVED_REDIRECT_URL,
      ResolvedRedirectUrl
    );

    filenames.push(FILENAME_APP_TSX);

    steps.push(
      {
        ...STEPS.installation,
      },
      {
        ...STEPS.registerApp,
      },
      {
        ...STEPS.instantiate,
      },
      {
        ...STEPS.triggeringLogin,
      },
      {
        ...STEPS.loginWithJwt,
      },
      {
        ...STEPS.whiteLabeling,
      }
    );

    return { filenames, files, steps };
  },
};

export default reactSteps;
