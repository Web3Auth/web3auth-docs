import * as installSDK from "./install-sdk.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiateSDK from "./instantiate-sdk.mdx";
import * as retrievePrivateKey from "./retrieve-private-key.mdx";
import * as triggerLogin from "./trigger-login.mdx";
import * as connectWithWeb3 from "./connect-with-web3.mdx";
import * as logout from "./logout.mdx";

// common react steps for all chains
import * as reactLogin from "./react-common/login.mdx"
import * as reactLogout from "./react-common/logout.mdx"

//solana
import * as generateSolanaKey from "./react-solana/generate-solana-key.mdx"
import * as connectSolana from "./react-solana/connect-with-solWeb3.mdx"
import * as useSolanaPrivateKey from "./react-solana/usingPrivateKey.mdx"

// polygon
import * as connectPolygon from "./react-polygon/connect-with-maticJs.mdx"
import * as usePolygonPrivateKey from "./react-polygon/usingPrivateKey.mdx"

// binance
import * as connectBinance from "./react-binance/connect-with-binance.mdx"
import * as useBinancePrivateKey from "./react-binance/usingPrivateKey.mdx"

// avalanche
import * as connectAvalanche from "./react-avalanche/connect-with-avalanche.mdx"
import * as useAvaxPrivateKey from "./react-avalanche/usingPrivateKey.mdx"

// zkSync
import * as connectZkSync from "./react-zkSync/connect-with-zkSync.mdx"
import * as importZkSyncWallets from "./react-zkSync/importWallets.mdx"
import * as unlockZkSyncWallet from "./react-zkSync/unlockZkSyncWallet.mdx"
import * as depositWithdrawZkSync from "./react-zkSync/depositWithdrawEth.mdx"
import * as getTestEthRinkebyZkSync from "./react-zkSync/getTestEth.mdx"


// arbitrum
import * as connectArbitrum from "./react-arbitrum/connect-with-arbitrum.mdx"
import * as importArbitrumWallets from "./react-arbitrum/importWallets.mdx"
import * as depositWithdrawArbitrum from "./react-arbitrum/depositWithdrawEth.mdx"
import * as getTestEthKovan from "./react-arbitrum/getTestEth.mdx"


// android
import * as androidAddToGradle from "./android/add-to-gradle.mdx"
import * as androidCreateProject from "./android/create-project.mdx"
import * as androidConfigureDeepLink from "./android/configure-deep-link.mdx"
import * as androidInitialize from "./android/initialize.mdx"
import * as androidNextSteps from "./android/next-steps.mdx"


// ios
import * as iosInstallation from "./ios/installation.mdx"
import * as iosConfigure from "./ios/configure.mdx"
import * as iosAuth from "./ios/auth.mdx"
import * as iosResumeAuth from "./ios/resume-auth.mdx"
import * as iosNextSteps from "./ios/next-steps.mdx"


import { toSteps } from "../../utils";

const STEPS = toSteps({
  installSDK,
  registerApp,
  instantiateSDK,
  retrievePrivateKey,
  triggerLogin,
  connectWithWeb3,
  logout,
  reactLogin,
  reactLogout,
  generateSolanaKey,
  connectSolana,
  connectPolygon,
  connectBinance,
  connectAvalanche,
  useAvaxPrivateKey,
  useBinancePrivateKey,
  useSolanaPrivateKey,
  usePolygonPrivateKey,
  connectZkSync,
  importZkSyncWallets,
  unlockZkSyncWallet,
  depositWithdrawZkSync,
  getTestEthRinkebyZkSync,
  connectArbitrum,
  importArbitrumWallets,
  depositWithdrawArbitrum,
  getTestEthKovan,
  androidAddToGradle,
  androidCreateProject,
  androidConfigureDeepLink,
  androidInitialize,
  androidNextSteps,
  iosInstallation,
  iosConfigure,
  iosAuth,
  iosResumeAuth,
  iosNextSteps
});

export default STEPS;
