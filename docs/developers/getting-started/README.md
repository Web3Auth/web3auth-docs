---

title: Getting Started
sidebar_label: Getting Started

---


Torus streamlines all DApp login processes and allows users to log in to your
DApp with Google OAuth Login accounts without the need for any complicated
tools.

---

## Environment requirements

To ensure an efficient implementation process, we highly encourage you to configure the environment to the requirements below :

* NodeJS: 10.x

## Install Torus

Integrating Torus with your DApp is as seamless as using it. Let us start by first installing Torus onto your DApp website.

### NPM Package

You can install via a [npm package](https://www.npmjs.com/package/@toruslabs/torus-embed).

* Basic:

```javascript
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

const torus = new Torus();
await torus.init();
await torus.login(); // await torus.ethereum.enable()
const web3 = new Web3(torus.provider);
```

* Advanced:

```javascript
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

const torus = new Torus({
  buttonPosition: "top-left" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "kovan", // default: mainnet
    chainId: 42, // default: 1
    networkName: "Kovan Test Network" // default: Main Ethereum Network
  },
  showTorusButton: false // default: true
});
await torus.login(); // await torus.ethereum.enable()
const web3 = new Web3(torus.provider);
```

Please refer to the [examples](https://github.com/torusresearch/torus-embed/tree/master/examples) folder for sample implementations

### Web3/ether.js

Integrating with Torus gives you a provider, which can be wrapped by the Web3. This instance can be used to play with, read more on [Web3's Documentation](https://web3js.readthedocs.io/en/1.0/). You can implement web3 functionalities just like you would with Metamask.

### AngularJS users

**Please include the following NPM packages:**

```bash
process, buffer
```

And add the following code into polyfills.ts.

```javascript
import * as process from 'process';
window['process'] = process;
(window as any).global = window;
(window as any).global.Buffer = (window as any).global.Buffer || require('buffer').Buffer;
```

### Script Tag

The code snippet below sets Torus as the default login method for the DApp, paste the following script to the &lt;body&gt; of index.html.

{% embed url="https://gist.github.com/chaitanyapotti/733405286923fa047af4cb26d167acd4" caption="Torus embed script" %}

