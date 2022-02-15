---
title: Plug n Play Web3Auth on Expo
image: "/contents/openlogin-react-native.png"
description: Learn to integrate Web3Auth with Expo applications
order: 22
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [openlogin-expo-sdk](https://github.com/torusresearch/openlogin-expo-sdk) to integrate OpenLogin into your
application. OpenLogin is Web3Auth's hosted auth solution.

Source code of the example can also be found in the repository.

## Installation

```sh
npm install openlogin-expo-sdk
```

To allow the SDK to work with exported Expo Android apps, you need to place a designated scheme into `app.json`, like below:

```js
    "scheme": "openloginexposdkexampleexpo",
```

## Usage

Please see [App.tsx](./openlogin-expo-sdk-example-expo/App.tsx) for detailed example.

```js
const openlogin = new OpenLogin({
  clientId: "BC5bANkU4-fil7C5s1uKzRfF0VGqbuaxDQiLnQ8WgF7SEA32lGegAhu7dk4dZf3Rk397blIvfWytXwsRvs9dOaQ",
  network: Network.TESTNET,
});
const state = await openlogin.login({
  loginProvider: LoginProvider.GOOGLE,
  redirectUrl: resolvedRedirectUrl,
});
```
