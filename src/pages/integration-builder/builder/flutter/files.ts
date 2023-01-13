import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeFlutter, getEVMProvider, getLoginCodeFlutter } from "./replacementCode";

export default function getUpdatedFiles(chain, files, whitelabel, customAuth, mfa, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeFlutter = getConstructorCodeFlutter(whitelabel === YES, customAuth, web3AuthNetwork);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeFlutter
  );

  const LoginCodeFlutter = getLoginCodeFlutter(customAuth, mfa);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.FLUTTER_LOGIN_CONFIG,
    LoginCodeFlutter
  );

  const EVMProvider = getEVMProvider(chain);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.EVM_PROVIDER,
    EVMProvider
  );
}
