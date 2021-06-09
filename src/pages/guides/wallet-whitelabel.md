---
title: Whitelabel Torus Wallet for Your Brand
image: "/contents/openlogin-react.png"
description:
  Customize Torus Wallet UI, branding, and translations to fit your brand
order: 1
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will show you how to customize Torus Wallet UI, branding, and
translations to fit your brand. The example is written in React but similar
configuration can be applied for all-kind web applications.

You can find
[the source code of this is example on Github](https://github.com/phuctm97/torus-embed-react).

## Install Torus Embed SDK

Install Torus Embed SDK using either npm or yarn:

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" }, { label:
"Yarn", value: "yarn" }, ]}>

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

Initialize the SDK after your application is mounted (using `useEffect` hook in
React or `mounted` lifecycle function in Vue) by calling `torus.init()`.

Use `whiteLabel` option to add white-labeling configuration for your
application.

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
              torusBrand1: "#000000",
              torusGray2: "#FBF7F3",
            },
          },
          logoDark: "https://startrail.io/images/front/startrail-top__main.svg", // Dark logo for light background
          logoLight: "https://images.toruswallet.io/startrail-logo-light.svg", // Light logo for dark background
          tncLink: {
            en: "http://example.com/tnc/en",
            ja: "http://example.com/tnc/ja",
          },
          privacyPolicy: {
            en: "http://example.com/tnc/en",
            ja: "http://example.com/tnc/ja",
          },
          contactLink: {
            en: "http://example.com/tnc/en",
            ja: "http://example.com/tnc/ja",
          },
          disclaimerHide: true,
          topupHide: false,
          featuredBillboardHide: true,
        },
      });
    })();
  }, []);

  // ...
}
```

## Whitelabel options

### Brand logo and color

To customize brand logo and color, use `logoDark`, `logoLight`, and `theme`:

```js
await torus.init({
  whiteLabel: {
    theme: {
      isDark: false,
      colors: {
        torusBrand1: "#000000",
        torusGray2: "#FBF7F3",
      },
    },
    logoDark: "https://startrail.io/images/front/startrail-top__main.svg", // Dark logo for light background
    logoLight: "https://images.toruswallet.io/startrail-logo-light.svg", // Light logo for dark background
  },
  // ...
});
```

Example result of above configuration:

![Image](/contents/whitelabel-1.png)

![Image](/contents/whitelabel-2.png)

### Change links and URLs

You can change different links and URLs in Torus Wallet by using `privacyPolicy`
and `contactLink` options. You can configure for multiple languages, too:

```js
await torus.init({
  whiteLabel: {
    privacyPolicy: {
      en: "http://example.com/tnc/en",
      ja: "http://example.com/tnc/ja",
    },
    contactLink: {
      en: "http://example.com/tnc/en",
      ja: "http://example.com/tnc/ja",
    },
  },
  // ...
});
```

When user clicks on one of the links, they will be navigated to URLs that you
configured:

![Image](/contents/whitelabel-3.png)

### API Reference

See more details about white-labeling API at
[API Reference](/wallet/api-reference/class#whitelabel).
