// starkware
import * as getStarkKey from "./starkware/get-stark-key.mdx";
import * as signMessageWithStarkKey from "./starkware/signing-random-msg.mdx";
import * as validateMessageWithStarkKey from "./starkware/validating-signed-msg.mdx";


import { toSteps } from "../../utils";

const STEPS = toSteps({
  getStarkKey,
  signMessageWithStarkKey,
  validateMessageWithStarkKey
});

export default STEPS;
