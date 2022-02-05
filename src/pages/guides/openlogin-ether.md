---
title: How to integerate Openlogin with an Ethereum dapp
image: "/contents/openlogin-ether.png"
description: Learn to use OpenLogin to integrate your app with Web3.js
order: 5
category: misc
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you over a basic example to integrate Openlogin authentication with ethereum seamlessly.

We will create an example app where user will login in to dapp and trigger some blockchain/wallet calls using eip1193 provider.

You can find [the source code of this is example on Github](https://github.com/himanshuchawla009/openlogin-web-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in [Developer Dashboard](https://dashboard.web3auth.io) and get your client ID.

> App registration is not required for localhost development.

## Create your Vue app

> Ignore this step if you're integrating into an existing Vue project.

Use [Vue CLI](https://cli.vuejs.org/guide/installation.html) to create a new Vue app:

```shell
vue create hello-world
```

## Install dependencies

We need to install `openlogin` sdk to authenticate user,`@web3auth/ethereum-provider` to create EIP1193 compatible provider using authenticated user's
private key and `web3` to use ethereum-provider with.

Install dependencies either npm or yarn:

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" }, { label: "Yarn", value: "yarn" }, ]}

> <TabItem value="npm">

```shell
npm i --save openlogin
npm i --save web3
npm i --save @web3auth/ethereum-provider

```

</TabItem>

<TabItem value="yarn">

```shell
yarn add openlogin
yarn add web3
yarn add @web3auth/ethereum-provider
```

</TabItem>

</Tabs>

## Initialize the SDK on your application's mounted event

Initialize the SDK on your application `mounted` lifecycle function:

```ts
<script>
import OpenLogin from "openlogin";
const openlogin = new OpenLogin({
  // your clientId aka projectId , get it from https://developer.tor.us
  // clientId is not required for localhost, you can set it to any string
  // for development
  clientId: YOUR_PROJECT_ID,
  network: "testnet",
  uxMode: "redirect",
  whiteLabel: {
    dark: true,
    theme: {
      primary: "#ffa500",
    },
  },
});

export default Vue.extend({
  name: "App",
  data() {
    return {
      loading: false,
      privKey: "",
      ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
      openlogin: null as OpenLogin | null
    };
  },
  async mounted() {

    await openlogin.init();
    this.privKey = openlogin.privKey;
    await this.setProvider(this.privKey);
  },
  methods: {
    // your methods here
  },
});
</script>
```

The code snippet given above is creating Openlogin Sdk instance with two params ie `clientId` and `network` and it initializes it using init function.
Init

- `clientId`: clientId is a public id which is used to to identify your app. You can generate your client id using getting started guide with
  openlogin. For localhost you can use any static random string as client id.

- `network`: network can be testnet or mainnet. For testing your dapp use testnet, for production use mainnet.

After initializing openlogin sdk, above function checks if sdk instance has private key. If private key is available then it means that user is
already authenticated and we generate a provider using `setProvider` function which will be explained in next steps.

## Login user

Once the sdk is initialized , you can allow user to login. You need to call login function available on sdkInstance created in previous step.

```js

export default Vue.extend({
  name: "App",
  data() {
    return {
      loading: false,
      privKey: "",
      ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
      eip1193Provider: null as SafeEventEmitterProvider | null,
    };
  },
  async mounted() {
    // Initialize the SDK on your here
  },
  methods: {
       async login() {
          try {
            // in popup mode (with third party cookies available) or if user is already logged in this function will
            // return priv key , in redirect mode or if third party cookies are blocked then priv key be injected to
            // sdk instance after calling init on redirect url page.
            const privKey = await openlogin.login({
              // pass empty string '' as loginProvider to open default torus modal
              // with all default supported login providers or you can pass specific
              // login provider from available list to set as default.
              // for ex: google, facebook, twitter etc
              loginProvider: "",
              redirectUrl: `${window.origin}`,
              relogin: true,
              // you can pass standard oauth parameter in extralogin options
              // for ex: in case of passwordless login, you have to pass user's email as login_hint
              // and your app domain.
              // extraLoginOptions: {
              //   domain: 'www.yourapp.com',
              //   login_hint: 'hello@yourapp.com',
              // },
            });
            if (privKey) {
              this.privKey = openlogin.privKey;
              await this.setProvider(this.privKey);
            }
          } catch (error) {
            console.log("error", error);
          }
    },
  },
});

```

Above code snippet triggers the openlogin sdk login functionality, which will open the default openlogin's modal. As we have passed `loginProvider` as
empty string, if you don't want to open default openlogin's modal simply pass any `loginProvider` in `login` function params, then it will start
authentication using provided loginProvider instead of showing modal to user for selecting loginProvider.

It first checks if user is already authenticated by looking for privKey on `openlogin` instance. If user is not authenticated then it calls `login`
function with following options:-

- `loginProvider` :- loginProvider is the authentication method which can be used for authenticating users. You can choose from a list of various
  login providers.

- `redirectUrl`: redirectUrl is the url of the page where user will be redirected after getting autheticated from openlogin frontend.

## Getting eip1193 provider from private key.

After calling `openlogin.login`, your application will have access to the user's private key at `openlogin.privKey`. You can use this private key to
generate a eip1193 provider using `@web3auth/ethereum-provider` package that we downloaded earlier. Following it code snippet of the `setProvider`
function which creates a `eip1193` provider as a instance variable on `EthereumPrivateKeyProvider` class as
`this.ethereumPrivateKeyProvider._providerProxy` and then we can use it with web3.js library.

```js
    import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
    export default Vue.extend({
      name: "App",
      data() {
        return {
          loading: false,
          privKey: "",
          eip1193Provider: null as SafeEventEmitterProvider | null,
          ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
          openlogin: null as OpenLogin | null,
        };
      },
      methods: {
          async setProvider(privKey: string) {
            this.ethereumPrivateKeyProvider = new EthereumPrivateKeyProvider({
              config: {
                // pass the chain config that you want to connect with
                chainConfig: {
                  chainId: "0x3",
                  rpcTarget: `https://ropsten.infura.io/v3/${YOUR_INFURA_ID}`,
                  displayName: "ropsten",
                  blockExplorer: "https://ropsten.etherscan.io/",
                  ticker: "ETH",
                  tickerName: "Ethereum",
                },
              },
            });
            // pass user's private key here.
            // after calling setupProvider, we can use`this.ethereumPrivateKeyProvider._providerProxy`
            // as a eip1193 provider
            await this.ethereumPrivateKeyProvider.setupProvider(privKey);

        },
      }
    })
