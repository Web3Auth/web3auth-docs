import {
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  PLACEHOLDERS,
} from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_HOME_VUE, FILENAME_PACKAGE_JSON } from "./filenames";
import { getLoginCodeVue, getRPCFunctionsButtonsVue, getRPCFunctionsReturnsVue } from "./replacementCode";

export default function getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCode = getConstructorCode(chain, whitelabel === YES, useModal === YES, web3AuthNetwork);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCode
  );

  const InitCode = getInitCode(whitelabel === YES, useModal === YES);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.INIT_CODE,
    InitCode
  );

  const LoginCodeVue = getLoginCodeVue(useModal === YES, customAuth, mfa);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.LOGIN_CODE,
    LoginCodeVue
  );

  const ModuleImport = getModuleImport(chain, whitelabel === YES, customAuth, evmFramework, useModal === YES);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(whitelabel === YES, customAuth, useModal === YES, mfa);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
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
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.RPC_FUNCTIONS,
    RPCFunctions
  );

  const RPCFunctionsButtonsVue = getRPCFunctionsButtonsVue(chain);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
    RPCFunctionsButtonsVue
  );

  const RPCFunctionsReturnsVue = getRPCFunctionsReturnsVue(chain);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.RPC_FUNCTIONS_RETURNS_VUE,
    RPCFunctionsReturnsVue
  );
}
