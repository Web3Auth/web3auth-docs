/* eslint-disable class-methods-use-this */
import { Module } from "../../integration-builder/utils";
import { Config, ExampleType, IBuilderStep, PlaceHolderType, StepType } from "./IBuilder";

export abstract class BaseStep implements IBuilderStep {
  public config: Config;

  abstract name: StepType;

  init(config: Config) {
    this.config = config;
  }

  abstract getPlaceholdersCode(): Record<ExampleType, Record<PlaceHolderType, string>>;
  abstract getContent(): Record<ExampleType, Module>;
  abstract getFile(): Record<ExampleType, string>;
  abstract getPointer(): Record<ExampleType, string>;
}
