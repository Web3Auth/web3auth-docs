---

title: User Frequently Asked Questions
sidebar_label: User Frequently Asked Questions

---

## Private Key

### How is my private key stored?

Torus splits a user’s private keys into shares across a network of nodes, and allows a user to retrieve this using natural login mechanisms like social authentication. One needs more than half of the shares to reconstruct the private key

### Does Google/Facebook/ other OAuths have access to my private key?

No they do not. Please refer to Q1 to understand how a private key is being stored.

### What is Shamir's secret sharing?

It is a form of secret sharing, where a secret is divided into parts, giving each participant its own unique part.
To reconstruct the original secret, a minimum number of parts is required. In the threshold scheme this number is less than the total number of parts. Otherwise all participants are needed to reconstruct the original secret.

### How solid is the blockchain ? Should the user have a secondary external backup for his keys ?

A user's private key shares aren't stored on the blockchain, so even if the blockchain is "hacked" and the data on it is leaked, it doesnt affect user's keys. Hence, we live it up to users on their decision to have a secondary external backup for their keys. But there is no need to, really.

## Privacy

### Will Torus have access to my contacts related to my OAuth login?

No, we will not.

### What does Torus do to my email/OAuth details?

We use it for identification. All the user login data is encrypted. We do not sell or distribute any user data.

## Using Torus

### How do I start using Torus?

Developers can refer the ""Getting Started' section. (Hyperlink included to direct to Getting Started).
Users can start using Torus by the guide or visiting https://app.tor.us or from the respective DApps who have integrated us shown below :"

### How is my login method related to how I send and receive something from my wallet?

Each OAuth is tied to a unique Ethereum address.

### How can i become one of the nodes running Torus?

Torus allow more node operators to join freely, so that this system can be even more decentralised. there is a whitelist process, please reach out at hello@tor.us

## Have a question that is not answered here?

If you have any questions that are yet to be addressed here, feel free to contact us via email at hello@tor.us or on Telegram at [https://t.me/TorusLabs](https://t.me/TorusLabs).
