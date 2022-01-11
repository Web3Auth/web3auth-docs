---
title: How to Integrate CustomAuth and Android logins
image: "/contents/openlogin-android.png"
description: Learn to use CustomAuth with native android logins.
order: 12
category: auth
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you on how to integrate CustomAuth [customauth-android-sdk](https://github.com/torusresearch/customauth-android-sdk) with native android logins, i.e., "Sign in with google"

## Requirements

Android API version 24 or newer is required.

## Installation

### Add CustomAuth to Gradle

In your project-level `build.gradle` file, add JitPack repository:

```groovy
allprojects {
    repositories {
        // ...
        maven { url "https://jitpack.io" }
    }
}
```

Then, in your app-level `build.gradle` dependencies section, add the following:

```groovy
dependencies {
    // ...
    implementation 'org.torusresearch:customauth-android-sdk:2.1.0'
}
```

## Register redirect URI for your application

Register the startup activity using manifest placeholder in your build.gradle (when a custom scheme is used):

```groovy
android.defaultConfig.manifestPlaceholders = [
  'torusRedirectScheme': 'YOUR_APP_SCHEME', // (torusapp)
  'torusRedirectHost': 'YOUR_APP_HOST', // (org.torusresearch.torusdirectandroid)
  'torusRedirectPathPrefix': 'YOUR_REDIRECT_PATH' // (/redirect)
]
```


## Permissions

Open your app's `AndroidManifest.xml` file and add the following permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```


## Instantiate the SDK

Instantiate the SDK with the redirect URI you configured in the previous step:

```java

DirectSdkArgs args = new DirectSdkArgs("YOUR_APP_SCHEME://YOUR_APP_HOST/YOUR_REDIRECT_PATH", TorusNetwork.TESTNET);
TorusDirectSdk torus = new TorusDirectSdk(args, this);

```

## Trigger user login

Trigger user login with your specific provider client ID.

```java

CompletableFuture<TorusLoginResponse> response = this.torusSdk.triggerLogin(
  new SubVerifierDetails("google", "YOUR VERIFIER ID", "YOUR GOOGLE CLIENT ID"));

```
### Proguard

No Proguard configuration is required. SDK will automatically append necessary rules to the project's proguard-rules.txt file.
