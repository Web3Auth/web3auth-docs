import { ReactNode } from "react";

export interface IntegrationStep {
  title: string;
  content: ReactNode;
  pointer?: { filename: string; range?: string };
}

export interface Integration {
  filenames: string[];
  files: Record<string, any>;
  steps: IntegrationStep[];
}

export interface IntegrationBuilder {
  displayName: string;

  options: Record<
    string,
    {
      displayName: string;
      default: string;
      choices: string[];
    }
  >;

  getAvailableOptions(optionKey: string, optionValue: string): Record<string, string>[];

  build(values: Record<string, string>, files: Record<string, any>): Integration;
}
