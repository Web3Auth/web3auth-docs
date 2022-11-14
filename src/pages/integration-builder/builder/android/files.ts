import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeAndroid, getLoginCodeAndroid } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, mfa, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAndroid = getConstructorCodeAndroid(whitelabel === YES, customAuth === YES);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAndroid
  );

  const LoginCodeAndroid = getLoginCodeAndroid(mfa === YES);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.ANDROID_LOGIN_CONFIG,
    LoginCodeAndroid
  );
}
