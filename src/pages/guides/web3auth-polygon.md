---
title: Using Web3Auth with Polygon.
image: "/contents/web3auth-polygon.png"
description: Using Web3Auth with Polygon.
order: 14
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

import InstallWeb3Auth from "../../../docs/common/web/code/web3auth/\_install.mdx"; import InstantiateWeb3Auth from
"../../../docs/common/web/code/web3auth/\_instantiate-evm.mdx"; import SubscribeEvents from
"../../../docs/common/web/code/web3auth/\_subscribe_events.mdx"; import CommonSdkFunctions from
"../../../docs/common/web/code/web3auth/\_common-sdk-functions.mdx"; import CommonChainFunctions from
"../../../docs/common/web/code/web3auth/\_common-eth-functions.mdx"; import RegisterApplication from
"../../../docs/common/web/code/web3auth/\_register-client_id.mdx";

## `Introduction`

This guide is a tutorial to go through the steps required for using polygon (matic) chain with web3auth.

<RegisterApplication/>

<InstallWeb3Auth/>

## `Create web3auth instance`

We need `clientId` and `chainConfig` to initialize web3auth class. You can get your `clientId` by registering your app on
[developer dashboard](https://developer.web3auth.io), whereas `chainConfig` contains following fields:-

- `chainNamespace` : It signifies the type of chain you want to initialize web3auth with, as we want to use `polygon` which in an evm compatible
  chain, so we can set `eip155` as `chainNamespace`.

- `chainId`:- ChainId is hex chainId of the chain that you want to use. For matic mainnet `0x89` is the chainId and for testnet `0x13881` is the
  chainId

- `rpcTarget`:- By default both mainnet and testnet uses web3auth default rpc nodes urls, you can specify your own rpc url here.

- `displayName`:- Network name for displaying to user in wallet and confirmation screens.

- `blockExplorer`:- Link to blockchain's block explorer.

- `ticker`:- Native currency ticker for the chain. For ex: matic

```ts
    import { Web3Auth } from "@web3auth/web3auth";
    import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

  const polygonMumbaiConfig: CustomChainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://rpc-mumbai.maticvigil.com",
    blockExplorer: "https://mumbai-explorer.matic.today",
    chainId: "0x13881",
    displayName: "Polygon Mumbai Testnet",
    ticker: "matic",
    tickerName: "matic",
  };

    const web3auth = new Web3Auth({
        chainConfig: polygonMumbaiConfig
        clientId: "localhost-id" // get your clientId from https://developer.web3auth.io
    });

```

<SubscribeEvents />
<InstantiateWeb3Auth/>

<CommonSdkFunctions/>

## `Using provider to sign blockchain transactions`

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. Refer
to documentation about `providers` to know more about the rpc calls available on provider for each `chainNamespace`.

Here we will simply sign a transaction to send eth using web3auth provider which is fully compatible with web3 js library for polygon/matic
blockchain.

<CommonChainFunctions/>

## `Done`

You have completed this tutorial,you can refer to working code of this tutorial
[here]("https://github.com/Web3Auth/Web3Auth/examples/vue-app/src/chains/matic.vue").
