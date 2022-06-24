export const getRPCFunctionsAngular = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos") => {
  let code = `
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

    signTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signTransaction();
      console.log(result);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signAndSendTransaction();
      console.log(result);
    };`;
  if (chain === "starkex") {
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
  if (chain === "starknet") {
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
  if (chain === "tezos") {
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
