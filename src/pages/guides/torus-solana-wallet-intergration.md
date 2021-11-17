---
title: How to Integrate Torus Solana Wallet in Dapp
image: "/contents/Torus-Solana.png"
description:
  Learn to integrate Torus Solana Wallet in Dapp
order: 0
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate torus solana wallet in dapp.

We will go through a simple html typescript page app where user can login to the wallet and can sign a transactions.


## Let's get started with code by installing depedencies using npm

To start using the wallet with a dapp, you need to
install `@toruslab/solana-embed`. You can use popular package managers like yarn and npm
to download them.

<Tabs
  defaultValue="npm"
  values={[
    { label: "npm", value: "npm" },
    { label: "Yarn", value: "yarn" },
  ]}
>
<TabItem value="npm">

```shell
npm i --save @toruslabs/solana-embed
```

</TabItem>

<TabItem value="yarn">

```shell
yarn add @toruslabs/solana-embed
```

</TabItem>

</Tabs>


See [api reference](https://docs.tor.us/solana-wallet/api-reference/class) for more details.




## Initialize instance and import solana sdk:

```typescript
  import {clusterApi, Connection } from "@solana/web3.js";

  import Torus from "@toruslab/solana-embed";
  const torus = new Torus();

  await torus.init({
    buildEnv: "testing", // uses solana-testing.tor.us (which uses testnet)
    enableLogging: true,// default : false
    showTorusButton: true, // default: true
  });

```

In above code snippet, we are creating an instance of solana-embed and then initializing it with `testing` enviroment which uses `solana testnet`.
We can pass other configuration options while initializing for customizing the wallet interface. You can refer to solana-embed [api-reference](https://docs.tor.us/solana-wallet/api-reference/class) to know more on that.


## Trigger user login

Simply call `torus.login()` to trigger user login wherever it makes sense in your application lifecycle

Calling login without any parameter will open a modal for user to select all supported logins.

After successfull login, it will return array of public key. The first element of the array is the current wallet public key


```typescript
  const publicKeys = await torus.login(); // return array of public key in base 58
  const publicKey = publicKeys[0];
```

See [api reference](https://docs.tor.us/solana-wallet/api-reference/class) for more details.


## Using torus instance to fetch user account detail

After logging in,  wallet it provides us interface for interactions like signing transactions and messages.

It also provides us with an interface to access user login information like user's email , profile image etc.

```typescript
    const userInfo = await torus.getUserInfo(); // user profile info (email address etc)
```

See [api reference](https://docs.tor.us/solana-wallet/api-reference/class) for more details.



## Using torus Solana API to send a transactions.

Using the `Torus` instance, dapps can call methods on the wallet.

Every time a user wants to sign a transaction, the wallet will open a confirmation window.

```typescript

    const network = "";
    const connection = new Connection(network);
    const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;

    const destPublicKey = "<destination public key>"
    const transactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(publicKey),
        toPubkey: new PublicKey(destPublicKey),
        lamports: 0.1 * LAMPORTS_PER_SOL
    });
    const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: new PublicKey(publicKey)
        }).add(transactionInstruction);

    const res = await torus.sendTransaction(transaction)
```

See [sendTransaction api reference](https://docs.tor.us/solana-wallet/api-reference/solana/send-transaction) for more details.

## Using torus Solana API to send a gasless transactions.

To send gasless transaction, first we need to get the feePayer's public key. This public key is scoped to every application.

Then instantiate a `Transaction` with the feePayer and send it out using Torus sendTransaction api.

```typescript

    const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;

    const destPublicKey = "<destination public key>"
    const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(publicKey),
        toPubkey: new PublicKey(destPublicKey),
        lamports: 0.1 * LAMPORTS_PER_SOL
    });
    const gaslessPublicKey = await torus.getGaslessPublicKey(); // scoped to application

    const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: new PublicKey(gaslessPublicKey)
        }).add(TransactionInstruction);

    const res = await torus.sendTransaction(transaction)
```

See [getGaslessPublicKey api reference](https://docs.tor.us/solana-wallet/api-reference/solana/gasless-transaction) for more details.

## Using Torus Solana Api to initiate top up.
Currently Torus Solana Api only support top up from provider ramp network.


```typescript
  const paymentStatus = await torus.initateTopup("rampnetwork");

  // topup with custom address
  const paymentStatus = torus.initateTopup("rampnetwork", { selectedAddress : "< Recipient's Solana Public Key(base58) >"});

```

See [initateTopup api reference](https://docs.tor.us/solana-wallet/api-reference/topup) for more details.

## Log out handler
To logout user, it simply requires you to call a `logout` function on torus wallet instance

```typescript
   await torus.logout()
```

## DONE!!
You can refer to API docs to explore more functionalities [here](https://docs.tor.us/solana-wallet/api-reference/class)
