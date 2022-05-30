import { STEPS } from "../../constants";
import { IntegrationStep } from "../../integration-builder";
import { Module, ReplaceFileAggregator, toSteps } from "../../integration-builder/utils";
import { Config, IBuilderStep, StepType } from "./IBuilder";

export abstract class BaseBuilderManager {
  public config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  build() {
    const replacementAggregator = new ReplaceFileAggregator();

    const steps = this.initializeSteps();

    const modules = {};

    Object.keys(STEPS).forEach((stepName) => {
      if (steps[stepName]) {
        const installationModule = this.generateIntegrationModule(steps[stepName], replacementAggregator);
        modules[stepName] = installationModule;
      }
    });

    const integratedSteps = toSteps(modules);

    const orderedSteps = this.orderSteps(steps, integratedSteps, replacementAggregator);

    return orderedSteps;
  }

  generateIntegrationModule(step: IBuilderStep, replacementAggregator: ReplaceFileAggregator): Module {
    this.pushFiles(step);
    this.fillPlaceholders(step, replacementAggregator);
    return this.getStepContent(step);
  }

  fillPlaceholders(step: IBuilderStep, replacementAggregator: ReplaceFileAggregator) {
    const code = step.getPlaceholdersCode();
    const placeHolders = Object.keys(code);
    const file = step.getFile();
    const key = this.config.customAuthentication ? "CUSTOM" : "DEFAULT";

    return placeHolders.forEach((placeHolder) => {
      this.config.files[file[key]] = replacementAggregator.replaceFileVariable(
        this.config.files[file[key]],
        file[key],
        placeHolder,
        code[placeHolder]
      );
    });
  }

  pushFiles(step: IBuilderStep) {
    const file = step.getFile();
    if (this.config.customAuthentication) {
      return this.config.filenames.push(file.CUSTOM);
    }
    return this.config.filenames.push(file.DEFAULT);
  }

  protected getPointer(step: IBuilderStep, aggregator: ReplaceFileAggregator) {
    const file = step.getFile();
    const pointer = step.getPointer();
    if (this.config.customAuthentication) {
      return aggregator.rangeOffsetEditor({ filename: file.CUSTOM, range: pointer.CUSTOM });
    }
    return aggregator.rangeOffsetEditor({ filename: file.DEFAULT, range: pointer.DEFAULT });
  }

  protected getStepContent(step: IBuilderStep): Module {
    if (this.config.customAuthentication) {
      return step.getContent().CUSTOM;
    }
    return step.getContent().DEFAULT;
  }

  protected abstract initializeSteps(): Record<StepType, IBuilderStep>;

  protected abstract orderSteps(
    stepInstances: Record<StepType, IBuilderStep>,
    integratedSteps: Record<StepType, IntegrationStep>,
    aggregator: ReplaceFileAggregator
  ): any[];
}
