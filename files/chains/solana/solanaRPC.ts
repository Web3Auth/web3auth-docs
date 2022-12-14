// HIGHLIGHTSTART-installationSolana
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
// HIGHLIGHTEND-installationSolana
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
// HIGHLIGHTSTART-installationSolana
import { SolanaWallet } from "@web3auth/solana-provider";
// HIGHLIGHTEND-installationSolana

export default class SolanaRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  getAccounts = async (): Promise<string[]> => {
    try {
      // HIGHLIGHTSTART-solanaRPCFunctions
      const solanaWallet = new SolanaWallet(this.provider);
      const acc = await solanaWallet.requestAccounts()
      // HIGHLIGHTEND-solanaRPCFunctions

      return acc;
    } catch (error) {
      return error as string[];
    }
  };

  getBalance = async (): Promise<string> => {
    try {
      // HIGHLIGHTSTART-solanaRPCFunctions
      const solanaWallet = new SolanaWallet(this.provider);
      const connectionConfig = await solanaWallet.request<CustomChainConfig>({
        method: "solana_provider_config",
        params: [],
      });
      const conn = new Connection(connectionConfig.rpcTarget);

      const accounts = await solanaWallet.requestAccounts();
      const balance = await conn.getBalance(new PublicKey(accounts[0]));
      // HIGHLIGHTEND-solanaRPCFunctions

      return balance.toString();
    } catch (error) {
      return error as string;
    }
  };

  signMessage = async (): Promise<string> => {
    try {
      // HIGHLIGHTSTART-solanaRPCFunctions
      const solanaWallet = new SolanaWallet(this.provider);
      const msg = Buffer.from("Test Signing Message ", "utf8");
      const res = await solanaWallet.signMessage(msg);
      // HIGHLIGHTEND-solanaRPCFunctions

      return res.toString();
    } catch (error) {
      return error as string;
    }
  };

  sendTransaction = async (): Promise<string> => {
    try {
      // HIGHLIGHTSTART-solanaRPCFunctions
      const solanaWallet = new SolanaWallet(this.provider);

      const accounts = await solanaWallet.requestAccounts();

      const connectionConfig = await solanaWallet.request<CustomChainConfig>({
        method: "solana_provider_config",
        params: [],
      });
      const connection = new Connection(connectionConfig.rpcTarget);

      const block = await connection.getLatestBlockhash("finalized");

      const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(accounts[0]),
        toPubkey: new PublicKey(accounts[0]),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      });

      const transaction = new Transaction({
        blockhash: block.blockhash,
        lastValidBlockHeight: block.lastValidBlockHeight,
        feePayer: new PublicKey(accounts[0]),
      }).add(TransactionInstruction);

      const { signature } = await solanaWallet.signAndSendTransaction(
        transaction
      );
      // HIGHLIGHTEND-solanaRPCFunctions

      return signature;
    } catch (error) {
      return error as string;
    }
  };

  signTransaction = async (): Promise<string> => {
    try {
      // HIGHLIGHTSTART-solanaRPCFunctions
      const solanaWallet = new SolanaWallet(this.provider);
      const connectionConfig = await solanaWallet.request<CustomChainConfig>({
        method: "solana_provider_config",
        params: [],
      });
      const conn = new Connection(connectionConfig.rpcTarget);

      const pubKey = await solanaWallet.requestAccounts();
      const { blockhash } = await conn.getRecentBlockhash("finalized");
      const TransactionInstruction = SystemProgram.transfer({
        fromPubkey: new PublicKey(pubKey[0]),
        toPubkey: new PublicKey(pubKey[0]),
        lamports: 0.01 * LAMPORTS_PER_SOL,
      });
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: new PublicKey(pubKey[0]),
      }).add(TransactionInstruction);
      const signedTx = await solanaWallet.signTransaction(transaction);
      // HIGHLIGHTEND-solanaRPCFunctions

      return signedTx.signature?.toString() || "";
    } catch (error) {
      return error as string;
    }
  };

  getPrivateKey = async (): Promise<string> => {
    // HIGHLIGHTSTART-solanaRPCFunctions
    const privateKey = await this.provider.request({
      method: "solanaPrivateKey",
    });
    // HIGHLIGHTEND-solanaRPCFunctions

    return privateKey as string;
  };
}
