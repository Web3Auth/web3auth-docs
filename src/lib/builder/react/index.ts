/* eslint-disable class-methods-use-this */
import { STEPS } from "../../constants";
import { IntegrationStep } from "../../integration-builder";
import { ReplaceFileAggregator } from "../../integration-builder/utils";
import { BaseBuilderManager } from "../base/BaseManager";
import { IBuilderStep, StepType } from "../base/IBuilder";
import { Installation } from "./steps/installation";

export class ReactBuilderManager extends BaseBuilderManager {
  build() {
    return super.build();
  }

  orderSteps(
    stepInstances: Record<StepType, IBuilderStep>,
    integratedSteps: Record<StepType, IntegrationStep>,
    aggregator: ReplaceFileAggregator
  ): any[] {
    const orderedSteps = [];

    orderedSteps.push({
      ...[integratedSteps.INSTALLATION],
      pointer: this.getPointer(stepInstances[STEPS.INSTALLATION], aggregator),
    });
    return orderedSteps;
  }

  initializeSteps() {
    const stepInstances: Record<StepType, IBuilderStep> = {};
    const step = new Installation();
    step.init(this.config);
    stepInstances[step.name] = step;
    return stepInstances;
  }
}
