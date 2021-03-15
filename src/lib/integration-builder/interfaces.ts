import React from "react";

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

  getAvailableOptions(
    optionKey: string,
    optionValue: string
  ): Record<string, string>[];

  build(values: Record<string, string>): Integration;
}

export interface Integration {
  filenames: string[];
  steps: Array<{
    title: string;
    content: React.ReactNode[];
    pointer?: { filename: string; range?: string };
  }>;
}
