import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

export const getAccounts = async (provider: SafeEventEmitterProvider) => {
  try {
    const web3 = new Web3(provider as any);
    const accounts = await web3.eth.getAccounts();
    console.log("Eth accounts", accounts);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getBalance = async (provider: SafeEventEmitterProvider) => {
  try {
    const web3 = new Web3(provider as any);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log("Eth balance", balance);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signMessage = async (provider: SafeEventEmitterProvider) => {
  try {
    const pubKey = (await provider.request({
      method: "eth_accounts",
    })) as string[];
    const web3 = new Web3(provider as any);
    const message =
      "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
    (web3.currentProvider as any)?.send(
      {
        method: "eth_sign",
        params: [pubKey[0], message],
        from: pubKey[0],
      },
      (err: Error, result: any) => {
        if (err) {
          return console.log(err);
        }
        console.log("Eth sign message => true", result);
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const signTransaction = async (provider: SafeEventEmitterProvider) => {
  try {
    const web3 = new Web3(provider as any);
    const accounts = await web3.eth.getAccounts();
    // only supported with social logins (openlogin adapter)
    const txRes = await web3.eth.signTransaction({
      from: accounts[0],
      to: accounts[0],
      value: web3.utils.toWei("0.01"),
    });
    console.log("txRes", txRes);
  } catch (error) {
    console.log("error", error);
  }
};

export const sendTransaction = async (provider: SafeEventEmitterProvider) => {
  try {
    const web3 = new Web3(provider as any);
    const accounts = await web3.eth.getAccounts();
    const txRes = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[0],
      value: web3.utils.toWei("0.01"),
    });
    console.log("txRes", txRes);
  } catch (error) {
    console.log("error", error);
  }
};
