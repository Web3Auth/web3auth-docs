import type { IProvider } from "@web3auth/base";
// HIGHLIGHTSTART-installationWeb3
import Web3 from "web3";
// HIGHLIGHTEND-installationWeb3

export default class EthereumRpc {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<string> {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const web3 = new Web3(this.provider as any);

      // Get the connected Chain's ID
      const chainId = await web3.eth.getChainId();
      // HIGHLIGHTEND-evmRPCFunctions

      return chainId.toString();
    } catch (error) {
      return error as string;
    }
  }

  async getAccounts(): Promise<any> {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0];
      // HIGHLIGHTEND-evmRPCFunctions

      return address;
    } catch (error) {
      return error;
    }
  }

  async getBalance(): Promise<string> {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0];

      // Get user's balance in ether
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address) // Balance is in wei
      );
      // HIGHLIGHTEND-evmRPCFunctions

      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(): Promise<any> {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      const destination = fromAddress;

      const amount = web3.utils.toWei("0.01"); // Convert 1 ether to wei

      // Submit transaction to the blockchain and wait for it to be mined
      const receipt = await web3.eth.sendTransaction({
        from: fromAddress,
        to: destination,
        value: amount,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      // HIGHLIGHTEND-evmRPCFunctions

      return receipt;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage() {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      const originalMessage = "YOUR_MESSAGE";

      // Sign the message
      const signedMessage = await web3.eth.personal.sign(
        originalMessage,
        fromAddress,
        "test password!" // configure your own password here.
      );
      // HIGHLIGHTEND-evmRPCFunctions

      return signedMessage;
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      // HIGHLIGHTSTART-evmRPCFunctions
      const privateKey = await this.provider.request({
        method: "eth_private_key",
      });
      // HIGHLIGHTEND-evmRPCFunctions

      return privateKey;
    } catch (error) {
      return error as string;
    }
  }
}
