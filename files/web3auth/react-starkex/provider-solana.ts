import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction
} from "@solana/web3.js";
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";

const getConnection = async (
  provider: SafeEventEmitterProvider
): Promise<Connection> => {
  const solanaWallet = new SolanaWallet(provider);
  const connectionConfig = await solanaWallet.request<CustomChainConfig>({
    method: "solana_provider_config",
    params: [],
  });
  const conn = new Connection(connectionConfig.rpcTarget);
  return conn;
};

export const getAccounts = async (provider: SafeEventEmitterProvider) => {
  try {
    const solanaWallet = new SolanaWallet(provider);
    const acc = await solanaWallet.requestAccounts();
    console.log("Solana accounts", acc);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getBalance = async (provider: SafeEventEmitterProvider) => {
  try {
    const solanaWallet = new SolanaWallet(provider);
    const conn = await getConnection(provider);
    const accounts = await solanaWallet.requestAccounts();
    const balance = await conn.getBalance(new PublicKey(accounts[0]));
    console.log("Solana balance", balance);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signMessage = async (provider: SafeEventEmitterProvider) => {
  try {
    const solanaWallet = new SolanaWallet(provider);
    const msg = Buffer.from("Test Signing Message ", "utf8");
    const res = await solanaWallet.signMessage(msg);
    console.log("Solana sign message", res);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signTransaction = async (provider: SafeEventEmitterProvider) => {
  try {
    const conn = await getConnection(provider);
    const solWeb3 = new SolanaWallet(provider);
    const pubKey = await solWeb3.requestAccounts();
    const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
    console.log(blockhash);
    const TransactionInstruction = SystemProgram.transfer({
      fromPubkey: new PublicKey(pubKey[0]),
      toPubkey: new PublicKey(pubKey[0]),
      lamports: 0.01 * LAMPORTS_PER_SOL,
    });
    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: new PublicKey(pubKey[0]),
    }).add(TransactionInstruction);
    const signedTx = await solWeb3.signTransaction(transaction);
    signedTx.serialize();
    console.log("Signature", signedTx);
  } catch (error) {
    console.error("Error", error);
  }
};

export const sendTransaction = async (provider: SafeEventEmitterProvider) => {
  try {
    const conn = await getConnection(provider);
    const solWeb3 = new SolanaWallet(provider);
    const pubKey = await solWeb3.requestAccounts();
    const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
    const TransactionInstruction = SystemProgram.transfer({
      fromPubkey: new PublicKey(pubKey[0]),
      toPubkey: new PublicKey(pubKey[0]),
      lamports: 0.01 * LAMPORTS_PER_SOL,
    });
    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: new PublicKey(pubKey[0]),
    }).add(TransactionInstruction);
    const signature = await solWeb3.signAndSendTransaction(transaction);
    console.log("Signature", signature);
  } catch (error) {
    console.error("Error", error);
  }
};
