---
title: How to Integrate OpenLogin and Arbitrum
image: "/contents/Torus-Arbitrum.png"
description: Learn to use OpenLogin to integrate your dapp with arbitrum rollup
order: 10
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate Openlogin
authentication with arbitrum.

We will go through a react app where user can login, create arbitrum wallet
address,create ether wallet, trigger some methods that involve communicating
between the L1 Ethereum chain and the L2 Arbitrum chain (i.e., depositing and
withdrawing assets), and logout

You can find
[the source code of this is example on Github](https://github.com/torusresearch/openlogin-arbitrum-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Let's get started with code by installing depedencies using npm

To start with using openlogin with a arbitrum dapp , you need to install
[Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) ,
[ethers js](https://www.npmjs.com/package/ethers) sdk,
[token-bridge-sdk](https://www.npmjs.com/package/token-bridge-sdk) sdk and
[arb-ts](https://www.npmjs.com/package/arb-ts) which is dependency of
`token-bridge-sdk`

```shell
npm install --save @toruslabs/openlogin
npm install --save arb-ts
npm install --save token-bridge-sdk
npm install --save ethers
```

## Connect with arbitrum kovan4 testnet node and ethereum kovan testnet node provider

`ethers` js sdk can be used to connect with eth kovan testnet nodes and arbitrum
kovan4 testnet operator nodes.

```js
const kovan4_testnet_config = {
  ethRPC: "https://kovan.infura.io/v3/65982ef7e3f24b3586823483ebdc99e0",
  arbRPC: "https://kovan4.arbitrum.io/rpc",
};

const ethProvider = new ethers.providers.JsonRpcProvider(
  kovan4_testnet_config.ethRPC
);
const arbProvider = new ethers.providers.JsonRpcProvider(
  kovan4_testnet_config.arbRPC
);
```

## Create and initialize openlogin instance

Start with creating a instance of openlogin class and initialize it using
`openlogin.init()` when application is mounted. After initialization it checks
if sdk has private key then user is already logged in.

We are using two options while creating openlogin class instance:-

- `clientId`: clientId is a public id which is used to to identify your app. You
  can generate your client id from
  [developer dashboard](http://developer.tor.us/). For localhost you can use any
  static random string as client id.

- `network`: network can be `testnet` or `mainnet`.

```js
useEffect(() => {
  setLoading(true)
  const sdkInstance = new OpenLogin({
    clientId: "YOUR_PROJECT_ID",
    network: "testnet"
  });
  async function initializeOpenlogin() {
    await sdkInstance.init();
    if (sdkInstance.privKey) {
      // app has access ot private key now
      ...
      ...
    }
    setSdk(sdkInstance);
    setLoading(false)
  }
  initializeOpenlogin();
}, []);
```

## Login

Once the sdk is initialized , then `openlogin.login` should be called when user
clicks on login button.

```js
async function handleLogin() {
    // privKey will be returned here only in case of popup mode or in case user is already logged in.
    // for redirect mode login, private key will be returned as `openlogin.privKey` after openlogin
    // is initialized using `init` function on successfully login redirect.
    const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
    });
    return privKey
}
```

Above code snippet will start the login flow for the user and redirect/popups openlogin authentication ui
for user based on the ux mode specified.

Openlogin sdk provides two UX modes (ie POPUP and REDIRECT) for login flow. You can use either depends on your
application UX by setting up `uxMode` option in login function, default is
`redirect`.

> Note: in above function, privKey will be returned here only in case of popup ux mode or in case user is already logged in. For redirect mode login, private key will be returned as `openlogin.privKey` after openlogin is initialized using `init` function which should be  called redirect url page mount.


In redirect mode user will be redirected completely out of app and will be
redirected back to `redirectUrl` after successfull authentication, application
will have access to private key as `openlogin.privKey` after intializing
`openlogin` instance.

In PopUp mode, openlogin authenication window will open as a popup and app will
get private key when `openlogin.login` promise will resolve.

This example is compatible with both redirect and popup ux modes.

In the given code snippet, `openlogin.login` function is getting called along
with two options:-

- `loginProvider`: It specifies the login method which will be used to
  authenticate user. You can checkout
  [API Reference](/open-login/api-reference/usage) to
  know about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout
[API Reference](/open-login/api-reference/usage) for
other options available to pass in openlogin constructor and login function.


## Using private key to import eth signer and arbitrum signer wallet

After calling `openlogin.login`, your application will have access to the user's
private key at `openlogin.privKey`.

In this example, we are using private key derived from openlogin to create an
eth wallet and a arbitrum wallet.

After this we can use generate a bridgeInstance `Bridge` which is a contructor
exported from `arb-ts` package to make transactions over ethereum and arbitrum
using arbitrum's `token-bridge-sdk`.

```js
const ethSigner = new ethers.Wallet(privateKey, ethProvider);
const arbSigner = new ethers.Wallet(privateKey, arbProvider);
const bridgeInstance = new Bridge(
  kovan4_testnet_config.erc20BridgeAddress,
  kovan4_testnet_config.arbTokenBridgeAddress,
  ethSigner,
  arbSigner
);
```

## Getting test ether from kovan testnet

In the next step, we are going to deposit some test ether from ethereum to
arbitrum rollup, so it is suggested to get test ether from
[kovan faucet](https://faucet.kovan.network/) before proceeding.

## Deposit eth to arbitrum and withdraw eth from arbitrum

Up to this point , we have arbitrum wallet account generated using openlogin and
an arbitrum `bridgeInstance` initialized using wallets and pre deployed testnet
bridge smart contract addresses.

Now we can make transactions using `token-bridge-sdk` sdk which provides a react
hook `useArbTokenBridge` using which we can access methods that involve
communicating between the L1 Ethereum chain and the L2 Arbitrum chain (i.e.,
depositing and withdrawing assets) .

```js
const bridge = useArbTokenBridge(bridgeInstance, false);

// deposit
const receipt = await bridge.eth.deposit("0.01");

// withdraw
const receipt = await bridge.eth.withdraw("0.01");
```

## Log out handler

In order to logout user you needs to call logout function available on sdk
instance. Logout function will clears the sdk state and removes any access to
private key on frontend.

You can pass various other options in logout function like `fastLogin` ,
`redirectUrl` etc. To know more about that checkout
[API Reference](/open-login/api-reference/usage)

```js
const handleLogout = async () => {
  setLoading(true);
  await openlogin.logout();
  setLoading(false);
};
```

### DONE!!

> You can checkout example of this example app
> here.[the source code of this is example on Github](https://github.com/torusresearch/openlogin-arbitrum-example).
