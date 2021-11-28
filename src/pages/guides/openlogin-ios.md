---
title: Get Started With OpenLogin Swift SDK
image: "/contents/openlogin-ios.jpg"
description: Learn to integrate OpenLogin with iOS native applications
order: 21
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you to use [openlogin-swift-sdk](https://github.com/torusresearch/openlogin-swift-sdk) to integrate OpenLogin into your iOS application.

Source code of the example can also be found in the repository.

## Requirements

- iOS 12+ (older version support coming soon)
- Xcode 11.4+ / 12.x
- Swift 4.x / 5.x

## Installation

If you are using the Swift Package Manager, open the following menu item in Xcode:

**File > Swift Packages > Add Package Dependency...**

In the Choose Package Repository prompt add this url:

```
https://github.com/torusresearch/openlogin-swift-sdk
```

## Getting Started

Authentication with In-App Web-based Flow (iOS 12+):

1. Import **OpenLogin** into your project.

```swift
import OpenLogin
```

2. Present the In-App Web-based Login modal.

```swift
 OpenLogin
    .webAuth()
    .start {
        switch $0 {
        case .success(let result):
            print("""
                Signed in successfully!
                    Private key: \(result.privKey)
                    User info:
                        Name: \(result.userInfo.name)
                        Profile image: \(result.userInfo.profileImage ?? "N/A")
                        Type of login: \(result.userInfo.typeOfLogin)
                """)
        case .failure(let error):
            print("Error: \(error)")
        }
    }
```

## Configuration

In order to use OpenLogin you need to provide your OpenLogin **ClientId** and which **Network** to run it.

- Go to [Torus Developer](https://developer.tor.us), create or open an existing OpenLogin project and copy your project ID, which is the **ClientId**.

In your application bundle add a plist file named **OpenLogin.plist** with the following information:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>ClientId</key>
  <string>YOUR_OPENLOGIN_CLIENT_ID</string>
  <key>Network</key>
  <string>mainnet | testnet</string>
</dict>
</plist>
```

## Next steps

See our [API reference](https://docs.tor.us/open-login/api-reference/usage) for more advanced usage.
