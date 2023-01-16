import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_APP_TSX, FILENAME_ETHERS_JS } from "./filenames";
import { getConstructorCodeRN, getEVMProvider, getLoginCodeRN, getModuleImportRN, getResolvedRedirectUrl } from "./replacementCode";

export default function getUpdatedFiles(chain, customAuth, mfa, rnMode, whitelabel, web3AuthNetwork, files, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeRN = getConstructorCodeRN(whitelabel === YES, customAuth, web3AuthNetwork);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeRN
  );

  const EVMProvider = getEVMProvider(chain);
  newFiles[FILENAME_ETHERS_JS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_ETHERS_JS],
    FILENAME_ETHERS_JS,
    PLACEHOLDERS.EVM_PROVIDER,
    EVMProvider
  );

  const LoginCodeRN = getLoginCodeRN(customAuth, mfa);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.LOGIN_CODE,
    LoginCodeRN
  );

  const ModuleImportRN = getModuleImportRN(rnMode);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImportRN
  );

  const ResolvedRedirectUrl = getResolvedRedirectUrl(rnMode);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.RN_RESOLVED_REDIRECT_URL,
    ResolvedRedirectUrl
  );
}
