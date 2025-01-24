import * as createVerifier from "../../../../commonSteps/createVerifier.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initialize.mdx";
import * as authProviderLogin from "../../../../commonSteps/authProviderLogin.mdx";
import * as installation from "./installation.mdx";
import * as login from "./login.mdx";
import * as androidQuickStart from "./androidQuickStart.mdx";
import * as requirements from "./requirements.mdx";

const STEPS = toSteps({
  androidQuickStart,
  requirements,
  installation,
  createVerifier,
  initialization,
  login,
  authProviderLogin,
});

export default STEPS;
