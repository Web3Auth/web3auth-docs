---
title: Getting started with Web3Auth (Web)
image: "/contents/web3auth-getStarted.png"
description: Installing and getting started with Web3Auth.
order: 0
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";


import InstallWeb3Auth from "../../../docs/common/web/code/web3auth/_install.mdx";
import InstantiateWeb3Auth from "../../../docs/common/web/code/web3auth/_instantiate-evm.mdx";
import SubscribeEvents from "../../../docs/common/web/code/web3auth/_subscribe_events.mdx";
import CommonSdkFunctions from "../../../docs/common/web/code/web3auth/_common-sdk-functions.mdx";
import CommonChainFunctions from "../../../docs/common/web/code/web3auth/_common-eth-functions.mdx";
import RegisterApplication from "../../../docs/common/web/code/web3auth/_register-client_id.mdx";


## `Introduction`

This guide is a hello world tutorial to get quickly familiar with Web3Auth.We will go through the use of Web3auth plug and play modal with minimal lines of code.

<RegisterApplication/>


<InstallWeb3Auth/>



## `Create web3auth instance`

We need `clientId` and `chainNamespace` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.web3auth.io), whereas `chainNamespace` signifies the type of chain you want to initialize web3auth with, currently it supports `eip155` for evm compatible chains and `solana` for solana blockchain.

```ts
  import { Web3Auth } from "@web3auth/web3auth";
  import { CHAIN_NAMESPACES } from "@web3auth/base";

  // We are initializing with EIP155 namespace which
  // will initialize the modal with ethereum mainnet
  // by default.
  const web3auth = new Web3Auth({
      chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155 }
      clientId: "YOUR_CLIENT_ID_HERE" // get your clientId from https://developer.web3auth.io
  });
```
<br/>

<SubscribeEvents/>


<InstantiateWeb3Auth description='With web3auth , you can either use pre configured adapters which come as default in web3auth package or you can configure adapters yourself with custom configuration. Example below shows both ways of instantiating web3auth modal.'/>

<CommonSdkFunctions/>

## `Using provider to sign blockchain transactions`

We can do sign transactions and make rpc calls to connected chain by using `provider` available on `web3auth` instance once user is logged in. Refer to documentation about `providers` to know more about the rpc calls available on provider for each `chainNamespace`.
<br/>

## `Done`

You have completed this tutorial,you can refer to working code of this tutorial [here](https://github.com/Web3Auth/Web3Auth/blob/master/examples/vue-app/src/default/defaultModal.vue).

<!-- From here you can proceed to guides about :-
- Configuring web3auth modal to use or configure various login adapters and custom chain config
 -->
