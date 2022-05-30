import { PLACEHOLDERS, STEPS } from "../../constants";
import { Module } from "../../integration-builder/utils";

export type PlaceHolderType = typeof PLACEHOLDERS[keyof typeof PLACEHOLDERS];

export type StepType = typeof STEPS[keyof typeof STEPS];

export type ExampleType = "CUSTOM" | "DEFAULT";

export type Config = {
  filenames: string[];
  files: Record<string, string>;
  steps: any[];
  whitelabel: boolean;
  customAuthentication: boolean;
  customLogin: boolean;
  chain: string;
};
export interface IBuilder {
  getSteps();
}

export interface IBuilderStep {
  name: StepType;
  init(config: Config): void;
  getPlaceholdersCode(): Record<ExampleType, Record<PlaceHolderType, string>>;
  getContent(): Record<ExampleType, Module>;
  getFile(): Record<ExampleType, string>;
  getPointer(): Record<ExampleType, string>;
}
