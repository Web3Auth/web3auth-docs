import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_MAIN, FILENAME_WEB3RPC } from "./filenames";
import { getConstructorCodeIOS, getEVMProvider, getLoginCodeIOS } from "./replacementCode";

export default function getUpdatedFiles(chain, files, whitelabel, customAuth, mfa, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeIOS = getConstructorCodeIOS(whitelabel === YES, customAuth, web3AuthNetwork);
  newFiles[FILENAME_MAIN] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAIN],
    FILENAME_MAIN,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeIOS
  );

  const LoginCodeIOS = getLoginCodeIOS(customAuth, mfa);
  newFiles[FILENAME_MAIN] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAIN],
    FILENAME_MAIN,
    PLACEHOLDERS.IOS_LOGIN_CONFIG,
    LoginCodeIOS
  );

  const EVMProvider = getEVMProvider(chain);
  newFiles[FILENAME_WEB3RPC] = replacementAggregator.replaceFileVariable(
    files[FILENAME_WEB3RPC],
    FILENAME_WEB3RPC,
    PLACEHOLDERS.EVM_PROVIDER,
    EVMProvider
  );
}
