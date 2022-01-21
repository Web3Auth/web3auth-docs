---
title: Using Web3Auth with Solana.
image: "/contents/web3auth-solana.png"
description: Using Web3Auth with Solana.
order: 12
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";


import InstallWeb3Auth from "../../../docs/common/web/code/web3auth/_install-evm.mdx";
import InstantiateWeb3Auth from "../../../docs/common/web/code/web3auth/_instantiate-sol.mdx";
import SubscribeEvents from "../../../docs/common/web/code/web3auth/_subscribe_events.mdx";
import CommonSdkFunctions from "../../../docs/common/web/code/web3auth/_common-sdk-functions.mdx";
import CommonChainFunctions from "../../../docs/common/web/code/web3auth/_common-sol-functions.mdx";


## `Introduction`

This guide is a tutorial to go through the steps required for using solana blockchain in web3auth.

<InstallWeb3Auth/>

## `Create web3auth instance`

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

<SubscribeEvents/>

<InstantiateWeb3Auth/>

<CommonSdkFunctions/>

<CommonChainFunctions/>

## `Done`

You have completed this tutorial,you can refer to working code of this tutorial [here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/chains/solana.vue").
