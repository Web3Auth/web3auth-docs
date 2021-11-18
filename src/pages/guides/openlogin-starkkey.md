---
title: How to use Openlogin with Starknet.
image: "/contents/torus-starknet.png"
description: Learn to use OpenLogin to integrate with Starknet
order: 14
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## Introduction

This tutorial will guide you with steps to integerate Openlogin
authentication with Starknet in a react app.

At the end of this guide you should be able to:-
- Authenticate user with openlogin.
- Derive starknet friendly keys from user's openlogin private key.
- Signing and verifying arbitrary messages with stark keys.
- Deploy contracts and sign transactions on starknet.

You can find
[the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/blob/master/examples/starkware-react-example).

## Register your OpenLogin application

In order to use OpenLogin SDK, you'll need to create a project in
[Developer Dashboard](https://developer.tor.us) and get your client ID.

> App registration is not required for localhost development.

## Let's get started with code by installing depedencies using npm

To start with using openlogin with starknet, you need to install
[Openlogin](https://www.npmjs.com/package/@toruslabs/openlogin) ,
[Openlogin-Starkkey](https://www.npmjs.com/package/@toruslabs/openlogin-starkkey)
[Starknet.js](https://www.npmjs.com/package/starknet)

```shell
npm install --save @toruslabs/openlogin
npm install --save @toruslabs/openlogin-starkkey
npm install --save starknet

```


## Create and initialize openlogin instance

Start with creating a instance of openlogin class and initialize it using
`openlogin.init()` when application is mounted. After initialization it checks
if sdk has private key then user is already logged in.

We are using two options while creating openlogin class instance:-

- `clientId`: clientId is a public id which is used to to identify your app. You
  can generate your client id from
  [developer dashboard](http://developer.tor.us/). For localhost you can use any
  static random string as client id.

- `network`: network can be `testnet` or `mainnet`.

```js
useEffect(() => {
  setLoading(true)
  const sdkInstance = new OpenLogin({
    clientId: "YOUR_PROJECT_ID",
    network: "testnet"
  });
  async function initializeOpenlogin() {
    await sdkInstance.init();
    if (sdkInstance.privKey) {
      // qpp has access ot private key now
      ...
      ...
    }
    setSdk(sdkInstance);
    setLoading(false)
  }
  initializeOpenlogin();
}, []);
```

## Login

Once the sdk is initialized , then `openlogin.login` should be called when user
clicks on login button.

```js
async function handleLogin() {
    // privKey will be returned here only in case of popup mode or in case user is already logged in.
    // for redirect mode login, private key will be returned as `openlogin.privKey` after openlogin
    // is initialized using `init` function on successfully login redirect.
    const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
    });
    return privKey
}
```

Above code snippet will start the login flow for the user and redirect/popups openlogin authentication ui
for user based on the ux mode specified.

Openlogin sdk provides two UX modes (ie POPUP and REDIRECT) for login flow. You can use either depends on your
application UX by setting up `uxMode` option in login function, default is
`redirect`.

> Note: in above function, privKey will be returned here only in case of popup ux mode or in case user is already logged in. For redirect mode login, private key will be returned as `openlogin.privKey` after openlogin is initialized using `init` function which should be  called redirect url page mount.


In redirect mode user will be redirected completely out of app and will be
redirected back to `redirectUrl` after successful authentication, application
will have access to private key as `openlogin.privKey` after initializing
`openlogin` instance.

We recommend to use redirect mode because some browsers might block popup in some cases.

In PopUp mode, openlogin authentication window will open as a popup and app will
get private key when `openlogin.login` promise will resolve.

This example is compatible with both redirect and popup ux modes.

In the given code snippet, `openlogin.login` function is getting called along
with two options:-

- `loginProvider`: It specifies the login method which will be used to
  authenticate user. You can checkout
  [API Reference](/open-login/api-reference/usage) to know
  about all supported and custom login provider values.

- `redirectUrl`: User will be redirected to redirectUrl after login.

Checkout [API Reference](/open-login/api-reference/usage) for
other options available to pass in openlogin constructor and login function.

## Use the openlogin private key to derive starknet key pair

After login, application will have access to the user's private key from`openlogin.privKey` instance variable.
We cannot use this key with starknet ec curve specific signing functions,so we need to derive starknet compatible keys from `openlogin.privKey`.

In the code snippet below `getStarkHDAccount` function creates a HD account from openlogin's key. It will return
hex encoded private key and uncompressed stark public key.

You can pass account index to derive multiple keys deterministically from single openlogin's key.
Also note that we are passing `STARKNET_NETWORKS.testnet` as a argument to this function, it will derive different
key pairs for different networks. Refer to `STARKNET_NETWORKS` type for supported networks.


```js
    import { getStarkHDAccount, STARKNET_NETWORKS } from "@toruslabs/openlogin-starkkey";
    ...
    ...
    const getStarkAccount = (index: number): ec.KeyPair => {
      const account = getStarkHDAccount(openlogin.privKey, index, STARKNET_NETWORKS.testnet);
      return account;
    };

```

Now we have a starknet compatible key pair which will be use to sign and validate a signed message in the next step.

## Signing and validating a message with stark keys.

In order to sign a message with stark keys we need to hash the message using pedersen hash function which is also
available from `@toruslabs/openlogin-starkkey`.

In code snippet below we are signing utf-8 string message by hashing with pedersen hash function in the units of 252 bits recursively and then signing it using `sign` method of `@toruslabs/openlogin-starkkey`.


Note: The function `getPedersenHashRecursively` is for this guide demonstration purpose only, to know about message encoding for starkware messages refer to this link [here](https://docs.starkware.co/starkex-v3/starkex-deep-dive/message-encodings)


```js

 import { getStarkHDAccount, starkEc, sign, verify, STARKNET_NETWORKS } from "@toruslabs/openlogin-starkkey";
 import { binaryToHex, binaryToUtf8, bufferToBinary, bufferToHex, hexToBinary } from "enc-utils";
 import { pedersen } from "starknet";

   /**
   *
   * @param str utf 8 string to be signed
   * @param prefix utf-8 prefix padded to 252 bits (optional)
   * @returns
   */
  const getPedersenHashRecursively = (str: string, prefix?: string): string => {
    const TEST_MESSAGE_SUFFIX = prefix || "OPENLOGIN STARKWARE-";
    const x = Buffer.from(str, "utf8");
    const binaryStr = hexToBinary(bufferToHex(x));
    const rounds = Math.ceil(binaryStr.length / 252);
    if (rounds > 1) {
      const currentChunkHex = binaryToHex(binaryStr.substring(0, 252));
      const hash = pedersen([strToHex(TEST_MESSAGE_SUFFIX), new BN(currentChunkHex, "hex").toString(16)]);
      const pendingStr = binaryToUtf8(binaryStr.substring(252));
      return getPedersenHashRecursively(pendingStr.replace("\n", ""), hash);
    }
    const currentChunkHex = binaryToHex(binaryStr.padEnd(252, "0"));
    return pedersen([utils.number.toBN(strToHex(TEST_MESSAGE_SUFFIX), "hex"), utils.number.toBN(currentChunkHex, "hex")]);
  };


  const signMessageWithStarkKey = (e: any) => {
    e.preventDefault();
    const accIndex = 1;
    const message = e.target[0].value;
    const keyPair = getStarkAccount(accIndex);
    const hash = getPedersenHashRecursively(message);
    const signed = sign(keyPair, removeHexPrefix(hash));
    printToConsole({
      pedersenHash: hash,
      info: `Message signed successfully: OPENLOGIN STARKWARE- ${message}`,
      signedMesssage: signed,
    });
  };

  const validateStarkMessage = (e: any) => {
    e.preventDefault();
    const signingAccountIndex = 1;
    const originalMessage = e.target[0].value;
    const signedMessage = JSON.parse(e.target[1].value) as ec.Signature;
    if (!signedMessage.r || !signedMessage.s || signedMessage.recoveryParam === undefined) {
      printToConsole("Invalid signature format");
      return;
    }
    const finalSignature = {
      r: new BN(signedMessage.r, "hex"),
      s: new BN(signedMessage.s, "hex"),
      recoveryParam: signedMessage.recoveryParam,
    };
    const keyPair = getStarkAccount(signingAccountIndex);
    const hash = getPedersenHashRecursively(originalMessage);
    const isVerified = verify(keyPair, removeHexPrefix(hash), finalSignature as unknown as ec.Signature);
    printToConsole(`Message is verified: ${isVerified}`);
  };
```

## Deploying account contract with stark public key.

In starknet account model is different from ethereum, unlike ethereum's externally owned accounts, in starknet every account is a contract and that contract forwards messages signed from the account's keypair to invoke specified destination contract address function.

To begin with we need to can deploy a account contract and link it with starknet's keypair public key. In this guide we are using open-zeppelin's implementation of account contract.

Account deployment should/can be effectively done from backend code but here for demo purpose we are doing from frontend js only.

Before deploying we need to compile our contract, you can follow this [tutorial](https://www.cairo-lang.org/docs/quickstart.html) to setup your cairo lang environment.

We will be using a pre-compiled Account contract available [here](https://github.com/himanshuchawla009/cairo-contracts/blob/master/account_compiled.json) for this example.

In given code snippet we are deploying account contract and initializing it with stark public key in the
contract constructor.

> Note: This example uses starknet alpha3 account contract implementation, if you are using older Account
contract, function signatures might be different for you.


```ts
import { getStarkHDAccount, STARKNET_NETWORKS, sign, verify } from "@toruslabs/openlogin-starkkey";
import { binaryToHex, binaryToUtf8, bufferToBinary, bufferToHex, hexToBinary, removeHexPrefix } from "enc-utils";
import type { ec } from "elliptic";
import { deployContract, CompiledContract, waitForTx, Contract, Abi, utils, hashMessage, pedersen } from "starknet";
import CompiledAccountContractAbi from "./contracts/account_abi.json";
import { BN } from "bn.js";

 useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/himanshuchawla009/cairo-contracts/master/account_compiled.json")
      .then((response) => response.json())
      .then((responseJson) => {
        setCompiledAccountContract(responseJson);
      })
      .catch((error) => {
        printToConsole(error);
      });
     ...
     ...
  }, []);
  const deployAccountContract = async () => {
    try {
      if (!CompiledAccountContract) {
        printToConsole("Compiled contract is not downloaded, plz try again");
        return;
      }
      const accountIndex = 1;
      const keyPair = getStarkAccount(accountIndex);
      const compressedPubKey = keyPair.getPublic().getX().toString(16, 64);
      const txRes = await deployContract(JSON.parse(JSON.stringify(CompiledAccountContract)) as CompiledContract, [
        new BN(compressedPubKey, 16).toString(),
      ]);
      printToConsole("deployed account contract,", {
        contractRes: txRes,
        l2AccountAddress: txRes.address,
        txStatusLink: `https://voyager.online/tx/${txRes.transaction_hash}`,
      });
      await waitForTx(txRes.transaction_hash);
      printToConsole("successfully included in a block on l2", {
        txStatusLink: `https://voyager.online/tx/${txRes.transaction_hash}`,
      });
    } catch (error) {
      printToConsole(error);
    }
  };
```

## Initializing Account contract with contract address.

After deploying account contract with public key we need to initialize the contract with account's address.

Contract deployment response will return us the contract address as `txRes.address` in above code snippet,
We need to initialize our contract with this address by calling initialize function of the contract.
Similar to ethereum we need contract abi, address, method and calldata to invoke any function on starknet
contract.

Here is an example snippet to invoke initialize function with the contract address. After account contract will be initialized we will be able to call execute function of account contract which is basically used to forward messages to any contract on starknet. It acts as an gateway for your account to communicate with any other contract on starknet.

Ideally you want to save this contract address and wallet public key mapping somewhere in your backend or any account registry contract on starknet. In this example we are not persisting it anywhere.


```ts
import { waitForTx, Contract, Abi, utils } from "starknet";
import CompiledAccountContractAbi from "./contracts/account_abi.json";
import { BN } from "bn.js";
  const initializeAccountContract = async () => {
    try {
      if (!contractAddress) {
        printToConsole("PLease input contract/account address");
        return;
      }
      const contract = new Contract(CompiledAccountContractAbi as Abi[], contractAddress);

      const txRes = await contract.invoke("initialize", {
        _address: contractAddress,
      });

      printToConsole("deployed account contract,", {
        contractRes: txRes,
        txStatusLink: `https://voyager.online/tx/${txRes.transaction_hash}`,
      });
      await waitForTx(txRes.transaction_hash);
      printToConsole("successfully included in a block", {
        txStatusLink: `https://voyager.online/tx/${txRes.transaction_hash}`,
      });
    } catch (error) {
      printToConsole(error);
    }
  };
```

## Execute signed message call on account contract

Now we have our contract initialized, we can call execute function of contract which accepts following parameters:-

- to: Address of the smart contract which want to sent this message to.
- selector: Keccak hash of function name which want to invoke on smart contract.
- calldata: Array of function args

We will be using invoke function of starknet js lib to call execute function and we will be calling `set_public_key` function of same account that we just deployed earlier, we will set `to` param as address of same account contract.

> Note: While deployment we initialized this contract with account index 1 public key and now this function is setting a new public key in to this contract that belongs to account index 2
of this hd account, once this transaction is successful, you can only using account index 2 for
executing future transactions.

```ts

import { getStarkHDAccount, STARKNET_NETWORKS, sign, verify } from "@toruslabs/openlogin-starkkey";
import { binaryToHex, binaryToUtf8, bufferToBinary, bufferToHex, hexToBinary, removeHexPrefix } from "enc-utils";
import type { ec } from "elliptic";
import { deployContract, CompiledContract, waitForTx, Contract, Abi, utils, hashMessage, pedersen } from "starknet";
import CompiledAccountContractAbi from "./contracts/account_abi.json";
import { BN } from "bn.js";

  const updatePublickeyInContract = async () => {
    try {
      if (!contractAddress) {
        printToConsole("PLease input contract/account address");
        return;
      }
      const newAccountIndex = 3;
      const keyPair = getStarkAccount(newAccountIndex);
      const compressedPubKey = keyPair.getPublic().getX().toString(16, 64);
      const account = new Contract(CompiledAccountContractAbi as Abi[], contractAddress);

      const { res: nonceRes } = await account.call("get_nonce");
      const msgHash = removeHexPrefix(
        hashMessage(
          contractAddress,
          contractAddress,
          utils.starknet.getSelectorFromName("set_public_key"),
          [
            new BN(compressedPubKey, 16).toString(),
            // contractAddress,
          ],
          nonceRes.toString()
        )
      );

      const signingAccountIndex = 1;
      const signingKeyPair = getStarkAccount(signingAccountIndex);
      // eslint-disable-next-line no-debugger
      debugger;
      const { r, s } = sign(signingKeyPair, msgHash);
      const res = await account.invoke(
        "execute",
        {
          to: contractAddress,
          selector: utils.starknet.getSelectorFromName("set_public_key"),
          calldata: [
            new BN(compressedPubKey, 16).toString(),
            // contractAddress,
          ],
        },
        [utils.number.toHex(r), utils.number.toHex(s)]
      );

      printToConsole(res);
      await waitForTx(res.transaction_hash);
      printToConsole("transaction successfully included in a block", {
        txStatusLink: `https://voyager.online/tx/${res.transaction_hash}`,
      });
    } catch (error) {
      console.log(error);
      printToConsole((error as Error).toString());
    }
  };
```

## Logging out user

In order to logout user you needs to call logout function available on sdk
instance. Logout function will clears the sdk state and removes any access to
private key on frontend. You can pass various other options in logout function
like `fastLogin` , `redirectUrl` etc. To know more about that checkout
[API Reference](/open-login/api-reference/usage)

```js
const handleLogout = async () => {
  setLoading(true);
  await openlogin.logout();
  setLoading(false);
};
```

### DONE!!

> You can checkout example of this example app
> here.[the source code of this is example on Github](https://github.com/torusresearch/OpenLoginSdk/blob/master/examples/starkware-react-example).
> You can found a working demo application here:- https://openlogin-starknet.surge.sh
