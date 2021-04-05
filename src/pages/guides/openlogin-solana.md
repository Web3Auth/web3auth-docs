---
title: How to integerate Openlogin with an Solana dapp.
image: "/contents/Torus-Solana.png"
description: Learn to use OpenLogin to integrate with solana/web3.js
order: 6
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate Openlogin authentication with solana blockchain.

We will create a example react app where user can login, create solana wallet address, checks wallet balance and logout.


You can find [the source code of this is example on Github](https://github.com/torusresearch/openlogin-solana-example).

## Let's get started with code by installing depedencies using npm

To start with using openlogin with a solana dapp , you need to install [Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) , [Solana/Web3.js](https://solana-labs.github.io/solana-web3.js) sdk and tweetnacl library to derive solana compatible key from openlogin key.


```shell
    npm install --save @toruslabs/openlogin
    npm install --save @solana/web3.js
    npm install --save tweetnacl
```

## Initialize solana web3 connection


```js
import { Connection, clusterApiUrl } from "@solana/web3.js";

const networks = {
  mainnet: { url: "https://solana-api.projectserum.com", displayName: "Mainnet Beta" },
  devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
  testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
};

const solanaNetwork = networks.devnet;
const connection = new Connection(solanaNetwork.url);

```
## Create and initialize openlogin instance

Start with creating a instance of openlogin class and initialize it using `openlogin.init()` when application is mounted. After initialization it checks if sdk has private key then user is already logged in.

We are using two options while creating openlogin class instance:-

- `clientId`: clientId is a public id which is used to to identify your app. You can generate your client id from [developer dashboard](http://developer.tor.us/). For localhost you can use any static random string as client id.

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

Once the sdk is initialized , then `openlogin.login`
will be called when user clicks login button.

It will start the login flow for the user. Openlogin sdk provides two UX modes (ie POPUP and REDIRECT)
for login flow. You can use either depends on your  by setting up `uxMode` option in login function, default is `redirect`.

In redirect mode user will be redirected completely out of app and will be redirect back to `redirectUrl` after successfull authentication and application will have access to private key as `openlogin.privKey` during sdk initialization on component mount. Code shown in previous step will handle this case.

In PopUp mode, openlogin authenication window will be open as a popup and app will get privKey when  `openlogin.login` promise will resolve.

This example is compatible with both redirect and popup ux modes.

In the given code snippet, `openlogin.login` function is getting called along with two options:-
- `loginProvider`: It specifies the login method which will be used to authenticate user. You can checkout [api reference](https://docs.beta.tor.us/open-login/api-reference) to know about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout [api reference](https://docs.beta.tor.us/open-login/api-reference) for other options available to pass in openlogin constructor and login function.

```js
  async function handleLogin() {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      await getMaticAccountDetails(privKey);
      setLoading(false)
    } catch (error) {
      console.log("error", error);
      setLoading(false)

    }

  }

```


## Use the private key with solana/web3.js

After login application will have access to the user's private key at `openlogin.privKey`. Before using this key with solana/web3.js, we just need to make this key compatible with solana. In the code snippet below `getSolanaPrivateKey` function does that by using tweetnacl library. Solana web3 js internally uses tweetnacl to generate key pairs , so we are also using tweetnacl in this example to derive solana key from openlogin key in this example.

Now we have a key which can be used use create a account using solana/web3.js. Functionality to generate solana account is implemented in `getAccountInfo` function which first creates a account by inputing the private key to Account class of solana/web3.js , creates a connection to solana blockchain and fetches account's balance from blockchain. You can use this private key to do anything like signing transactions and all the functionality supported by solana/web3.js.



```js
    const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

    const getSolanaPrivateKey = (openloginKey)=>{
            const solanaPrivateKey = nacl.sign.keyPair.fromSeed(fromHexString(openloginKey.padStart(64, 0))).secretKey;
            return solanaPrivateKey;
    }
```

Now we have a solana compatible key which can be used with solana/web3.js. In this example we are using it to create a user account and to fetch user's account balance from blockchain.

```js
    const getAccountInfo = async(connectionUrl, solanaPrivateKey) => {
        const account = new Account(solanaPrivateKey);
        const connection = new Connection(connectionUrl);
        const accountInfo = await connection.getAccountInfo(account.publicKey);
        setPrivateKey(bs58.encode(account.secretKey));
        setUserAccount(account);
        setUserAccountInfo(accountInfo);
        return accountInfo;
    }
```


## Logging out user:-

In order to logout user you needs to call logout function available on sdk instance. Logout function will clears the sdk state and removes any access to private key on frontend.
 You can pass various other options in logout function like `fastLogin` , `redirectUrl` etc. To know more about that checkout [api reference](https://docs.beta.tor.us/open-login/api-reference)

```js
 const handleLogout = async () => {
    setLoading(true)
    await openlogin.logout();
    setLoading(false)
  };
```

### DONE!!
You can use this example on localhost, in order to deploy your app you need to whitelist your domain at [developer dashboard](http://developer.tor.us/).

You can checkout example of this example app here.[the source code of this is example on Github](https://github.com/torusresearch/openlogin-solana-example).
