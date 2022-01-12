---
title: How to Integrate CustomAuth and Native iOS (Swift)
image: "/contents/openlogin-ios.png"
description: Learn to integrate CustomAuth with iOS native applications
order: 21
category: auth
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [customauth-swift-sdk](https://github.com/torusresearch/customauth-swift-sdk) to integrate CustomAuth into your iOS application. CustomAuth is Web3Auth's customizable auth solution.

Source code of the example can also be found in the repository.

## Requirements

- iOS 12+ (older version support coming soon)
- Xcode 11.4+ / 12.x
- Swift 5.x

## Installation

If you are using the Swift Package Manager, open the following menu item in Xcode:

**File > Swift Packages > Add Package Dependency...**

In the Choose Package Repository prompt add this url:

```
https://github.com/torusresearch/customauth-swift-sdk
```

If you are using Cocoapods, add the following entry to your `Podfile`:

```
pod 'CustomAuth', '~> 2.0.0'
```

## Initialization

Initalize the SDK depending on the login you require. The example below does so for a single google login. `redirectURL` refers to a url for the login flow to redirect into your app, it should have a scheme that is registered by your app, for example `com.mycompany.myapp://redirect`. `browserRedirectURL` refers to a page that the browser should use in the login flow, it should have a http or https scheme.
```swift
import CustomAuth

let sub = SubVerifierDetails(loginType: .installed, // default .web
                            loginProvider: .google,
                            clientId: "<your-client-id>",
                            verifierName: "<verifier-name>",
                            redirectURL: "<your-redirect-url>",
                            browserRedirectURL: "<your-browser-redirect-url>")

let tdsdk = CustomAuth(aggregateVerifierType: "<type-of-verifier>", aggregateVerifierName: "<verifier-name>", subVerifierDetails: [sub], network: <etherum-network-to-use>)

// controller is used to present a SFSafariViewController.
tdsdk.triggerLogin(controller: <UIViewController>?, browserType: <method-of-opening-browser>, modalPresentationStyle: <style-of-modal>).done{ data in
    print("private key rebuild", data)
}.catch{ err in
    print(err)
}
```
Logins are dependent on verifier scripts/verifiers. There are other verifiers including `single_id_verifier`, `and_aggregate_verifier`, `or_aggregate_verifier` and `single_logins` of which you may need to use depending on your required logins. To get your application's verifier script setup, do reach out to hello@tor.us or to read more about verifiers do checkout [the docs](https://docs.tor.us/customauth/supported-authenticators-verifiers).

## Handling the OAuth/Authentication URL redirects

You can setup the redirect in two ways; URL Schemes or Universal links. Typically we recommend users to use URL Schemes as Universal Links require an additional user interaction. The `handle(url: URL)` class method implements a NSNotification to handle URL callbacks.

### Setting up URL Schemes

In the info tab of your target, add your application name (ex. my-wallet-app). Add the redirect URL to the list of allowed redirect URLs in the OAuth providers settings page.

- For SwiftUI, without using delegate (iOS 14+)
```swift
.onOpenURL { url in
    guard let url = URLContexts.first?.url else {
        return
    }
    CustomAuth.handle(url: url)
}
```

- For SwiftUI, implement the following in your SceneDelegate
```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url else {
        return
    }
    CustomAuth.handle(url: url)
}
```

- For Storyboard, implement the following in your app AppDelegate:
```swift
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    if url.host == "my-wallet-app" {
        CustomAuth.handle(url: url)
    }
    return true
}
```

### Universal Links

Universal Links allow your users to intelligently follow links to content inside your app or to your website. Checkout [Documentation](https://developer.apple.com/ios/universal-links/) for implementation.
- For Swift UI,
```swift
func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb, let urlToOpen = userActivity.webpageURL else {
        return
    }
    CustomAuth.handle(url: urlToOpen)
}
```

- For Storyboard,
```swift
func application(_ application: UIApplication, continue userActivity: UIUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool
{
    // Get URL components from the incoming user activity
    guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
        let incomingURL = userActivity.webpageURL,
        let components = NSURLComponents(url: incomingURL, resolvingAgainstBaseURL: true) else {
            return false
    }
    CustomAuth.handle(url: incomingURL)
}

```

After this you're good to go, reach out to hello@tor.us to get your verifier spun up on the testnet today!
## Next steps

See our [README](https://github.com/torusresearch/customauth-swift-sdk) for more advanced usage.
