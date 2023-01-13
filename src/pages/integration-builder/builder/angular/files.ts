import { getInitCode, getLoginCode, getModuleImport, getOpenloginAdapter, getPackageJson, PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_APP_HTML, FILENAME_APP_TS, FILENAME_PACKAGE_JSON } from "./filenames";
import { getConstructorCodeAngular, getRPCFunctionsAngular, getRPCFunctionsButtonsAngular, getWeb3AuthStateAngular } from "./replacementCode";

export default function getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAngular = getConstructorCodeAngular(chain, whitelabel === YES, useModal === YES, web3AuthNetwork);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAngular
  );

  const InitCode = getInitCode(whitelabel === YES, useModal === YES);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TS], FILENAME_APP_TS, PLACEHOLDERS.INIT_CODE, InitCode);

  const LoginCode = getLoginCode(useModal === YES, customAuth, mfa);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TS], FILENAME_APP_TS, PLACEHOLDERS.LOGIN_CODE, LoginCode);

  const ModuleImport = getModuleImport(chain, whitelabel === YES, customAuth, evmFramework, useModal === YES);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(whitelabel === YES, customAuth, useModal === YES, mfa);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
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

  const RPCFunctionsAngular = getRPCFunctionsAngular(chain);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.RPC_FUNCTIONS,
    RPCFunctionsAngular
  );

  const RPCFunctionsButtonsAngular = getRPCFunctionsButtonsAngular(chain);
  newFiles[FILENAME_APP_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_HTML],
    FILENAME_APP_HTML,
    PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
    RPCFunctionsButtonsAngular
  );

  const Web3AuthStateAngular = getWeb3AuthStateAngular(useModal === YES);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.WEB3AUTH_STATE,
    Web3AuthStateAngular
  );
}
