---
title: Integrate DirectAuth with Blockchain Networks
---

## Conflux

To integrate DirectAuth with [Conflux network](https://confluxnetwork.org/),
initialize DirectAuth SDK and trigger user login as described in
[Quick start](../quick-start):

- Initialize DirectAuth SDK:

  ```javascript
  const torus = new DirectWebSdk({
    baseUrl: "http://localhost:3000/serviceworker/",
    network: "testnet", // details for test net
  });
  await torus.init();
  ```

- Trigger user login:

  ```javascript
  const { privateKey, userInfo } = await torus.triggerLogin({
    typeOfLogin: "google",
    verifier: "MY VERIFIER NAME",
    clientId: "MY CLIENT ID GOOGLE",
  });
  ```

- Use Torus `privateKey` to initialize Conflux SDK instance:

  ```javascript
  const cfx = await Conflux.create({
    url: "https://test.confluxrpc.org/v2",
  });
  const account = cfx.wallet.addPrivateKey(privateKey);

  // You can communicate with the Conflux chain now. See https://github.com/Conflux-Chain/js-conflux-sdk:w
  const txHash = await cfx.sendTransaction({
    from: account,
    to: RECEIVER_ADDRESS,
    value: Drop.fromCFX(1),
  });
  fs.writeFileSync("transaction.txt", txHash);

  const balance = await cfx.getBalance(account.address);
  console.log(Drip(balance).toCFX());
  ```