```

## Initializing Provider

```ts
import Web3 from "web3";
const web3 = new Web3(this.ethereumPrivateKeyProvider._providerProxy);
```

## Using provider to send eth transaction

Now we have a eip1193 compatible provider i.e `this.ethereumPrivateKeyProvider._providerProxy` that we can use with web3 js to do transactions and
make rpc calls to connected chain.

Here we will simply sign a transaction to send eth using web3auth provider which is fully compatible with web3 js library for ethereum blockchain.

```ts
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
export default Vue.extend({
  name: "App",
  data() {
    return {
      loading: false,
      privKey: "",
      eip1193Provider: null as SafeEventEmitterProvider | null,
      ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
      openlogin: null as OpenLogin | null,
    };
  },
  methods: {
    async login() {
      // refer to login process above
    },
    async setProvider(privKey: string) {
      // refer to getting eip1193 provider from private key.
      // call `setProvider` after login with private key.
    },
    async sendEthTransaction() {
      try {
        if (!this.ethereumPrivateKeyProvider?._providerProxy) throw new Error("provider not set");
        const web3 = new Web3(this.ethereumPrivateKeyProvider._providerProxy);
        const accounts = await web3.eth.getAccounts();
        const txRes = await web3.eth.sendTransaction({ from: accounts[0], to: accounts[0], value: web3.utils.toWei("0.01") });
        console.log("txRes", txRes);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
```

## Personal Sign

```ts
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
export default Vue.extend({
  name: "App",
  data() {
    return {
      loading: false,
      privKey: "",
      eip1193Provider: null as SafeEventEmitterProvider | null,
      ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
      openlogin: null as OpenLogin | null,
    };
  },
  methods: {
    async login() {
    // refer to login process above
    // call `setProvider` after login with private key.
    }
    async setProvider(privKey: string) {
      // refer to getting eip1193 provider from private key.
    }
    async personalSign() {
      try {
        //  this.ethereumPrivateKeyProvider._providerProxy is added in `setProvider` method
        if (!this.ethereumPrivateKeyProvider?._providerProxy) throw new Error("provider not set");
        const web3 = new Web3(this.ethereumPrivateKeyProvider._providerProxy);

        const fromAddress = (await web3.eth.getAccounts())[0];

        const originalMessage = 'YOUR_MESSAGE';

        const signedMessage = await web3.eth.personal.sign(originalMessage, fromAddress);

      } catch (error) {
        console.log("error", error)
      }
    }
  }

})
```

## Sign Typed Data v1

```ts
import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
export default Vue.extend({
  name: "App",
  data() {
    return {
      loading: false,
      privKey: "",
      eip1193Provider: null as SafeEventEmitterProvider | null,
      ethereumPrivateKeyProvider: null as EthereumPrivateKeyProvider | null,
      openlogin: null as OpenLogin | null,
    };
  },
  methods: {
    async login() {
      // refer to login process above
      // call `setProvider` after login with private key.
    },
    async setProvider(privKey: string) {
      // refer to getting eip1193 provider from private key.
    },
    async personalSign() {
      try {
        // this.ethereumPrivateKeyProvider._providerProxy is added in `setProvider` method
        if (!this.ethereumPrivateKeyProvider?._providerProxy) throw new Error("provider not set");
        const web3 = new Web3(this.ethereumPrivateKeyProvider._providerProxy);

        // Get user's Ethereum public address
        const fromAddress = (await web3.eth.getAccounts())[0];

        const originalMessage = [
          {
            type: "string",
            name: "fullName",
            value: "John Doe",
          },
          {
            type: "uint32",
            name: "userId",
            value: "1234",
          },
        ];
        const params = [originalMessage, fromAddress];
        const method = "eth_signTypedData";

        const signedMessage = await web3.currentProvider.sendAsync({
          id: 1,
          method,
          params,
          fromAddress,
        });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
```

:::info

Refer to [`providers`](/api-reference/providers#eip1193-providers) documentation to know more about other rpc methods available on
`this.ethereumPrivateKeyProvider._providerProxy` provider.

:::

## Log out handler

In order to logout user you needs to call logout function available on openlogin's instance. Logout function will clears the sdk state and removes any
access to private key on frontend. You can redirect user to the exit page after logout function returns.

```js
    async logout() {
      if (!openlogin) throw new Error("OpenLogin is not initialized");
      await openlogin.logout({});
      this.privKey = openlogin.privKey;
      this.ethereumPrivateKeyProvider = null;
    },
```

### DONE!!

> You can find [the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/tree/feat/example/example/vue-app).
