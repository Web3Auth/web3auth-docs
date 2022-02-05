---
title: Whitelabel Torus Wallet for Your Brand
image: "/contents/torus-whitelabel.png"
description: Customize Torus Wallet UI, branding, and translations to fit your brand
order: 0
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will show you how to customize Torus Wallet UI, branding, and translations to fit your brand. The example is written in React but
similar configuration can be applied for all-kind web applications.

You can find [the source code of this is example on Github](https://github.com/phuctm97/torus-embed-react).

## Install Torus Embed SDK

Install Torus Embed SDK using either npm or yarn:

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" }, { label: "Yarn", value: "yarn" }, ]}>

<TabItem value="npm">

```shell
npm i --save @toruslabs/torus-embed
```

</TabItem>

<TabItem value="yarn">

```shell
yarn add @toruslabs/torus-embed
```

</TabItem>

</Tabs>

## Initialize the SDK on your application's mounted event

Initialize the SDK after your application is mounted (using `useEffect` hook in React or `mounted` lifecycle function in Vue) by calling
`torus.init()`.

Use `whiteLabel` option to add white-labeling configuration for your application.

```jsx
function App() {
  useEffect(() => {
    (async () => {
      const torus = new Torus({});
      await torus.init({
        // Example white-labeling configurations
        whiteLabel: {
          theme: {
            isDark: false,
            colors: {
              torusBrand1: "#282c34",
            },
          },
          logoDark: "https://tkey.surge.sh/images/Device.svg", // Dark logo for light background
          logoLight: "https://tkey.surge.sh/images/Device.svg", // Light logo for dark background
          topupHide: false,
          featuredBillboardHide: true,
          disclaimerHide: true,
          defaultLanguage: "en",
        },
      });
    })();
  }, []);

  // ...
}
```

## Whitelabel options

### Brand logo and color

To customize brand logo and color, use `theme`, `logoDark`, and `logoLight`:

```js
await torus.init({
  whiteLabel: {
    theme: {
      isDark: false,
      colors: {
        torusBrand1: "#282c34",
      },
    },
    logoDark: "https://tkey.surge.sh/images/Device.svg", // Dark logo for light background
    logoLight: "https://tkey.surge.sh/images/Device.svg", // Light logo for dark background
  },
  // ...
});
```

- `theme.isDark`: default color mode of the Wallet

- `theme.colors.torusBrand1`: color of icons, buttons, and texts.

- `theme.logoDark` and `theme.logoLight`: logo variants for dark and light mode.

**Example white-labelled UI**

<figure>
    <img src="/contents/whitelabel-popup.png"
         alt="Popup" />
    <figcaption style={{textAlign: "center"}}>Popup UI</figcaption>
</figure>

<figure>
    <img src="/contents/whitelabel-wallet-light.png"
         alt="Popup" />
    <figcaption style={{textAlign: "center"}}>Wallet UI in Light mode</figcaption>
</figure>

<figure>
    <img src="/contents/whitelabel-wallet-dark.png"
         alt="Popup" />
    <figcaption style={{textAlign: "center"}}>Wallet UI in Dark mode</figcaption>
</figure>

### Show/hide features

You can turn on/off certain features by use `topupHide`, `featuredBillboardHide`, `disclaimerHide`. All features are enabled by default.

```js
await torus.init({
  whiteLabel: {
    topupHide: false,
    featuredBillboardHide: true,
    disclaimerHide: true,
  },
  // ...
});
```

### Select default language

Choose a default language to match your target users by setting `defaultLanguage`, default is `en`.

```js
await torus.init({
  whiteLabel: {
    defaultLanguage: "en",
  },
  // ...
});
```

### API Reference

See more details about white-labeling API at [API Reference](/wallet/api-reference/class#whitelabel).
