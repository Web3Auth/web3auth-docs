import { CustomChainConfig } from "@web3auth/base";
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { SolanaWallet } from "@web3auth/solana-provider";
import type { SafeEventEmitterProvider } from "@web3auth/base";

export default class SolanaRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  getAccounts = async (): Promise<string[]> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);
      const acc = await solanaWallet.requestAccounts();
      return acc;
    } catch (error) {
      console.error("Error", JSON.stringify(error));
      return [];
    }
  };

  getBalance = async (): Promise<void> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);
      const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
      const conn = new Connection(connectionConfig.rpcTarget);

      const accounts = await solanaWallet.requestAccounts();
      const balance = await conn.getBalance(new PublicKey(accounts[0]));
    } catch (error) {
      console.error("Error", JSON.stringify(error));
    }
  };

  signMessage = async (): Promise<void> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);
      const msg = Buffer.from("Test Signing Message ", "utf8");
      const res = await solanaWallet.signMessage(msg);
    } catch (error) {
      console.error("Error", JSON.stringify(error));
    }
  };

  signAndSendTransaction = async (): Promise<string> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);
      const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
      const conn = new Connection(connectionConfig.rpcTarget);

      const pubKey = await solanaWallet.requestAccounts();
      const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
      const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(pubKey[0]),
        toPubkey: new PublicKey(pubKey[0]),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      });
      const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
      const { signature } = await solanaWallet.signAndSendTransaction(transaction);
      return signature;
    } catch (error) {
      console.error("Error", JSON.stringify(error));
      throw error;
    }
  };

  signTransaction = async (): Promise<string> => {
    try {
      const solanaWallet = new SolanaWallet(this.provider);
      const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
      const conn = new Connection(connectionConfig.rpcTarget);

      const pubKey = await solanaWallet.requestAccounts();
      const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
      const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(pubKey[0]),
        toPubkey: new PublicKey(pubKey[0]),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      });
      const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
      const signedTx = await solanaWallet.signTransaction(transaction);
      return signedTx.signature?.toString() || "";
    } catch (error) {
      console.error("Error", JSON.stringify(error));
      throw error;
    }
  };
}
