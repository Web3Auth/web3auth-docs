// Web
import { toSteps } from "../../utils";
// Android
import * as addAndroidJitpack from "./add-android-jitpack.mdx";
import * as connectWithSolana from "./connect-with-solana.mdx";
import * as getSolanaKeys from "./get-solana-keys.mdx";
import * as installAndroidSDK from "./install-android-sdk.mdx";
// iOS
import * as installSwiftPackage from "./install-swift-package.mdx";
import * as installWebSDK from "./install-web-sdk.mdx";
import * as instantiateAndroidSDK from "./instantiate-android-sdk.mdx";
import * as instantiateWebSDK from "./instantiate-web-sdk.mdx";
import * as registerAndroidRedirect from "./register-android-redirect.mdx";
import * as registerVerifier from "./register-verifier.mdx";
import * as serveWebRedirect from "./serve-web-redirect.mdx";
import * as serveWebSw from "./serve-web-sw.mdx";
import * as setupSwiftUniversalLinks from "./setup-swift-universal-links.mdx";
import * as setupSwiftUrlSchema from "./setup-swift-url-schema.mdx";
import * as triggerAndroidLogin from "./trigger-android-login.mdx";
import * as triggerSwiftLogin from "./trigger-swift-login.mdx";
import * as triggerWebLogin from "./trigger-web-login.mdx";
import * as useSolanaKeys from "./use-solana-keys.mdx";

const STEPS = toSteps({
  // Web
  installWebSDK,
  registerVerifier,
  instantiateWebSDK,
  serveWebSw,
  serveWebRedirect,
  triggerWebLogin,
  connectWithSolana,
  getSolanaKeys,
  useSolanaKeys,

  // Android
  addAndroidJitpack,
  installAndroidSDK,
  registerAndroidRedirect,
  instantiateAndroidSDK,
  triggerAndroidLogin,

  // iOS
  installSwiftPackage,
  setupSwiftUrlSchema,
  setupSwiftUniversalLinks,
  triggerSwiftLogin,
});

export default STEPS;
