import { ReplaceFileAggregator, replaceFileVariable, toSteps } from "../../../utils";

import * as installation from "./installation.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";
import * as snippets from "./snippets";
import { PLACEHOLDERS } from "../../../commonSnippets";

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
    const ModuleImport = snippets.getModuleImport(mode);
    const RNResolvedRedirectUrl = snippets.getRNResolvedRedirectUrl(mode);
    const ConstructorCode = snippets.getConstructorCode(whitelabel === "yes", customAuthentication === "yes");
    const InitCode = snippets.getInitCode(customAuthentication === "yes", usingEmailPasswordless === "yes");

    const FILENAME_APP_TSX = "frameworks/react-native/App.tsx";

    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.RN_RESOLVED_REDIRECT_URL,
      RNResolvedRedirectUrl
    );

    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.INIT_CODE,
      InitCode
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
