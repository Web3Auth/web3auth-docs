---
title: Plug n Play Web3Auth on React Native
image: "/contents/openlogin-react-native.png"
description: Learn to integrate Web3Auth with React Native applications
order: 21.5
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [openlogin-react-native-sdk](https://github.com/torusresearch/openlogin-react-native-sdk) to integrate OpenLogin into your application. OpenLogin is Web3Auth's hosted auth solution.

Source code of the example can also be found in the repository.

## Installation

```shell
npm install @web3auth/react-native-sdk
```

Please refer to the native SDKs for platform-specific configuration.

- [Android SDK](https://github.com/torusresearch/openlogin-android-sdk)
- [iOS SDK](https://github.com/torusresearch/openlogin-swift-sdk)

For iOS, the redirectUrl parameter is fixed, which is \(bundleId)://auth, and does not need to be added as a iOS Custom URL Scheme.

For Android, the redirectUrl parameter is specifiable, and has to be added into the AndroidManifest.xml.


## Usage

Refer to the demo app for more detailed example.

## Initialize the SDK on your application's mounted event

Initialize the SDK after your application is mounted using `useEffect` hook and call `openlogin.login` when user clicks login in your application.

```jsx
import OpenloginReactNativeSdk, {
  LoginProvider,
  OpenloginNetwork,
} from 'openlogin-react-native-sdk';

React.useEffect(() => {
  OpenloginReactNativeSdk.init({
    // Your clientId obtained from OpenLogin dashboard.
    clientId:
      'BKJ3HmEqVmMHbFeW6E-CVPmdnVrnPhdBEI82kxgBVJGtaS4XlylvAE-1gmsv_Fa1CDj-xIhvTf3Kgd6mTn8nJtw',
    // TESTNET is currently broken on iOS.
    network: OpenloginNetwork.MAINNET,
    // redirectUrl only applies for Android SDK, it is designated by iOS SDK in iOS, which is \(bundleId)://auth
    redirectUrl: 'com.example.openloginreactnativesdk://auth',
  })
    .then(result => console.log(`success: ${result}`))
    .catch(err => console.log(`error: ${err}`));
}, []);

OpenloginReactNativeSdk.login({
  provider: LoginProvider.GOOGLE,
})
  .then(result => console.log(`success: ${result.privKey}, ${result.userInfo}`))
  .catch(err => console.log(`error: ${err}`))

// For iOS, it is also possible to get the default OpenLogin login screen, which let users to choose their own providers, by not specifying a provider.
// For Android, not specifying a provider will default to Google.
OpenloginReactNativeSdk.login({})
  .then(result => console.log(`success: ${result.privKey}, ${result.userInfo}`))
  .catch(err => console.log(`error: ${err}`))

```
