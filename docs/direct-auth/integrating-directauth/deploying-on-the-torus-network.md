---

title: Deploying on the Torus Network
sidebar_label: Deploying on the Torus Network

---


Reach out to hello@tor.us or our [dev chat](https://t.me/torusdev) to get your application's scripts deployed.

Once you've [designed the key management architecture](designing-your-key-management-architecture.md) for your application we can deploy your app-specific verifier scripts on the Torus Network. This is done by submitting an append only transaction that creates the verifier scripts, which are highly limited in updatability. As such, it's important to get them deployed correctly. 

Once deployed, the application can then access and use these verifier scripts via one or more of our SDKs listed [here](./). Most applications to test out the deployed scripts on testnet before deploying on mainnet for production usage. 



