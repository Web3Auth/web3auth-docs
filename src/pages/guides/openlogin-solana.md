---
title: How to integerate Openlogin with an Solana dapp.
image: "/contents/openlogin-ethereum.png"
description: Learn to use OpenLogin to integrate with solana/web3.js
order: 4
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate Openlogin authentication with solana blockchain.

We will create a react app where user can login,check solana wallet address, balance and logout.



You can find [the source code of this is example on Github](https://github.com/torusresearch/openlogin-solana-example).

## Let's get started with some code

We will be using react in this example and this example app contains two routes (ie login and home). Login route contains a single button which is initiates the login using openlogin class instance. After successfull login user will
be redirected to redirectUrl which we will pass in login params, in our case this url is the second route of this app ie window.origin/solana.
On redirection page we will initialize the sdk and retrieves the private key. Before we can use this private key with solana/web3 js , we would need to make it solana compatible which is just few lines of code and the reason behind this conversion is tha key fetched from openlogin is generated via [secp256k1 elliptic curve](https://en.bitcoin.it/wiki/Secp256k1) and the solana keys are generate are  generated using [ED25519 curve](https://en.wikipedia.org/wiki/EdDSA#Ed25519), after this conversion we will use solana compatible private key to create a account using solana/web3.js and to fetch the balance of this account from solana testnet.

### Installing depedencies

To start with using openlogin with a solana dapp , you need to install [Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) , [Solana/Web3.js](https://solana-labs.github.io/solana-web3.js) sdk and tweetnacl library to derive solana compatible key from openlogin key.


```shell
    npm install --save @toruslabs/openlogin
    npm install --save @solana/web3.js
    npm install --save tweetnacl
```


## Login

Login button is available on login route , on click of login button following code snippet will be executed which will start the login flow for the user. If user was already logged in then user will be
simply redirected to redirectUrl. If doesn't have previous login session then user will be redirected to loginProvider authentication flow, in our case login provider is google so user will be redirected to google oauth screen.

```js
 async function handleLogin() {
    const sdkInstance = new OpenLogin({
      clientId: verifiers.google.clientId,  // your project id
      network: "testnet",
    });
    await sdkInstance.login({
      loginProvider: "google",
      redirectUrl: "http://localhost:3000/solana",
    });
  }
```
In code snippet above, first we create a instance of Openlogin class with following options :-

- `clientId`: clientId is a public id which is used to to identify your app. You can generate your client id using getting started guide with openlogin. For localhost you can use any static random string as client id.

- `network`: network can be `testnet` or `mainnet`.


After creating instance ,we are calling login function of openlogin class along with two options:-
- `loginProvider`: It specifies the login method which will be used to authenticate user. You can checkout [api reference](https://docs.beta.tor.us/open-login/api-reference) to know about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout [api reference](https://docs.beta.tor.us/open-login/api-reference) for other options available to pass in openlogin constructor and login function.

## Initialize Openlogin sdk and check if it user is logged in.

This example dapp has a route `/solana` where user will be redirected after login.
On this route when container is mounted we first created a openlogin class intance similar to what we did in login page , after creating an instance we need to initialize it in order to fetch the private key which will be injected in to a state variable (ie `privKey`) of sdk after calling init. If sdk contains privKey then it means user is logged in else redirect user back to login page. In case of mulitple route react app it is suggested to use some global store like redux or react context api to get access to single openlogin sdk instance. However we are having only one router after login so we don't need redux in this example.

```js
    /* eslint-disable no-unused-vars */
    import OpenLogin from "@toruslabs/openlogin";
    import { Account, Connection, clusterApiUrl } from "@solana/web3.js";
    import nacl from "tweetnacl";
    import * as bs58 from "bs58";
    import { useHistory } from "react-router";
    import "./style.scss";

    const networks = {
        mainnet: { url: "https://solana-api.projectserum.com", displayName: "Mainnet Beta" },
        devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
        testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
    };

    const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

    const solanaNetwork = networks.mainnet;

    function Solana() {

        const [sdk, setSdk] = useState(undefined);
        const [account, setUserAccount] = useState(null);
        const [accountInfo, setUserAccountInfo] = useState(null);
        const [solanaPrivateKey, setPrivateKey] = useState(null)
        const history = useHistory();
        useEffect(() => {
            async function initializeOpenlogin() {
            const sdkInstance = new OpenLogin({
                clientId: "YOUR_PROJECT_ID", // your project id
                network: "testnet",
            });

            await sdkInstance.init();
            if (!sdkInstance.privKey) {
                history.push('/');
                return
            }
            const privateKey = sdkInstance.privKey;
            const solanaPrivateKey = getSolanaPrivateKey(privateKey);
            await getAccountInfo(solanaNetwork.url,solanaPrivateKey);

            setSdk(sdkInstance);
            }
            initializeOpenlogin();
        }, [history]);

        const getSolanaPrivateKey = (openloginKey)=>{
            const solanaPrivateKey = nacl.sign.keyPair.fromSeed(fromHexString(openloginKey.padStart(64, 0))).secretKey;
            return solanaPrivateKey;
        }

        const getAccountInfo = async(connectionUrl, solanaPrivateKey) => {
            const account = new Account(solanaPrivateKey);
            const connection = new Connection(connectionUrl);
            const accountInfo = await connection.getAccountInfo(account.publicKey);
            setPrivateKey(bs58.encode(account.secretKey));
            setUserAccount(account);
            setUserAccountInfo(accountInfo);
            return accountInfo;
        }

        ...
        ...

    }
```


## Use the private key with solana/web3.js

After calling `openlogin.login` and handling redirect result, your application will have access to the user's private key at `openlogin.privKey`. Before using this key with solana/web3.js, we just need to make this key compatible with solana. In the code snippet below `getSolanaPrivateKey` function does that by using tweetnacl library. Solana web3 js internally uses tweetnacl to generate key pairs , so we are also using tweetnacl in this example to derive solana key from openlogin key in this example.

Now we have a key which can be used use create a account using solana/web3.js. Functionality to generate solana account is implemente in `getAccountInfo` function which first creates a account by inputing the private key to Account class of solana/web3.js , creates a connection to solana blockchain and fetches account's balance from blockchain. You can use this private key to do anything like signing transactions and all the functionality supported by solana/web3.js.



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

In order to logout user you needs to call logout function available on sdk instance. Logout function will clears the sdk state and removes any access to private key on frontend. You can redirect user to the exit page after logout function returns.
 You can pass various other options in logout function like `fastLogin` , `redirectUrl` etc. To know more about that checkout [api reference](https://docs.beta.tor.us/open-login/api-reference)

```js
 const handleLogout = async () => {
    await sdk.logout();
    history.push("/");
  };
```

### DONE!!
You can use this example on localhost, in order to deploy your app you need to whitelist your domain at [developer dashboard](http://developer.tor.us/).

You can checkout example of this example app here.[the source code of this is example on Github](https://github.com/torusresearch/openlogin-solana-example).
