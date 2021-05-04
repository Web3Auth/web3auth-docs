---
title: How to Integrate Torus Embed and Binance Smart Chain
image: "/contents/Torus-BSC.png"
description:
  Learn to use torus embed to integrate Torus Wallet with Binance Smart Chain
order: 10
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integerate torus wallet using
torus embed with Binance Smart Chain.

We will go through a simple html page app where user can login in to torus wallet, connect over binance smart chain and can sign a transactions using torus wallet.


## Let's get started with code by installing depedencies using npm

To start with using torus embed with a binance smart chain dapp , you need to
install torus-embed and web3. You can use popular package managers like yarn and npm
to down them. In this guide we will load them over cdn script.

```shell
   <script src="https://cdn.jsdelivr.net/npm/@toruslabs/torus-embed"> <script>
   <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.js"></script>
```

## Initialize torus embed with binance test net:

```js
    const torus = new Torus({
          buttonPosition: 'bottom-left', // customize position of torus icon in dapp
        })

    window.torus = torus
    await torus.init(
        {
            enableLogging: true,
            network: {
                host: "https://data-seed-prebsc-1-s1.binance.org:8545/", // mandatory
                networkName: "Smart Chain - Testnet",
                chainId: 97,
                blockExplorer: "https://testnet.bscscan.com",
                ticker: 'BNB',
                tickerName: 'BNB',
            },
            showTorusButton: true,
        }
    )
```

In above code snippet, we are creating an instance of torus-embed and then initializing it with binance smart chain test node configuration.
We can pass other configuration options while initializing for customizing torus embed interface. You can refer to torus-embed [api-reference](https://docs.tor.us/wallet/api-reference/class) to know more on that.

## Using torus web3 instance to fetch user account address and balance

After initializing torus embed it provides us with a http provider which can be feeded in to web3 js to interact with binance smart chain.

It also provides us with an interface to access user login information like user's email , profile image etc.

```js

    const user = await window.torus.getUserInfo(); // user profile info (email address etc)

    const web3 = new Web3(window.torus.provider);
    window.web3 = web3
    const address = (await web3.eth.getAccounts())[0];
    const balance = await web3.eth.getBalance(address);

```

## Using torus web3 provider instance to sign transactions.

Now we have access to a web3 instance using which we can do anything from signing transactions to accessing other methods of web3.

Every time you will try to sign a transaction it will automatically open torus embed window for user where user can confirm transaction.

```js
 window.web3.eth.getAccounts((error, accounts) => {
  if (error) throw error;
    const txnParams = {
        from: accounts[0],
        to: accounts[0], // any valid receiver address
        value: "0.1"
    }
  window.web3.eth.sendTransaction(txnParams, (error, txnHash) => {
    if (error) throw error;
    console.log(txnHash);
  });
});
```


## Log out handler
To logout user which means to clean up the web3 instance ,it simply requires you to call  `logout` function on torus embed instance

```js
   await window.torus.logout()
```

## DONE!!
You can refer to api docs to explore more in to torus embed apis [here](https://docs.tor.us/wallet/api-reference/class)
