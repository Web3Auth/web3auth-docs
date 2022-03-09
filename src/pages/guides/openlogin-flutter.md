---
title: Plug n Play Web3Auth on Flutter
image: "/contents/openlogin-react-native.png"
description: Learn to integrate Web3Auth with Flutter applications
order: 23
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [openlogin-flutter-sdk](https://github.com/torusresearch/openlogin-flutter-sdk) to integrate OpenLogin into your
application. OpenLogin is Web3Auth's hosted auth solution.

Source code of the example can also be found in the repository.

## Installation

```yml
dependencies:
  openlogin_flutter:
    git: https://github.com/torusresearch/openlogin-flutter-sdk.git
```

Please refer to the native SDKs for platform-specific configuration.

- [Android SDK](https://github.com/torusresearch/openlogin-android-sdk)
- [iOS SDK](https://github.com/torusresearch/openlogin-swift-sdk)

For iOS, the redirectUrl parameter is fixed, which is `\(bundleId)://auth`, and does not need to be added as a iOS Custom URL Scheme.

For Android, the redirectUrl parameter is specificable, and has to be added into the AndroidManifest.xml.

## Usage

Refer to the demo app for more detailed example.

```dart
// Login
final OpenLoginResponse response = await OpenloginFlutter.triggerLogin(provider: Provider.google);

// Logout
await OpenloginFlutter.triggerLogout();

```
