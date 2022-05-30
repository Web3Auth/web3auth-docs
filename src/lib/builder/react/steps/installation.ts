/* eslint-disable class-methods-use-this */
import { PLACEHOLDERS, STEPS } from "../../../constants";
import * as installation from "../../../content/web/installation.mdx";
import { BaseStep } from "../../base/baseStep";

export class Installation extends BaseStep {
  name = STEPS.INSTALLATION;

  getPlaceholdersCode() {
    return {
      CUSTOM: {
        [PLACEHOLDERS.CONSTRUCTOR_PARAMS]: "",
      },
      DEFAULT: {
        [PLACEHOLDERS.CONSTRUCTOR_PARAMS]: "",
      },
    };
  }

  getPointer() {
    return {
      CUSTOM: "0-6",
      DEFAULT: "0-6",
    };
  }

  getContent() {
    return {
      CUSTOM: installation,
      DEFAULT: installation,
    };
  }

  getFile() {
    return {
      CUSTOM: "web3auth/react/custom/App.tsx",
      DEFAULT: "web3auth/react/App.tsx",
    };
  }
}
