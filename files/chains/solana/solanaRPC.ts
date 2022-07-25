import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import type { SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";

export default class SolanaRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  getAccounts = async (): Promise<string[]> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);

      // Get user's Solana public address
      const accounts = await solanaWallet.requestAccounts();

      return accounts;
    } catch (error) {
      return error as string[];
    }
  };

  getBalance = async (): Promise<string> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);

      // Get user's Solana public address
      const accounts = await solanaWallet.requestAccounts();

      const connectionConfig = await solanaWallet.request({
        method: "solana_provider_config",
        params: [],
      });
      const connection = new Connection(connectionConfig.rpcTarget);

      // Fetch the balance for the specified public key
      const balance = await connection.getBalance(new PublicKey(accounts[0]));

      return balance.toString();
    } catch (error) {
      return error as string;
    }
  };

  signTransaction = async (): Promise<string> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);

      // Get user's Solana public address
      const accounts = await solanaWallet.requestAccounts();

      const connectionConfig = await solanaWallet.request({
        method: "solana_provider_config",
        params: [],
      });
      const connection = new Connection(connectionConfig.rpcTarget);

      const { blockhash } = await connection.getRecentBlockhash("finalized");
      const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new solanaWallet.PublicKey(accounts[0]),
        toPubkey: new solanaWallet.PublicKey("oWvBmHCj6m8ZWtypYko8cRVVnn7jQRpSZjKpYBeESxu"),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      });
      const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(accounts[0]) }).add(TransactionInstruction);

      const signedTx = await solanaWallet.signTransaction(transaction);
      return signedTx.signature?.toString() || "";
    } catch (error) {
      return error as string;
    }
  };

  signMessage = async (): Promise<string> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);

      const msg = Buffer.from("Test Signing Message ", "utf8");

      const result = await solanaWallet.signMessage(msg);
      return result.toString();
    } catch (error) {
      return error as string;
    }
  };

  getPrivateKey = async (): Promise<string> => {
    const privateKey = await this.provider.request({
      method: "solanaPrivateKey",
    });

    return privateKey;
  };
}
