---
title: Plug n Play Web3Auth on Native Android (Java, Web3Auth)
image: "/contents/openlogin-android.png"
description: Learn to integrate Web3Auth with Android native applications
order: 20
category: walletAndApp
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [web3auth-android-sdk](https://github.com/torusresearch/web3auth-android-sdk) to integrate Web3Auth into your
Android application.

Source code of the example can also be found in the repository.

## Requirements

Android API version 21 or newer.

## Installation

### Add Web3Auth to Gradle

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
    implementation 'org.torusresearch:web3auth-android-sdk:-SNAPSHOT'
}
```

### Permissions

Open your app's `AndroidManifest.xml` file and add the following permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Integrating

### Configure an Plug n Play project

Go to [Developer Dashboard](https://dashboard.web3auth.io), create or select an Plug n Play project:

- Add `{YOUR_APP_PACKAGE_NAME}://auth` to **Whitelist URLs**.

- Copy the Project ID for usage later.

### Configure Deep Link

Open your app's `AndroidManifest.xml` file and add the following deep link intent filter to your sign-in activity:

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <!-- Accept URIs: {YOUR_APP_PACKAGE_NAME}://* -->
    <data android:scheme="{YOUR_APP_PACKAGE_NAME}" />
</intent-filter>
```

### Initialize Web3Auth

In your sign-in activity', create a `Web3Auth` instance with your Web3Auth project's configurations and configure it like this:

```kotlin
class MainActivity : AppCompatActivity() {
    // ...
    private lateinit var web3Auth: Web3Auth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        web3Auth = Web3Auth(
            Web3AuthOptions(context = this,
                clientId = getString(R.string.web3auth_project_id),
                network = Web3Auth.Network.MAINNET,
                redirectUrl = Uri.parse("{YOUR_APP_PACKAGE_NAME}://auth"),
                whiteLabel = WhiteLabelData(  // Optional param
                    "Web3Auth Sample App", null, null, "en", true,
                    hashMapOf(
                        "primary" to "#123456"
                    )
                )
            )
        )

        // Handle user signing in when app is not alive
        web3Auth.setResultUrl(intent?.data)

        // ...
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)

        // Handle user signing in when app is active
        web3Auth.setResultUrl(intent?.data)

        // ...
    }

    private fun onClickLogin() {
        val selectedLoginProvider = Provider.GOOGLE   // Can be Google, Facebook, Twitch etc
        val loginCompletableFuture: CompletableFuture<State> = web3Auth.login(LoginParams(selectedLoginProvider))

        loginCompletableFuture.whenComplete { state, error ->
            if (error == null) {
                // render logged in UI
            } else {
                // render login error UI
            }

        }
    }

    //...
}
```

Make sure your sign-in activity `launchMode` is set to `singleTop` in your `AndroidManifest.xml`:

```xml
<activity
    android:launchMode="singleTop"
    android:name=".YourActivity">
    // ...
</activity>
```

## API Reference

```kotlin
class Web3Auth(
    var web3AuthOptions: Web3AuthOptions
) {
    // Trigger login flow that shows a modal for user to select one of supported providers to login,
    // e.g. Google, Facebook, Twitter, Passwordless, etc
    fun login() {}

    // Trigger login flow using login params. Specific Login Provider can be set through Login Params
    fun login(
        loginParams: LoginParams,
    ) {}
}


data class Web3AuthOptions(
    context: Context, // Android context to launch Web-based authentication, usually is the current activity
    clientId: String, // Your Web3Auth project ID
    network: Network, // Network to run Web3Auth, either MAINNET or TESTNET
    redirectUrl: Uri? = null, // URL that Web3Auth will redirect API responses
    whiteLabel: WhiteLabelData? = null,  // Optional param to configure look and feel of web3uth login page
    loginConfig: HashMap<String, LoginConfigItem>? = null, // Optional
)

data class LoginParams(
    val loginProvider: Provider,
    val reLogin: Boolean? = null,
    val skipTKey: Boolean? = null,
    val extraLoginOptions: ExtraLoginOptions? = null,
    val redirectUrl: Uri? = null,
    val appState: String? = null
)
```
