import { toSteps } from "../../../../../utils";
import * as flutterQuickStart from "./flutterQuickStart.mdx";
import * as requirementsAndroid from "./requirementsAndroid.mdx";
import * as requirementsIOS from "./requirementsIOS.mdx";
import * as installation from "./installation.mdx";
import * as createVerifier from "../../../../../commonSteps/createVerifier.mdx";
import * as initialization from "./initialize.mdx";
import * as login from "./login.mdx";

const STEPS = toSteps({
  flutterQuickStart,
  requirementsAndroid,
  requirementsIOS,
  installation,
  createVerifier,
  initialization,
  login,
});

export default STEPS;
