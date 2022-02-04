---
title: Getting started with Web3Auth (Web)
image: "/contents/web3auth-getStarted.png"
description: Installing and getting started with Web3Auth.
order: 0
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

import RegisterApplication from "../../../docs/common/web/code/web3auth/_register-client_id.mdx";


## `Introduction`

This guide is a hello world tutorial to get quickly familiar with Web3Auth.We will go through the use of Web3auth plug and play modal with vanilla js and jquery.


You can find working codepen and preview of this example [here](https://codepen.io/him_chawla/pen/qBVarMj?editors=1010).

<RegisterApplication/>

## `Installation`:-

Since we are using vanilla js in this guide we will install Web3Auth using CDN script. We will also install web3 library and jquery using cdn.

After adding given scripts in your html file,  web3auth cdn script will inject `Web3auth` sdk to global window object.

```shell
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.7.0/dist/web3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@web3auth/web3auth@0.2.2/dist/web3auth.umd.min.js"></script>
```
<br/>




## `Create web3auth instance`

In the step 1, we are creating instance of `Web3Auth` class inside on file load.

We need `clientId` and `chainNamespace` to initialize web3auth class. You can get your `clientId` by registering your app on [developer dashboard](https://developer.web3auth.io), whereas `chainNamespace` signifies the type of chain you want to initialize web3auth with, currently it supports `eip155` for evm compatible chains and `solana` for solana blockchain.



```ts
 <script>

    // ⭐️ access Web3auth package from window.
    const web3authSdk = window.Web3auth
    let web3AuthInstance = null;
    (async function init() {

      // ⭐️ STEP: 1
      web3AuthInstance = new web3authSdk.Web3Auth({
        chainConfig: {
          chainNamespace: "eip155"
        },
        clientId: "BBltSREZlcQaLvyLM5OUbv920WZtqeFQpxWwNRkrHSwmkpKTYmkgCgSirla6St5G1ioDKfL-hs48VodwiXzn73I" // get your clientId from https://developer.web3auth.io
      });
    })();
 </script>

```
<br/>


## `Subscribe to Web3Auth lifecycle events`
In the step 2, we are subscribing to the events emitted by web3auth. We are doing this inside same function as of Step 1.

We can get notified with various events during user's login session by subscribing to web3auth events. You can implement the logic of checking whether user is logged in or not based on these events. Below is the code snippet for subscribing to web3auth events.

```ts
 <script>

    // access Web3auth package from window.
    const web3authSdk = window.Web3auth
    let web3AuthInstance = null;
    (async function init() {

      // STEP: 1
      ...
      ...

      // ⭐️ STEP: 2
      subscribeAuthEvents(web3AuthInstance)
      await web3AuthInstance.initModal();
    })();
</script>


```
<br/>


## `Configuring Adapters and Initializing Modal`

In the step 3, we will initialize the web3auth modal.

With web3auth , you can either use pre configured adapters which come as default in web3auth package or you can configure adapters yourself with custom configuration. Example below initializes it with default adapters for the provided chainNamespace in step1. If you want to initialize with custom adapters refer to documentation [here](/api-reference/modal#configuring-adapters).


```ts
   <script>

    // access Web3auth package from window.
    const web3authSdk = window.Web3auth
    let web3AuthInstance = null;
    (async function init() {

      // STEP: 1
      ...
      ...

      // STEP: 2
      subscribeAuthEvents(web3AuthInstance)

      // ⭐️ STEP: 3
      await web3AuthInstance.initModal();
    })();

  </script>

```
<br/>


## `Authenticating user`

So far we have successfully initialized web3auth sdk, subscribed to events and initialized web3auth modal. In Step 4, we will
authenticate user by displaying web3auth modal.

To authenticate a user, we just need to use `connect` function of `web3AuthInstance` to display modal and we will be notified under our subscribed events on any user interaction with the modal.

Also after successful user login, web3auth instance will expose a provider under `web3AuthInstance.provider` which we will use interact with blockchain and sign transactions.


```ts
   <body>
   ...
   ...

   <button id="login">Login</button>

   <script>

    // access Web3auth package from window.
    const web3authSdk = window.Web3auth
    let web3AuthInstance = null;
    (async function init() {

      // STEP: 1
      ...
      ...

      // STEP: 2
      ...

      // STEP: 3
      ...
    })();

    // ⭐️ STEP 4:
    // this function will be triggered on click of button with login id.
    $("#login").click(async function(event) {
      try {

        // we will use this provider with web3 library in STEP 5.
        const provider = await web3AuthInstance.connect()

        // ⭐️ It will return user's social information if logged in with social login method
        // else it will return empty object.
        const user = await web3AuthInstance.getUserInfo();
      } catch (error) {
        $("#error").text(error.message);
      }
    });

  </script>

```




## `Using provider with web3`

In step 5, we will use above provider with web3 library to get user balance and account address.


```ts
<script>

    // ⭐️ STEP 5:
    async function initWeb3() {
      // we can access this provider on `web3AuthInstance` only after user is logged in.
      // This provider is also returned as a response of `connect` function in step 4. You can use either ways.
      const web3 = new Web3(web3AuthInstance.provider);
      const address = (await web3.eth.getAccounts())[0];
      const balance = await web3.eth.getBalance(address);
    }

</script>

```


## `Logout`

At last we can also add function to logout user session. Calling logout function will disconnect user session and it will emit DISCONNECTED event on successful disconnection on web3auth instance.

```ts
<script>

    // ⭐️ STEP 6:
    $("#logout").click(async function(event) {
      try {
        await web3AuthInstance.logout()
        $("#text").text("Logged out.");
        $("#address").text("");
        $("#balance").text("");
        $("#login").show();
        $("#logout").hide();
      } catch (error) {
        $("#error").text(error.message);
      }
    });

</script>

```



<br/>

## `Done`

You have completed this tutorial,you can refer to working code of this tutorial [here](https://github.com/Web3Auth/Web3Auth/tree/master/examples/getting-started).
