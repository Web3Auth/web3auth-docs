import * as step1 from "./step-1.mdx";
import * as step2 from "./step-2.mdx";
import * as step3 from "./step-3.mdx";
import * as step4 from "./step-4.mdx";
import { toSteps } from "../../utils";

const STEPS = toSteps({
  step1,
  step2,
  step3,
  step4,
});

export default STEPS;
