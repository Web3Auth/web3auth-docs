import React from "react";

import { IntegrationStep } from "./interfaces";

interface Module {
  default: React.FC<any>;
  frontMatter: Record<string, any>;
}

export function toStep(mod: Module): IntegrationStep {
  const Component = mod.default;
  return {
    title: mod.frontMatter.title,
    content: <Component />,
  };
}

export function toSteps<T extends { [key in keyof T]: Module }>(mods: T) {
  return Object.fromEntries(Object.entries(mods).map(([key, mod]) => [key, toStep(mod as Module)])) as { [key in keyof T]: IntegrationStep };
}

export class ReplaceFileAggregator {
  replacementOutcomes = [];

  replaceFileVariable(fileContent: string, filename: string, variableName: string, replacement: string): string {
    // 1. number of new lines to derive OFFSET
    const replacementLineCount = replacement.split(`\n`).length - 3;
    // 2. line that this occurs on
    const contentByLine = fileContent.split(`\n`);
    let variableLine;
    for (let i = 0; i < contentByLine.length; i++) {
      if (contentByLine[i].includes(variableName)) {
        variableLine = i;
      }
    }
    variableLine = variableLine + 1;
    const exp = `\n *// REPLACE-${variableName}-\n *`;
    const re = new RegExp(exp, "gm");

    this.replacementOutcomes.push({ filename, replacementLineCount, variableLine });
    return fileContent.replace(re, replacement);
  }

  rangeOffsetEditor(pointer: { range: string; filename: string }) {
    console.log("REPLACEMENT:", this.replacementOutcomes);
    let numbersInRange = pointer.range.split("-");
    console.log("FILENAME:", pointer.filename);
    for (let x = 0; x < numbersInRange.length; x++) {
      let actualNum = parseInt(numbersInRange[x]);
      let offset = 0;
      for (let i = 0; i < this.replacementOutcomes.length; i++) {
        let mutatedActualNum = actualNum + offset;
        console.log("MUTATEDNUM", mutatedActualNum);
        console.log("this.replacementOutcomes[i].variableLine", this.replacementOutcomes[i].variableLine);
        if (mutatedActualNum > this.replacementOutcomes[i].variableLine && this.replacementOutcomes[i].filename === pointer.filename) {
          offset = offset + this.replacementOutcomes[i].replacementLineCount;
        }
      }
      actualNum = actualNum + offset;
      numbersInRange[x] = actualNum.toString();
      console.log("THISIS OFFSET:", offset);
    }
    return { range: numbersInRange.join("-"), filename: pointer.filename };
  }
}

export function replaceFileVariable(fileContent: string, variableName: string, replacement: string) {
  const exp = `\n *// REPLACE-${variableName}-\n *`;
  const re = new RegExp(exp, "gm");
  return fileContent.replace(re, replacement);
}
