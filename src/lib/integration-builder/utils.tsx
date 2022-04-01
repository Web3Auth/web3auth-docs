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

export function replaceFileVariable(fileContent: string, variableName: string, replacement: string) {
  const exp = `\n *// REPLACE-${variableName}-\n *`;
  const re = new RegExp(exp, "gm");
  return fileContent.replace(re, replacement);
}
