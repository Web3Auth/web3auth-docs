---

title: Designing your Key Management Architecture
sidebar_label: Designing your Key Management Architecture

---



This document is an aggregation of several questions which may help determine the architecture that fits your application and users best.

### Which logins should my application support?

With the DirectAuth integration, you can select a combination of logins from this [list](../supported-authenticators-verifiers.md). There are some nuances with certain login providers, so don't hesitate to get in touch.

### Should different logins lead to the same key?

You can choose to connect logins with the same verifierID. For example if a user uses generic email logins and a gmail login to login on different occasions he/she can still retrieve the same key. This can only be done on logins which share a common unique identifier for a user. Read more about [aggregating logins](../supported-authenticators-verifiers.md#aggregating-logins-verifiers).

### Which platforms does my application need to be on?

DirectAuth is compatible on both web, mobile, native and even CLI applications, which means developers can integrate its key management solutions regardless of their specific infrastructure of choice. It is important to ensure that all platforms in which the key is access are front-end/client side device, in most cases.

### How does DirectAuth fit with XXX?

The small API surface also means DirectAuth is composable - you can combine it with a meta-transaction flows, multisigs, and other cryptographic protocols. Its easy to build ontop of and generally we fit with most other technology stacks, including but not limited to; your flavour scalability solutions, meta transactions, smart contract wallets, different elliptic curve pairs and even RSA. 

Also checkout [Compatibility and Common Patterns ](../compatibility-and-common-patterns/)for more on inspiration on how to use DirectAuth or don't hesitate to get in touch if you have any further queries at hello@tor.us.



