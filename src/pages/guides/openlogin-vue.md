---
title: How to Add OpenLogin to a Vue app
image: "/contents/openlogin-vue.png"
description: Learn to build a simple Vue app secured by OpenLogin.
order: 2
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Instruction

This tutorial will show you how to integrate OpenLogin authentication into one
of a Vue.js application.

You can find [the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/tree/feat/example/example/vue-app).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Create your Vue app

> Ignore this step if you're integrating into an existing Vue project.

Use [Vue CLI](https://cli.vuejs.org/guide/installation.html) to create a new Vue app:

```shell
vue create hello-world
```

## Install OpenLogin SDK

Install Torus OpenLogin SDK using either npm or yarn:

<Tabs
  defaultValue="npm"
  values={[
    { label: "npm", value: "npm" },
    { label: "Yarn", value: "yarn" },
  ]}
>
<TabItem value="npm">

```shell
npm i --save @toruslabs/openlogin
```

</TabItem>

<TabItem value="yarn">

```shell
yarn add @toruslabs/openlogin
```

</TabItem>

</Tabs>

## Initialize the SDK on your application's mounted event

Initialize the SDK on your application `mounted` lifecycle function:

```js
<script>
export default {
  name: "App",
  data() {
    return {
      privKey: "",
      verifier: {
        loginProvider: "google", // "facebook", "apple", "twitter", "reddit", etc. See full list of supported logins: https://docs.tor.us/direct-auth/verifiers
        clientId: "YOUR PROJECT ID",
      }
    };
  },
  methods: {
    async login() {
      await this.sdk.login({
        loginProvider: this.verifier.loginProvider,
        redirectUrl: "http://localhost:3000/redirect"
      });
      console.log("private key: ", this.sdk.privKey);
    },
  },
  async mounted() {
    if(this.sdk) return;
    this.sdk = new OpenLogin({
      clientId: this.verifier.clientId,
       network: "testnet" // valid values (testnet or mainnet)
    });

    await this.sdk.init();
    if (this.sdk.privKey) {
      console.log("Private key: ", this.sdk.privKey);
    }
  }
};
</script>
```

## Use the private key

After calling `openlogin.login` and handling redirect result, your application will have access to the user's private key at `openlogin.privKey`. You can use this private key to sign messages, generate public key to encrypt and decrypt data later, etc.

### Generate public key

You can use [@toruslabs/eccrypto](https://www.npmjs.com/package/@toruslabs/eccrypto) to generate public key from the user's private key:

```js
import eccrypto from "@toruslabs/eccrypto";

// Corresponding uncompressed (65-byte) public key.
const publicKey = eccrypto.getPublic(privateKey);
```

This public key can be shared with everyone who wants to communicate with the user.

### Sign data

The private key can be used to sign data to indicate that a message is sent by the user.

```js
eccrypto.sign(privateKey, msg).then(function(sig) {
  console.log("Signature in DER format:", sig);
});
```

### Verify signature

Everyone with the user's public key can verify if the message is signed by the user. For example, on server side, you can verify a signed message as a way to authenticate the user:

```js
eccrypto.verify(publicKey, msg, sig).then(function() {
  console.log("Signature is OK");
}).catch(function() {
  console.log("Signature is BAD");
});
```
