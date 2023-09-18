// HIGHLIGHTSTART-installationTezos
//@ts-ignore
import * as tezosCrypto from "@tezos-core-tools/crypto-utils";
// HIGHLIGHTEND-installationTezos
import { IProvider } from "@web3auth/base";
// HIGHLIGHTSTART-installationTezos
import { TezosToolkit } from "@taquito/taquito";
import { hex2buf } from "@taquito/utils";
import { InMemorySigner } from "@taquito/signer";
// HIGHLIGHTEND-installationTezos

// HIGHLIGHTSTART-tezosRPCFunctions
const tezos = new TezosToolkit("https://rpc.tzbeta.net/");
// HIGHLIGHTEND-tezosRPCFunctions

export default class TezosRpc {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  getTezosKeyPair = async (): Promise<any> => {
    try {
      // HIGHLIGHTSTART-tezosRPCFunctions
      const privateKey = (await this.provider.request({ method: "private_key" })) as string;
      const keyPair = tezosCrypto.utils.seedToKeyPair(hex2buf(privateKey));
      // HIGHLIGHTEND-tezosRPCFunctions

      return keyPair;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // List of available RPC Nodes -- https://tezostaquito.io/docs/rpc_nodes

  setProvider = async () => {
    // HIGHLIGHTSTART-tezosRPCFunctions
    const keyPair = await this.getTezosKeyPair();
    // use TacoInfra's RemoteSigner for better security on mainnet..
    tezos.setSignerProvider(await InMemorySigner.fromSecretKey(keyPair?.sk as string));
    // HIGHLIGHTEND-tezosRPCFunctions
  };

  getAccounts = async () => {
    try {
      // HIGHLIGHTSTART-tezosRPCFunctions
      const keyPair = await this.getTezosKeyPair();
      // HIGHLIGHTEND-tezosRPCFunctions

      return keyPair?.pkh;
    } catch (error) {
      console.error("Error", error);
    }
  };

  getBalance = async () => {
    try {
      // HIGHLIGHTSTART-tezosRPCFunctions
      const keyPair = await this.getTezosKeyPair();
      // keyPair.pkh is the account address.
      const balance = await tezos.tz.getBalance(keyPair?.pkh as string);
      // HIGHLIGHTEND-tezosRPCFunctions

      return balance;
    } catch (error) {
      return error;
    }
  };

  signMessage = async () => {
    try {
      // Reference: https://tezostaquito.io/docs/signing
      const keyPair = await this.getTezosKeyPair();
      const signer = new InMemorySigner(keyPair.sk);
      const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
      const signature = await signer.sign(message);
      // HIGHLIGHTEND-tezosRPCFunctions

      return signature;
    } catch (error) {
      return error;
    }
  };

  signAndSendTransaction = async () => {
    try {
      // HIGHLIGHTSTART-tezosRPCFunctions
      await this.setProvider();
      // example address.
      const address = "tz1dHzQTA4PGBk2igZ3kBrDsVXuvHdN8kvTQ";

      // NOTE: The account which is used to send tezos shoudld have some balance for this transaction to go through.
      // If there is no balance, then we will receive an error - "implicit.empty_implicit_contract"
      // To solve this error, use a faucet account to send some tzs to the account.
      // Alternate solution:
      // 1. Use this link: https://tezostaquito.io/docs/making_transfers#transfer-from-an-implicit-tz1-address-to-a-tz1-address
      // 2. Modify the address and use the pkh key extracted from web3auth seed in the live code editor and click run code.
      // 3. Check balance in the account and have some fun.
      const op = await tezos.wallet
        .transfer({
          to: address,
          amount: 0.00005,
        })
        .send();

      const txRes = await op.confirmation();
      // HIGHLIGHTEND-tezosRPCFunctions

      return txRes;
    } catch (error) {
      return error;
    }
  };
}
