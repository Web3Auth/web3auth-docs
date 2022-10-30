import { PLACEHOLDERS } from "../../commonSnippets";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeAndroid, getLoginCodeAndroid } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuthentication, mfa, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAndroid = getConstructorCodeAndroid(whitelabel === "yes", customAuthentication === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAndroid
  );

  const LoginCodeAndroid = getLoginCodeAndroid(mfa === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.ANDROID_LOGIN_CONFIG,
    LoginCodeAndroid
  );
}
