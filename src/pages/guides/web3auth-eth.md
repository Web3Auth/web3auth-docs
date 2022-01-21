---
title: Using Web3Auth with Ethereum.
image: "/contents/web3auth-eth.png"
description: Using Web3Auth with Ethereum.
order: 12
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

import InstallWeb3Auth from "../../../docs/common/web/code/web3auth/_install-evm.mdx";
import InstantiateWeb3Auth from "../../../docs/common/web/code/web3auth/_instantiate-evm.mdx";
import SubscribeEvents from "../../../docs/common/web/code/web3auth/_subscribe_events.mdx";
import CommonSdkFunctions from "../../../docs/common/web/code/web3auth/_common-sdk-functions.mdx";
import CommonChainFunctions from "../../../docs/common/web/code/web3auth/_common-eth-functions.mdx";

## `Introduction`

This guide is a tutorial to go through the steps required for using ethereum blockchain in web3auth.

<InstallWeb3Auth/>

## `Creating web3auth instance`

We need `clientId` and `chainNamespace` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.web3auth.io), whereas `chainNamespace` signifies the type of chain you want to initialize web3auth with, as we want to use `ethereum` which belongs to `eip155`, we have to set `eip155` as `chainNamespace` inside chainConfig. Other chainConfig fields are optional, by default it will connect to ethereum mainnet. If you want to connect with other network then default, then you can pass chainId of network in chainConfig if you are using any official ethereum testnet like rinkeby, ropsten etc, if you are connecting with some custom chainId except official testnets you have to pass entire chainConfig for that customNetwork.

```ts
    import { Web3Auth } from "@web3auth/web3auth";
    import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

    const ethChainConfig: CustomChainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x3",
        rpcTarget: `https://ropsten.infura.io/v3/${YOUR_INFURA_ID}`,
        displayName: "ropsten",
        blockExplorer: "https://ropsten.etherscan.io/",
        ticker: "ETH",
        tickerName: "Ethereum",
    };
    // We are initializing with EIP155 namespace which
    // will initialize the modal with ethereum mainnet
    // by default.
    const web3auth = new Web3Auth({
        chainConfig: ethChainConfig
        clientId: "localhost-id" // get your clientId from https://developer.web3auth.io
    });

```

<SubscribeEvents/>

<InstantiateWeb3Auth/>


<CommonSdkFunctions/>

## `Using provider to sign eth transactions`

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. This provider is `eip1193` compatible provider so you can functions like `eth_signTypedData_v3`, `eth_signTypedData_v4`, `eth_sign` and other standard functions by using `web3auth.provider` with web3.js or ethers.js

Here we will simply sign a transaction to send eth using web3auth provider which is fully compatible with web3 js library for ethereum blockchain.

<CommonChainFunctions/>


## `Done`

You have completed this tutorial,you can refer to working code of this tutorial [here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/chains/ethereum.vue").

<!-- From here you can proceed to guides about :-
- Configuring web3auth modal to use or configure various login adapters and custom chain config
 -->
