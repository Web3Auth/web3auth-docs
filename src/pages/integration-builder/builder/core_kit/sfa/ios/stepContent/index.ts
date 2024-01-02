import { toSteps } from "../../../../../utils";
import * as createVerifier from "../../../../../commonSteps/createVerifier.mdx";
import * as initialization from "./initialize.mdx";
import * as installation from "./installation.mdx";
import * as login from "./login.mdx";
import * as iOSQuickStart from "./iOSQuickStart.mdx";

const STEPS = toSteps({
  iOSQuickStart,
  installation,
  createVerifier,
  initialization,
  login,
});

export default STEPS;
