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
import { getRPCFunctionsButtonsVue, getRPCFunctionsReturnsVue } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, chain, evmFramework, replacementAggregator) {
  const newFiles = files;

  const ConstructorCode = getConstructorCode(chain, whitelabel === YES);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCode
  );

  const InitCode = getInitCode(whitelabel === YES);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.INIT_CODE,
    InitCode
  );

  const ModuleImport = getModuleImport(chain, whitelabel === YES, customAuth === YES, evmFramework);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === YES, customAuth === YES);
  newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
    files[FILENAME_HOME_VUE],
    FILENAME_HOME_VUE,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapter
  );

  const PackageJson = getPackageJson(chain, whitelabel === YES, customAuth === YES, evmFramework);
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
