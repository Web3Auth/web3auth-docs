import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeAndroid, getEVMProvider, getLoginCodeAndroid } from "./replacementCode";

export default function getUpdatedFiles(chain, files, whitelabel, customAuth, mfa, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAndroid = getConstructorCodeAndroid(whitelabel === YES, customAuth, web3AuthNetwork);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAndroid
  );

  const LoginCodeAndroid = getLoginCodeAndroid(customAuth, mfa);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.ANDROID_LOGIN_CONFIG,
    LoginCodeAndroid
  );

  const EVMProvider = getEVMProvider(chain);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.EVM_PROVIDER,
    EVMProvider
  );
}
