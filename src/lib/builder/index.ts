// web
import { Config } from "./base/IBuilder";
import { ReactBuilderManager } from "./react";

const BUILDERS = (config: Config) => {
  return {
    react: new ReactBuilderManager(config),
  };
};

export default BUILDERS;
