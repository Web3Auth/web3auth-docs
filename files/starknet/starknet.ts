import type { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { getStarkHDAccount, STARKNET_NETWORKS, sign, verify } from "@toruslabs/openlogin-starkkey";
import { binaryToHex, binaryToUtf8, bufferToBinary, bufferToHex, hexToBinary, removeHexPrefix } from "enc-utils";
import type { ec } from "elliptic";
import { defaultProvider } from "starknet";
import CompiledAccountContractAbi from "./contracts/account_abi.json";
import { BN } from "bn.js";
import { ec as elliptic } from "elliptic";
import { grindKey, ec as starkEc } from "@toruslabs/starkware-crypto";
import fs from "fs";

export default class EthereumRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }
  async getAccounts(): Promise<string[]> {
    try {
      const web3 = new Web3(this.provider as any);
      const accounts = await web3.eth.getAccounts();
      return accounts;
    } catch (error: unknown) {
      console.error((error as Error).message);
      throw error;
    }
  }

  getStarkAccount = async (): Promise<elliptic.KeyPair | undefined> => {
    try {
      const starkEcOrder = starkEc.n;
      const provider = this.provider;
      const privKey = await provider.request({ method: "eth_private_key" });
      const account = starkEc.keyFromPrivate(grindKey(privKey as string, starkEcOrder as BN), "hex");
      return account;
    } catch (error: unknown) {
      console.error((error as Error).message);
      throw error;
    }
  };

  getStarkKey = async (): Promise<string | undefined> => {
    try {
      const account = await this.getStarkAccount();
      return account?.getPrivate("hex");
    } catch (error: unknown) {
      console.error((error as Error).message);
      throw error;
    }
  };

  deployAccount = async (): Promise<string | undefined> => {
    try {
      const account = await this.getStarkAccount();
      const compiledArgentAccount = JSON.parse(fs.readFileSync("./account.json").toString("ascii"));
      const accountResponse = await defaultProvider.deployContract({
        contract: compiledArgentAccount,
        addressSalt: account.getPublic("hex"),
      });
      return accountResponse;
    } catch (error: unknown) {
      console.error((error as Error).message);
      throw error;
    }
  };
}
