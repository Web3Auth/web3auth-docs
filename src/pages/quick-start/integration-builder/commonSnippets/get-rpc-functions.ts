export const getRPCFunctions = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
    const getAccounts = async () => {
      if (!provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const userAccount = await rpc.getAccounts();
      uiConsole(userAccount);
    };

    const getBalance = async () => {
      if (!provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const balance = await rpc.getBalance();
      uiConsole(balance);
    };

    const signMessage = async () => {
      if (!provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signMessage();
      uiConsole(result);
    };

    const signTransaction = async () => {
      if (!provider) {
        uiConsole("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signTransaction();
      uiConsole(result);
    };

    const sendTransaction = async () => {
      if (!provider) {
        console.log("provider not initialized yet");
        return;
      }
      const rpc = new RPC(provider);
      const result = await rpc.signAndSendTransaction();
      uiConsole(result);
    };
  `;
  if (chain === "starkex") {
    code = `
    const onGetStarkHDAccount = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      uiConsole(starkaccounts);
    };

    const onMintRequest = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onMintRequest();
      uiConsole(request);
    };

    const onDepositRequest = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onDepositRequest();
      uiConsole(request);
    };

    const onWithdrawalRequest = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const request = await rpc.onWithdrawalRequest();
      uiConsole(request);
    };
  `;
  }
  if (chain === "starknet") {
    code = `
    const onGetStarkHDAccount = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      uiConsole(starkaccounts);
    };

    const onDeployAccount = async () => {
      const rpc = new RPC(provider as SafeEventEmitterProvider);
      const deployaccount =  await rpc.deployAccount();
      uiConsole(deployaccount);
    };
  `;
  }
  return code;
};
