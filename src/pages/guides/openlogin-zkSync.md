---
title: How to Integrate OpenLogin and zkSync
image: "/contents/Torus-zkSync.png"
description: Learn to use OpenLogin to integrate your app with zkSync rollup
order: 9
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate Openlogin
authentication with zkSync.

We will go through a react app where user can login,create zkSync wallet
address,ether wallet, fetch committed eth balance from zkSync account and
logout.

You can find
[the source code of this is example on Github](https://github.com/torusresearch/openlogin-zkSync-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Let's get started with code by installing depedencies using npm

To start with using openlogin with a zkSync dapp , you need to install
[Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) ,
[ethers js](https://www.npmjs.com/package/ethers) sdk and
[zksync](https://www.npmjs.com/package/zksync) sdk

```shell
npm install --save @toruslabs/openlogin
npm install --save zksync
npm install --save ethers
```

## Connect with zkSync operator node and ethereum node provider

```js
import * as ethers from "ethers";
import * as zksync from "zksync";

const zksyncConnector = {
  _syncConn: null,
  _ethConn: null,
  _connectZkSync: async () => {
    const syncProvider = await zksync.getDefaultProvider("rinkeby");
    zksyncConnector._syncConn = syncProvider;
    return syncProvider;
  },
  _connectEth: async () => {
    const ethersProvider = ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/65982ef7e3f24b3586823483ebdc99e0"
    );
    zksyncConnector._ethConn = ethersProvider;
    return ethersProvider;
  },
  connect: async () => {
    await zksyncConnector._connectZkSync();
    zksyncConnector._connectEth();
  },
  getSyncClient: async () => {
    if (!!zksyncConnector._syncConn) {
      return zksyncConnector._syncConn;
    }
    return zksyncConnector._connectZkSync();
  },
  getEthClient: () => {
    if (!!zksyncConnector._ethConn) {
      return zksyncConnector._ethConn;
    }
    return zksyncConnector._connectEth();
  },
};
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
      // qpp has access ot private key now
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
  [API Reference](/open-login/api-reference/usage) to know
  about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout [API Reference](/open-login/api-reference/usage) for
other options available to pass in openlogin constructor and login function.


## Using private key to import zkSync signer wallet and eth wallet

After calling `openlogin.login`, your application will have access to the user's
private key at `openlogin.privKey`.

In this example, we are using private key derivef from openlogin to create an
eth wallet and a zkSync wallet.

After this we can use `syncWallet` to make transactions over ethereum and zkSync
using `zkSync` sdk.

You can read more about
[zkSync sdk here](https://zksync.io/api/sdk/js/tutorial.html#creating-a-wallet)

```js
const syncProvider = await zksyncConnector.getSyncClient();
const ethProvider = zksyncConnector.getEthClient();
const ethWallet = new ethers.Wallet(privateKey, ethProvider);
// Derive zksync.Signer from ethereum wallet.
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
```

## Get ethereum testnet ether

In the next step, we are going to unlock zkSync wallet which requires to make a
transaction, so it is suggested to get test ether from
[rinkeyby faucet](https://faucet.rinkeby.io/) before proceeding.

## Unlock zkSync wallet

To control assets in zkSync network, an account must register a separate public
key once.

```js
async function unlockZkSyncWallet() {
  try {
    if (!(await syncWallet.isSigningKeySet())) {
      if ((await syncWallet.getAccountId()) === undefined) {
        throw new Error("Unknown account");
      }
      // As any other kind of transaction, `ChangePubKey` transaction requires fee.
      // User doesn't have (but can) to specify the fee amount. If omitted, library will query zkSync node for
      // the lowest possible amount.
      const changePubkey = await syncWallet.setSigningKey({
        feeToken: "ETH",
        ethAuthType: "ECDSA",
      });

      // Wait until the tx is committed
      let receipt = await changePubkey.awaitReceipt();
      console.log("Unlock account receipt", receipt);
    } else {
      console.log("Signing key already set: ", await syncWallet.getAccountId());
    }
  } catch (error) {
    console.log("Error while unlock", error);
  }
}
```

## Deposit eth to zkSync and withdraw eth from zkSync

Up to this point , we have a zkSync wallet account generated using openlogin.

Now we can make transactions using zkSync sdk. We will demonstrate `deposit` and
`withdraw` eth functionality.

We can deposit eth by using `syncWallet` which was generated after login with
openlogin. Calling `depositToSyncFromEthereum` function of zkSync will trigger a
blockchain transaction so make sure you have sufficient eth to pay tx fee as
well.

```js
const deposit = await syncWallet.depositToSyncFromEthereum({
  depositTo: syncWallet.address(),
  token: "ETH",
  amount: ethers.utils.parseEther("0.04"),
});
```

Similarly you can create a withdrawal request to withdraw eth from zkSync
account back to ethereum.

```js
const withdraw = await syncWallet.withdrawFromSyncToEthereum({
  ethAddress: ethWallet.address,
  token: "ETH",
  amount: ethers.utils.parseEther("0.01"),
});
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
> here.[the source code of this is example on Github](https://github.com/torusresearch/openlogin-zkSync-example).
