---
title: Using Web3Auth with Solana.
image: "/contents/web3auth-solana.png"
description: Using Web3Auth with Solana.
order: 12
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This guide is a tutorial to go through the steps required for using solana blockchain in web3auth.

## Installation:-

Install Web3Auth sdk from npm to use and configure web3auth modal. We are also installing `@web3auth/base` package to get access to common types and interfaces for web3auth.

> npm i --save @web3auth/web3auth
> npm i --save @web3auth/base

## Initialize web3auth instance

We need `clientId` and `chainNamespace` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.web3auth.io), whereas `chainNamespace` signifies the type of chain you want to initialize web3auth with, as we want to use `solana` blockchain which belongs to `solana` chainNamespace, so we will set `solana` as  `chainNamespace` inside chainConfig. Other chainConfig fields are optional, by default it will connect to solana mainnet-beta. If you want to connect with other network, then you can pass chainId of network in chainConfig if you are using any official solana network like `testnet` or `devnet`. You can also pass your own custom chainConfig for these networks in web3auth constructor.

Following are chainIds for solana networks in web3auth:-

- `mainnet-beta`: "0x1"
- `testnet`: "0x3"
- `devnet`: "0x3"

```ts
    import { Web3Auth } from "@web3auth/web3auth";
    import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

    const solanaChainConfig: CustomChainConfig = {
        chainNamespace: CHAIN_NAMESPACES.SOLANA,
        rpcTarget: "https://api.testnet.solana.com",
        blockExplorer: "https://explorer.solana.com?cluster=testnet",
        chainId: "0x2",
        displayName: "testnet",
        ticker: "SOL",
        tickerName: "solana",
    };

    const web3auth = new Web3Auth({
        chainConfig: solanaChainConfig
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

> Note: You will get different information about user based on the login method used by user. For ex: if user authenticates using social logins then you will get name, email and profile image of user whereas if user is using some wallet like metamask to login then you will get only `ethereum` address of user.


## Using provider to sign blockchain transactions

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. Refer to documentation about `providers` to know more about the rpc calls available on provider for each `chainNamespace`.

There are two ways of calling rpc calls with provider, either you can directly use provider's request method to trigger rpc calls or you can also `SolanaWallet` class from `@web3auth/solana-provider` package to use provider with. This class is a typed wrapper over provider which we get after login in web3auth.

In this example we are using `SolanaWallet` wrapper to sign a transaction with connected web3 adapter.
```ts
import { SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";

export const signTransaction = async () => {
  try {
    const conn = new Connection("https://api.devnet.solana.com");
    const solWeb3 = new SolanaWallet(web3auth.provider);
    const pubKey = await solWeb3.requestAccounts();
    const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
    const TransactionInstruction = SystemProgram.transfer({
      fromPubkey: new PublicKey(pubKey[0]),
      toPubkey: new PublicKey("oWvBmHCj6m8ZWtypYko8cRVVnn7jQRpSZjKpYBeESxu"),
      lamports: 0.01 * LAMPORTS_PER_SOL,
    });
    const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
    const signedTx = await solWeb3.signTransaction(transaction);
    console.log("signedTx", signedTx);
  } catch (error) {
    console.error("Error", error);
  }
};


```

## Logout

At last we can also add function to logout user session.
Calling `logout` function will disconnect user session and it will emit `DISCONNECTED` event on successful disconnection on web3auth instance.

```ts
 await web3auth.logout();
```

## Done

You have completed this tutorial,you can refer to working code of this tutorial [here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/chains/solana.vue").
