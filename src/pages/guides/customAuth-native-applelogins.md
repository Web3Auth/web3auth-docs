---
title: How to Integrate CustomAuth and apple logins
image: "/contents/Torus-apple.png"
description: Learn to use CustomAuth with native apple logins.
order: 12
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you on how to integrate CustomAuth with native apple
logins, i.e., "Sign in with apple"

You can find
[the source code of this is example on Github](https://github.com/torusresearch/torus-apple-nativelogin-demo).

## Register your CustomAuth application

In order to use Torus CustomAuth SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us)

1. Verifier type: "Custom"
2. JWK endpoint - https://appleid.apple.com/auth/keys

## Let's get started with code by installing depedency using SPM or Cocoapods

[TorusDirectSwiftSDK](https://github.com/torusresearch/torus-direct-swift-sdk/)
[JWTDecode](https://github.com/auth0/JWTDecode.swift)

## Import SDKs

Import TorusDirectSwiftSDK and JWTDecode where required using

```swift
import TorusSwiftDirectSDK
import JWTDecode
import AuthenticationServices
```

## Add a Sign in with Apple Button button using ASAuthentication

[Apple documentation](https://developer.apple.com/documentation/authenticationservices/implementing_user_authentication_with_sign_in_with_apple)

```swift
func setupProviderLoginView() {
    let authorizationButton = ASAuthorizationAppleIDButton()
    authorizationButton.addTarget(self, action: #selector(handleAuthorizationAppleIDButtonPress), for: .touchUpInside)
    self.loginProviderStackView.addArrangedSubview(authorizationButton)
}
```

## Request authorization on button click

```swift
func handleAuthorizationAppleIDButtonPress() {
    let appleIDProvider = ASAuthorizationAppleIDProvider()
    let request = appleIDProvider.createRequest()
    request.requestedScopes = [.fullName, .email]

    let authorizationController = ASAuthorizationController(authorizationRequests: [request])
    authorizationController.delegate = self
    authorizationController.presentationContextProvider = self
    authorizationController.performRequests()
}
```

## Add delegate methods to handle post authorization

```swift
func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
  switch authorization.credential {
    case let appleIDCredential as ASAuthorizationAppleIDCredential:

      // Create an account in your system.
      let userIdentifier = appleIDCredential.user

      // Get and decode the signed JWT toekn
      let token = String(data: appleIDCredential.identityToken!, encoding: .utf8)!
      let JWT = try? JWTDecode.decode(jwt: token)

      // Add different claims here.
      let claim = JWT?.claim(name: "sub")
      guard let sub = claim?.string else {
          print("sub missing")
          return
      }

      // initializeSDK
      let tdsdk = TorusSwiftDirectSDK(aggregateVerifierType: .singleLogin, aggregateVerifierName: "apple-native", subVerifierDetails: [], network: .ROPSTEN, loglevel: .error)
      tdsdk.getTorusKey(verifier: "apple-native", verifierId: sub, idToken: token).done{ data in
          // Data contains private and public key
          print(data)

          // Add segues to viewControllers here.
          let alert = UIAlertController(title: "Private Key", message: data["privateKey"] as? String, preferredStyle: UIAlertController.Style.alert)
          alert.addAction(UIAlertAction(title: "OK", style: UIAlertAction.Style.default, handler: nil))
          self.present(alert, animated: true, completion: nil)
      }.catch{ error in
          print(error)
      }
    default:
      break
  }
}
```

## Conclusion

You can use the above private key in your web3 SDK. Here's GIF from the example app.

<img src="/contents/torus-apple-native.gif" dynsrc="/contents/torus-apple-native.gif" loop="infinite" height="500"/>
