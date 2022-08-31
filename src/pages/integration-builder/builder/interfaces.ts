import { ReactNode } from "react";

export interface IntegrationStep {
  title: string;
  content: ReactNode;
  pointer?: {
    filename: string;
    variableName: string;
    fileContent: string;
    range: string;
  };
}

export interface Integration {
  filenames: string[];
  files: Record<string, string>;
  steps: IntegrationStep[];
}

export interface DisplayChoice {
  key: string;
  displayName: string;
}

export interface IntegrationBuilder {
  displayName: string;

  options: Record<
    string,
    {
      displayName: string;
      default: string;
      type: "toggle" | "dropdown";
      choices: DisplayChoice[];
    }
  >;

  build(values: Record<string, string>, files: Record<string, any>): Integration;
}
