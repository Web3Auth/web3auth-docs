---
title: Ethereum
sidebar_label: Ethereum
---

associated methods or objects for interacting with the Ethereum blockchain

---

## web3

The associated web3 object. Please refer to web3
[documentation](https://github.com/ethereum/wiki/wiki/JavaScript-API) for more
information

## ethereum

The associated ethereum object, which acts as a web3 provider. For more
information on the window.ethereum specification, refer to Metamask
documentation [here](https://github.com/MetaMask/metamask-inpage-provider).

**Examples**

```javascript
await torus.ethereum.enable(); // does the same thing as `await torus.login();`
```

## Provider

The associated provider object

**Reference**

```typescript
declare class Provider {
  send(payload: JsonRPCRequest, callback: Callback<JsonRPCResponse>): any;
}

interface JsonRPCResponse {
  jsonrpc: string;
  id: number;
  result?: any;
  error?: string;
}

interface JsonRPCRequest {
  jsonrpc: string;
  method: string;
  params: any[];
  id: number;
}

interface Callback<ResultType> {
  (error: Error): void;
  (error: null, val: ResultType): void;
}
```

**Examples**

```javascript
const web3 = new Web3(torus.provider);
```

## setProvider

This changes the network provider to a specified network. You can pass an RPC
endpoint here. Opens a popup that requires user confirmation.

```javascript
await torus.setProvider(params);
```

**Parameters**

- `params` - `NetworkInterface` : The network options. Used to specify a network
  provider
  - `host` - `string` : The hostname or the `HTTPS` `JSON-RPC` endpoint.
    Supported options for hostname are `mainnet` `rinkeby` `ropsten` `kovan`
    `goerli` `localhost` `matic`
  - `chainId` - `number` \(optional\) : ChainId of the network.
  - `networkName` - `string` \(optional\) : Name of the network.

**Returns**

- `Promise<void>` : Returns a promise which resolves to void.

**Reference**

```typescript
interface NetworkInterface {
  host:
    | "mainnet"
    | "rinkeby"
    | "ropsten"
    | "kovan"
    | "goerli"
    | "localhost"
    | "matic"
    | string;
  chainId?: number;
  networkName?: string;
}
```

**Examples**

```javascript
await torus.setProvider({
  host: "rinkeby", // default : 'mainnet'
});
```

```javascript
await torus.setProvider({
  host: "https://ethboston1.skalenodes.com:10062", // mandatory
  chainId: 1, // optional
  networkName: "Skale Network", // optional
});
```
