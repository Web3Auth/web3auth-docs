import { CustomChainConfig } from "@web3auth/base";
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { SolanaWallet } from "@web3auth/solana-provider";

const getAccounts = async (): Promise<string[]> => {
  try {
    const solanaWallet = new SolanaWallet(web3AuthInstance.provider);
    const acc = await solanaWallet.requestAccounts();
    return acc;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};

const getBalance = async (): Promise<void> => {
  try {
    const solanaWallet = new SolanaWallet(web3AuthInstance.provider);
    const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
    const conn = new Connection(connectionConfig.rpcTarget);

    const accounts = await solanaWallet.requestAccounts();
    const balance = await conn.getBalance(new PublicKey(accounts[0]));
  } catch (error) {
    console.error("Error", error);
  }
};

const signMessage = async (): Promise<void> => {
  try {
    const solanaWallet = new SolanaWallet(web3AuthInstance.provider);
    const msg = Buffer.from("Test Signing Message ", "utf8");
    const res = await solanaWallet.signMessage(msg);
  } catch (error) {
    console.error("Error", error);
  }
};

const signAndSendTransaction = async (): Promise<void> => {
  try {
    const solanaWallet = new SolanaWallet(web3AuthInstance.provider);
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
    const signature = await solanaWallet.signAndSendTransaction(transaction);
  } catch (error) {
    console.error("Error", error);
  }
};

const signTransaction = async (): Promise<void> => {
  try {
    const solanaWallet = new SolanaWallet(web3AuthInstance.provider);
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
    signedTx.serialize();
  } catch (error) {
    console.error("Error", error);
  }
};
