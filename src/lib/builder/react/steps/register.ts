/* eslint-disable class-methods-use-this */
import { STEPS } from "../../../constants";
import * as register from "../../../content/web/register.mdx";
import { BaseStep } from "../../base/baseStep";

export class Register extends BaseStep {
  name = STEPS.REGISTER;

  getPlaceholdersCode() {
    return {
      CUSTOM: {
        "": "",
      },
      DEFAULT: {
        "": "",
      },
    };
  }

  getPointer() {
    return {
      CUSTOM: "8",
      DEFAULT: "8",
    };
  }

  getContent() {
    return {
      CUSTOM: register,
      DEFAULT: register,
    };
  }

  getFile() {
    return {
      CUSTOM: "web3auth/react/custom/App.tsx",
      DEFAULT: "web3auth/react/App.tsx",
    };
  }
}
