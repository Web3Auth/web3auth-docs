export const getRPCFunctionsAngular = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
    getAccounts = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const userAccount = await rpc.getAccounts();
      this.uiConsole(userAccount);
    };

    getBalance = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const balance = await rpc.getBalance();
      this.uiConsole(balance);
    };

    signMessage = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signMessage();
      this.uiConsole(result);
    };

    signTransaction = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signTransaction();
      this.uiConsole(result);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signAndSendTransaction();
      this.uiConsole(result);
    };`;
  if (chain === "starkex") {
    code = `
    onGetStarkHDAccount = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      this.uiConsole(starkaccounts);
    };

    onMintRequest = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onMintRequest();
      this.uiConsole(request);
    };

    onDepositRequest = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onDepositRequest();
      this.uiConsole(request);
    };

    onWithdrawalRequest = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onWithdrawalRequest();
      this.uiConsole(request);
    };`;
  }
  if (chain === "starknet") {
    code = `
    onGetStarkHDAccount = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      this.uiConsole(starkaccounts);
    };

    onDeployAccount = async () => {
      if (!this.provider) {
        this.uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const deployaccount =  await rpc.deployAccount();
      this.uiConsole(deployaccount);
    };`;
  }
  return code;
};
