---
title: Using Web3Auth with Binance Smart Chain.
image: "/contents/web3auth-bsc.png"
description: Using Web3Auth with Binance Smart Chain.
order: 13
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This guide is a tutorial to go through the steps required for using binance smart chain with web3auth.

## Installation:-

Install Web3Auth sdk from npm to use and configure web3auth modal. We are also installing `@web3auth/base` package to get access to common types and interfaces for web3auth.

> npm i --save @web3auth/web3auth
> npm i --save @web3auth/base

## Initialize web3auth instance

We need `clientId` and `chainConfig` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.web3auth.io), whereas `chainConfig` contains following fields:-


 - `chainNamespace` : It  signifies the type of chain you want to initialize web3auth with, as we want to use `binance smart chain` which in an evm compatible chain,  so we can set `eip155` as `chainNamespace`.

- `chainId`:- ChainId of the network that you want to use. For binance mainnet `0x38` is chainId and for testnet `0x61` is chainId

- `rpcTarget`:- By default both mainnet and testnet uses web3auth default rpc nodes urls, you can specify your own rpc url here.

- `displayName`:- Network name for displaying to user in wallet and confirmation screens.

- `blockExplorer`:- Link to blockchain's block explorer.

- `ticker`:- Native currency ticker for the chain. For ex: BNB


```ts
    import { Web3Auth } from "@web3auth/web3auth";
    import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

   const binanceChainConfig: CustomChainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://data-seed-prebsc-2-s3.binance.org:8545",
    blockExplorer: "https://testnet.bscscan.com",
    chainId: "0x61",
    displayName: "Binance SmartChain Testnet",
    ticker: "BNB",
    tickerName: "BNB",
    };

    const web3auth = new Web3Auth({
        chainConfig: binanceChainConfig
        clientId: "localhost-id" // get your clientId from https://developer.web3auth.io
    });

    await web3auth.initModal();

```

## Subscribe to login events

We can get notified by various events during user's login session by subscribing to web3auth events. You can implement the logic of checking whether user is logged in or not based on these events. Below is the code snippet for subscribing to web3auth events.

```ts

    subscribeAuthEvents(web3auth: Web3Auth) {
      web3auth.on(ADAPTER_STATUS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
        console.log("Yeah!, you are successfully logged in", data);

      });
      web3auth.on(ADAPTER_STATUS.CONNECTING, () => {
        console.log("connecting");
      });
      web3auth.on(ADAPTER_STATUS.DISCONNECTED, () => {
        console.log("disconnected");
      });
      web3auth.on(ADAPTER_STATUS.ERRORED, (error) => {
        console.log("some
 error or user have cancelled login request", error);
      });
    },

```

## Display web3Auth modal and authenticate user

So far we have successfully initialized `web3auth` sdk and subscribed to events.We just need to use `connect` function of `web3auth` instance to display modal and we will be notified under our subscribed events on any user interaction with the modal.

Also after successful user login, web3auth instance will expose a provider under `web3auth.provider`  which we will use interact with blockchain and sign transactions.

```ts
  web3auth.connect();
```



## Get authenticated user info

Once user is connected you can get the information available for authenticated user by calling `getUserInfo` function.

```ts
  const userInfo = await web3auth.getUserInfo();
```

> Note: You will get different information about user based on the login method used by user. For ex: if user authenticates using social logins then you will get name, email and profile image of user whereas if user is using some wallet like metamask to login then you will get only `binance smart chain` address of user.


## Using provider to sign blockchain transactions

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. Refer to documentation about `providers` to know more about the rpc calls available on provider for each `chainNamespace`.

Here we will simply sign a transaction to send eth using web3auth provider which is fully compatible with web3 js library for binance smart chain blockchain.

```ts
import { SafeEventEmitterProvider } from "@web3auth/base";


  try {
    const web3 = new Web3(web3auth.provider);
    const accounts = await web3.eth.getAccounts();
    console.log("pubKey", accounts)
    const txRes = await web3.eth.sendTransaction({ from: accounts[0], to: accounts[0], value: web3.utils.toWei("0.01") })
    console.log("txRes", txRes)
  } catch (error) {
    console.log("error", error)
  }

```

## Logout

At last we can also add function to logout user session.
Calling `logout` function will disconnect user session and it will emit `DISCONNECTED` event on successful disconnection on web3auth instance.

```ts
 await web3auth.logout();
```

## Done

You have completed this tutorial,you can refer to working code of this tutorial [here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/chains/binance.vue").
