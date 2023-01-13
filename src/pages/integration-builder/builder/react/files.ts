import {
  getConstructorCode,
  getInitCode,
  getLoginCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  getRPCFunctionsButtonsReact,
  getWeb3AuthStateReact,
  PLACEHOLDERS,
} from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_APP_TSX, FILENAME_PACKAGE_JSON } from "./filenames";

export default function getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCode = getConstructorCode(chain, whitelabel === YES, useModal === YES, web3AuthNetwork);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCode
  );

  const InitCode = getInitCode(whitelabel === YES, useModal === YES);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TSX], FILENAME_APP_TSX, PLACEHOLDERS.INIT_CODE, InitCode);

  const LoginCode = getLoginCode(useModal === YES, customAuth, mfa);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.LOGIN_CODE,
    LoginCode
  );

  const ModuleImport = getModuleImport(chain, whitelabel === YES, customAuth, evmFramework, useModal === YES);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(whitelabel === YES, customAuth, useModal === YES, mfa);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapter
  );

  const PackageJson = getPackageJson(chain, whitelabel === YES, customAuth, evmFramework, useModal === YES);
  newFiles[FILENAME_PACKAGE_JSON] = replacementAggregator.replaceFileVariable(
    files[FILENAME_PACKAGE_JSON],
    FILENAME_PACKAGE_JSON,
    PLACEHOLDERS.PACKAGE_JSON,
    PackageJson
  );

  const RPCFunctions = getRPCFunctions(chain);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.RPC_FUNCTIONS,
    RPCFunctions
  );

  const RPCFunctionsButtonsReact = getRPCFunctionsButtonsReact(chain);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
    RPCFunctionsButtonsReact
  );

  const Web3AuthStateReact = getWeb3AuthStateReact(useModal === YES);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.WEB3AUTH_STATE,
    Web3AuthStateReact
  );
}
