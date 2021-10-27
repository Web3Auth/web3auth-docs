---
title: How to use Openlogin with Starkware.
image: "/contents/openlogin-starkware.png"
description: Learn to use OpenLogin to integrate with Starkware
order: 14
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic react app example to integerate Openlogin
authentication to derive stark curve friendly keys and use them for signing and verifying signed message.

You can find
[the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/blob/master/examples/react-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Let's get started with code by installing depedencies using npm

To start with using openlogin with starkware, you need to install
[Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) ,
[Openlogin-Starkkey](https://www.npmjs.com/package/@toruslabs/openlogin-starkkey)

```shell
npm install --save @toruslabs/openlogin
npm install --save @toruslabs/openlogin-starkkey
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
redirected back to `redirectUrl` after successful authentication, application
will have access to private key as `openlogin.privKey` after initializing
`openlogin` instance.

We recommend to use redirect mode because some browsers might block popup in some cases.

In PopUp mode, openlogin authentication window will open as a popup and app will
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

## Use the openlogin private key to derive starkware key pair

After login, application will have access to the user's private key from`openlogin.privKey` instance variable.
We cannot use this key with starkware ec curve specific signing functions,so we need to derive starkware compatible keys from `openlogin.privKey`.

In the code snippet below `getStarkHDAccount` function creates a HD account from openlogin's key. It will return
hex encoded private key and uncompressed stark public key.

You can pass account index to derive multiple keys deterministically from single openlogin's key.
Also note that we are passing `STARKNET_NETWORKS.testnet` as a argument to this function, it will derive different
keypairs for different networks. Refer to `STARKNET_NETWORKS` type for supported networks.


```js
    import { getStarkHDAccount, STARKNET_NETWORKS } from "@toruslabs/openlogin-starkkey";
    ...
    ...
    const getStarkAccount = (index: number): { pubKey: string; privKey: string } => {
        const account = getStarkHDAccount(openlogin.privKey, index, STARKNET_NETWORKS.testnet);
        return account;
    };

```

Now we have a starkware compatible key pair which will be use to sign and validate a signed message in the next step.

# Signing and validating a message with stark keys.

In order to sign a message with stark keys we need to hash the message using pedersen hash function which is also
available from `@toruslabs/openlogin-starkkey`.

In code snippet below we are signing utf-8 string message by hashing with pedersen hash function in the units of 252 bits recursively and then signing it using `sign` method of `@toruslabs/openlogin-starkkey`.

Note: The function `getPedersenHashRecursively` is for this guide demonstration purpose only, to know about message encoding for starkware messages refer to this link [here](https://docs.starkware.co/starkex-v3/starkex-deep-dive/message-encodings)


```js


 import { getStarkHDAccount, starkEc, sign, verify, pedersen, STARKNET_NETWORKS } from "@toruslabs/openlogin-starkkey";
 import { binaryToHex, binaryToUtf8, bufferToBinary, bufferToHex, hexToBinary } from "enc-utils";

  /**
   *
   * @param str utf 8 string to be signed
   * @param prefix hex prefix padded to 252 bits (optional)
   * @returns
   */
  const getPedersenHashRecursively = (str: string, prefix?: string): string => {
    const TEST_MESSAGE_SUFFIX = prefix || "OPENLOGIN STARKWARE-";
    const x = Buffer.from(str, "utf8");
    const binaryStr = hexToBinary(bufferToHex(x));
    const rounds = Math.ceil(binaryStr.length / 252);
    if (rounds > 1) {
      const currentChunkHex = binaryToHex(binaryStr.substring(0, 252));
      if (prefix) {
        const hash = pedersen([prefix, currentChunkHex]);
        const pendingStr = binaryToUtf8(binaryStr.substring(252));
        return getPedersenHashRecursively(pendingStr.replace("\n", ""), hash);
      }
      // send again with default prefix,
      // this prefix is only relevant for this example and
      // has no relevance with starkware message encoding.
      return getPedersenHashRecursively(str, binaryToHex(bufferToBinary(Buffer.from(TEST_MESSAGE_SUFFIX, "utf8")).padEnd(252, "0")));
    }
    const currentChunkHex = binaryToHex(binaryStr.padEnd(252, "0"));
    return pedersen([prefix, currentChunkHex]);
  };

    // signing a pedersen hashed message with stark private key
   const signMessageWithStarkKey = (message: string): ec.Signature => {
    const accIndex = 1;
    const account = getStarkAccount(accIndex);
    const keyPair = starkEc.keyFromPrivate(account.privKey);
    const hash = getPedersenHashRecursively(message);
    const signedMesssage = sign(keyPair, hash);
    return signedMessage
  };

   // validating a signed message using stark public key
   const validateStarkMessage = (signedMessage: ec.Signature) => {
    const signingAccountIndex = 1;
    const account = getStarkAccount(signingAccountIndex);
    const keyPair = starkEc.keyFromPublic(account.pubKey, "hex");
    const hash = getPedersenHashRecursively(signingMessage);
    const isVerified = verify(keyPair, hash, signedMessage as unknown as ec.Signature);
    printToConsole(`Message is verified: ${isVerified}`);
  };
```

## Logging out user

In order to logout user you needs to call logout function available on sdk
instance. Logout function will clears the sdk state and removes any access to
private key on frontend. You can pass various other options in logout function
like `fastLogin` , `redirectUrl` etc. To know more about that checkout
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
> here.[the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/blob/master/examples/react-example).
