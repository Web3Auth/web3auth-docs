---
title: Developers
sidebar_label: Developers
---

## Torus

### How do I start using Torus?

For DApp integrations, refer the ["Getting Started"](../../getting-started.md)
section. To use the wallet, head over to
[https://app.tor.us](https://app.tor.us)

### Can I use the Torus wallet outside of a browser context? Why doesn't it work in NodeJS?

There are several restrictions. Some integrations are possible \(eg. native
support, Chrome extensions\), whereas others are not \(eg. using Torus wallet in
a server context\). Right now, we only have browser based support.

Using it directly in NodeJS via require will **not** work since the SDK relies
on browser capabilities like service workers and window.open.

### Why is the Torus Wallet login modal hidden below other elements on my page?

Instead of setting a high CSS z-index, which can be quite annoying, we choose to
let Vuetify take care of this. If you find that you are still facing a problem,
you can add CSS for the selector "\#torusIframe" to set the z-index yourself.

### What browsers are supported?

Chrome, Edge, Firefox, Brave, Safari and other major browsers. IE and private
browsing in Safari are not supported. On browsers that don't support
ancestorOrigins \(eg. Firefox\), we make use of the document.referrer, so you
will have to ensure that your app is served with an appropriate Referrer-Policy.

### I'm getting share decryption issues, how do I resolve that?

You might be running on non-secure domains, which don't have window.crypto
enabled. Try loading your site over https or localhost.

### Why doesn't Torus Wallet work for my dapp in Firefox/IE?

The Torus Wallet relies on many browser-specific technologies which differ in
implementation. We try to make the Torus Wallet compatible with as many browsers
as possible, but browser updates can change some of these behaviours. If your
dapp isn't working in a specific browser, please check out the issues
[here](https://github.com/torusresearch/torus-website/issues) to see if it has
already been raised or resolved.

### How is my private key stored?

Torus splits a user’s private keys into shares across a network of nodes, and
allows a user to retrieve this using natural login mechanisms like social
authentication. You need access to more than half of the shares to reconstruct
the private key.

### Should I backup my keys?

Our nodes have managed volumes and snapshot policies to ensure that key shares
are not lost. We also have coverage that extends to key loss due to technical
failures.

### Can I get access to a user's private keys?

No...

### When do I need to update the SDK to get new features?

The SDK \([torus-embed](https://github.com/torusresearch/torus-embed)\) is a
Javascript package that loads our wallet website
\([torus-website](https://github.com/torusresearch/torus-website)\) in an
iframe. Methods that are called from the SDK are relayed to the iframe via the
browser's Window.postMessage API.

By default, the SDK always fetches the latest version of the website, so if
there are new features within the website, it is automatically available when
the website is updated. You can turn this off by specifying integrityParams in
the initialization.

However, if there are new features in the SDK you'll need to update the SDK to
get the new features. The SDK cannot update itself automatically.

## Privacy

### Will Torus have access to a user's contacts from the OAuth login?

No, the initial login only requests for the minimal public information, which
you can see during the OAuth popup screen by the 3rd-party provider. The purpose
of the login is only for verification of your identity, not for access to your
personal information.

### How long is the user login persisted? Can Google/Facebook/Reddit track my activity?

We log you out of your 3rd-party account immediately after your identity is
verified. The only information that is accessible to these 3rd-party login
providers is that you were logged in \(and logged out\) with Torus.

### Is it possible to allow users to persist their session with the DApp, so that they don't have to login again?

It is definitely possible but keeping the user logged in for just that session
gives better privacy guarantees for users. There is no easy way for Torus to
ensure that users are logged out by the DApp, so we opted to keep user sessions
self contained.

Most Oauth providers already solve this problem by auto-approving the login
request if the user logged in recently, and it may not even require user
interaction. For example, for Facebook login, users do not even need to click
anything if they have recently logged in.

## Node operation

### What is Shamir secret sharing?

2 points make a line right? Draw a straight line and write down the coordinates
of 3 points. Erase the line.

You now need at least 2 out of 3 of the points are required to reconstruct the
line.

This is a 2/3 Shamir secret sharing of the original line.

### How can I become one of the nodes running Torus?

We are currently running the network as a permissioned network, so there is a
whitelist process, please reach out at hello@tor.usPrivate Key

## Any other questions?

If you have any questions that are yet to be addressed here, feel free to
contact us via email at hello@tor.us or on Telegram at
[https://t.me/TorusLabs](https://t.me/TorusLabs).
