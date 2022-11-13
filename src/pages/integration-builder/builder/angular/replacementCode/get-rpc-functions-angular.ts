import { SOL, STARKEX, STARKNET, TEZOS } from "../../choices";

export const getRPCFunctionsAngular = (chain: string) => {
  let code = `
    getChainId = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const chainId = await rpc.getChainId();
      console.log(chainId);
    };
    getAccounts = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const address = await rpc.getAccounts();
      console.log(address);
    };

    getBalance = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      console.log(balance);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const receipt = await rpc.sendTransaction();
      console.log(receipt);
    };

    signMessage = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const signedMessage = await rpc.signMessage();
      console.log(signedMessage);
    };

    getPrivateKey = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const privateKey = await rpc.getPrivateKey();
      console.log(privateKey);
    };`;
  if (chain === SOL) {
    code = `
    getAccounts = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const address = await rpc.getAccounts();
      console.log(address);
    };

    getBalance = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      console.log(balance);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const receipt = await rpc.sendTransaction();
      console.log(receipt);
    };

    signMessage = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const signedMessage = await rpc.signMessage();
      console.log(signedMessage);
    };

    getPrivateKey = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const privateKey = await rpc.getPrivateKey();
      console.log(privateKey);
    };`;
  }
  if (chain === STARKEX) {
    code = `
    onGetStarkAccount = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      console.log(starkaccounts);
    };

    getStarkKey = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkKey =  await rpc.getStarkKey();
      console.log(starkKey);
    };

    onMintRequest = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onMintRequest();
      console.log(request);
    };

    onDepositRequest = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onDepositRequest();
      console.log(request);
    };

    onWithdrawalRequest = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onWithdrawalRequest();
      console.log(request);
    };`;
  }
  if (chain === STARKNET) {
    code = `
    onGetStarkAccount = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      console.log(starkaccounts);
    };

    getStarkKey = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkKey =  await rpc.getStarkKey();
      console.log(starkKey);
    };

    onDeployAccount = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const deployaccount =  await rpc.deployAccount();
      console.log(deployaccount);
    };`;
  }
  if (chain === TEZOS) {
    code = `
    onGetTezosKeyPair = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const tezosKey = await rpc.getTezosKeyPair();
      console.log(tezosKey);
    };

    getAccounts = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const userAccount = await rpc.getAccounts();
      console.log(userAccount);
    };

    getBalance = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      console.log(balance);
    };

    signMessage = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signMessage();
      console.log(result);
    };

    signAndSendTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signAndSendTransaction();
      console.log(result);
    };`;
  }
  return code;
};
