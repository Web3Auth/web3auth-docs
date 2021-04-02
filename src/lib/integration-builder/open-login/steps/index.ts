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

// polygon
import * as connectPolygon from "./react-polygon/connect-with-maticJs.mdx"

// binance
import * as connectBinance from "./react-binance/connect-with-binance.mdx"

// avalanche
import * as connectAvalanche from "./react-avalanche/connect-with-avalanche.mdx"

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
  connectAvalanche
});

export default STEPS;
