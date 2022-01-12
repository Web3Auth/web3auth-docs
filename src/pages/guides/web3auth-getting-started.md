---
title: Getting started with Web3Auth
image: "/contents/web3auth-apple.png"
description: Installing and getting started with Web3Auth.
order: 12
category: auth
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This guide is a hello world tutorial to get quickly familiar with Web3Auth.We will go through the use of Web3auth plug and play modal with minimal lines of code.

## Installation:-

Install Web3Auth sdk from npm to use and configure web3auth modal. We are also installing `@web3auth/base` package to get access to common types and interfaces for web3auth.

> npm i --save web3auth
> npm i --save @web3auth/base

## Initialize web3auth instance

We need `clientId` and `chainNamespace` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.tor.us), whereas `chainNamespace` signifies the type of chain you want to initialize web3auth with, currently it supports `eip155` for evm compatible chains and `solana` for solana blockchain.

```ts
    import { Web3Auth } from "@web3auth/web3auth";
    import { CHAIN_NAMESPACES } from "@web3auth/base";

    // We are initializing with EIP155 namespace which
    // will initialize the modal with ethereum mainnet
    // by default.
    const web3auth = new Web3Auth({
         chainNamespace: CHAIN_NAMESPACES.EIP155,
         clientId: "localhost-id"
    });

    await web3auth.initModal();

```

## Subscribe to login events

We can get notified by various events during user's login session by subsribing to web3auth events. You can implement the logic of checking whether user is logged in or not based on these events. Below is the code snippet for subscribing to web3auth events.

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

> Note: You will get different information about user based on the login method used by user. For ex: if user authenticates using social logins then you will get name, email and profile image of user whereas if user is using some wallet like metamask to login then you will get only `ethereum` address of user.


## Using provider to sign blockchain transactions

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. Refer to documentation about `providers` to know more about the rpc calls available on provider for each `chainNamespace`.

Here we will simply sign a transaction to send eth using web3auth provider which is fully compatible with web3 js library for ethereum blockchain.

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

You have completed this tutorial,you can refer to working code of this tutorial [here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/BeginnerExample.vue").

<!-- From here you can proceed to guides about :-
- Configuring web3auth modal to use or configure various login adapters and custom chain config
 -->
