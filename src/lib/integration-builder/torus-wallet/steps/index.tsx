import React from "react";

export const InstallSDK = () => (
  <>
    <p>
      Install Torus Embed SDK using <code>npm</code> or <code>yarn</code>:
    </p>
    <pre>
      <code>npm i --save @toruslabs/torus-embed</code>
    </pre>
  </>
);

export const InstantiateSDK = () => (
  <>
    <p>
      Instantiate Torus Embed SDK by creating a instance of <code>Torus</code>:
    </p>
    <pre>
      <code>
        {`
import Torus from "@toruslabs/torus-embed";

const torus = new Torus();
await torus.init();`.trim()}
      </code>
    </pre>
  </>
);

export const TriggerUserLogin = () => (
  <>
    <p>
      Trigger user login wherever it makes sense on your application lifecycle:
    </p>
    <pre>
      <code>{`await torus.login();`}</code>
    </pre>
  </>
);

export const IntegrateWithWeb3 = () => (
  <>
    <p>
      Integrating with the Torus Wallet gives you a provider, which can be
      wrapped by the Web3. This instance functions similar to that as Metamask's
      Web3 provider. We have taken great care to make it compatible with
      Metamask's Web3 interface.
    </p>
    <pre>
      <code>
        {`
import Web3 from "web3";
const web3 = new Web3(torus.provider);`.trim()}
      </code>
    </pre>
  </>
);
