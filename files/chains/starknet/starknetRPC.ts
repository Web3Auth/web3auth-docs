// @ts-ignore
// HIGHLIGHTSTART-installationStarkNet
import starkwareCrypto from "@starkware-industries/starkware-crypto-utils";
// HIGHLIGHTEND-installationStarkNet
import type { IProvider } from "@web3auth/base";
// HIGHLIGHTSTART-installationStarkNet
import { defaultProvider } from "starknet";

// @ts-ignore
import CompiledAccountContractAbi from "./ArgentAccount.json";
// HIGHLIGHTEND-installationStarkNet

export default class StarkNetRpc {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  getStarkAccount = async (): Promise<any> => {
    try {
      // HIGHLIGHTSTART-starkNetRPCFunctions
      const privateKey = await this.provider.request({ method: "private_key" });
      const keyPair = starkwareCrypto.ec.keyFromPrivate(privateKey, "hex");
      const account = starkwareCrypto.ec.keyFromPublic(keyPair.getPublic(true, "hex"), "hex");
      // HIGHLIGHTEND-starkNetRPCFunctions

      return account;
    } catch (error) {
      return error;
    }
  };

  getStarkKey = async (): Promise<string | undefined> => {
    try {
      // HIGHLIGHTSTART-starkNetRPCFunctions
      const account = await this.getStarkAccount();
      const publicKeyX = account.pub.getX().toString("hex");
      // HIGHLIGHTEND-starkNetRPCFunctions

      return publicKeyX;
    } catch (error) {
      return error as string;
    }
  };

  deployAccount = async (): Promise<string | any> => {
    try {
      // HIGHLIGHTSTART-starkNetRPCFunctions
      const account = await this.getStarkAccount();
      if (account) {
        const contract = JSON.parse(JSON.stringify(CompiledAccountContractAbi));
        const response = await defaultProvider.deployContract({
          contract,
      });
      // HIGHLIGHTEND-starkNetRPCFunctions

        return response;
      }
    } catch (error) {
      return error as string;
    }
    return undefined;
  };
}
