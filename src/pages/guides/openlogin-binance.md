---
title: How to Integrate OpenLogin and Binance Smart Chain
image: "/contents/Torus-BSC.png"
description:
  Learn to use OpenLogin to integrate your app with Binance Smart Chain
order: 7
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate Openlogin
authentication with Binance Smart Chain.

We will go through a react app where user can login,create binance smart chain
wallet, fetch account's balance and logout.

You can find
[the source code of this is example on Github](https://github.com/torusresearch/openlogin-binance-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Let's get started with code by installing depedencies using npm

To start with using openlogin with a binance smart chain dapp , you need to
install [Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) and
[Web3.js](https://www.npmjs.com/package/web3) sdk.

```shell
npm install --save @toruslabs/openlogin
npm install --save web3
```

## Initialize Web3 with binance test net:

```js
const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
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
  [API Reference](/open-login/api-reference/usage) to
  know about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout
[API Reference](/open-login/api-reference/usage) for
other options available to pass in openlogin constructor and login function.


## Use the private key with web3

Code snippet given below ,connects with binance test net using web3, imports a
account with private key and fetches imported account balance from binance smart
chain test network.

```js
async function importUserAccount(privateKey) {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  let balance = await web3.eth.getBalance(account.address);
  let address = account.address;
  setUserAccountInfo({ balance, address });
}
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
> here.[the source code of this is example on Github](https://github.com/torusresearch/openlogin-binance-example).
