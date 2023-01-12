import { SOL, STARKEX, STARKNET, TEZOS } from "../../choices";

export const getRPCFunctionsAngular = (chain: string) => {
  let code = `
    getChainId = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const chainId = await rpc.getChainId();
      this.uiConsole(chainId);
    };
    getAccounts = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const address = await rpc.getAccounts();
      this.uiConsole(address);
    };

    getBalance = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      this.uiConsole(balance);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const receipt = await rpc.sendTransaction();
      this.uiConsole(receipt);
    };

    signMessage = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const signedMessage = await rpc.signMessage();
      this.uiConsole(signedMessage);
    };

    getPrivateKey = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const privateKey = await rpc.getPrivateKey();
      this.uiConsole(privateKey);
    };`;
  if (chain === SOL) {
    code = `
    getAccounts = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const address = await rpc.getAccounts();
      this.uiConsole(address);
    };

    getBalance = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      this.uiConsole(balance);
    };

    sendTransaction = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const receipt = await rpc.sendTransaction();
      this.uiConsole(receipt);
    };

    signMessage = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const signedMessage = await rpc.signMessage();
      this.uiConsole(signedMessage);
    };

    getPrivateKey = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const privateKey = await rpc.getPrivateKey();
      this.uiConsole(privateKey);
    };`;
  }
  if (chain === STARKEX) {
    code = `
    onGetStarkAccount = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      this.uiConsole(starkaccounts);
    };

    getStarkKey = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkKey = await rpc.getStarkKey();
      this.uiConsole(starkKey);
    };

    onMintRequest = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onMintRequest();
      this.uiConsole(request);
    };

    onDepositRequest = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onDepositRequest();
      this.uiConsole(request);
    };

    onWithdrawalRequest = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const request = await rpc.onWithdrawalRequest();
      this.uiConsole(request);
    };`;
  }
  if (chain === STARKNET) {
    code = `
    onGetStarkAccount = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkaccounts = await rpc.getStarkAccount();
      this.uiConsole(starkaccounts);
    };

    getStarkKey = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const starkKey = await rpc.getStarkKey();
      this.uiConsole(starkKey);
    };

    onDeployAccount = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const deployaccount = await rpc.deployAccount();
      this.uiConsole(deployaccount);
    };`;
  }
  if (chain === TEZOS) {
    code = `
    onGetTezosKeyPair = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider as SafeEventEmitterProvider);
      const tezosKey = await rpc.getTezosKeyPair();
      this.uiConsole(tezosKey);
    };

    getAccounts = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const userAccount = await rpc.getAccounts();
      this.uiConsole(userAccount);
    };

    getBalance = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const balance = await rpc.getBalance();
      this.uiConsole(balance);
    };

    signMessage = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signMessage();
      this.uiConsole(result);
    };

    signAndSendTransaction = async () => {
      if (!this.provider) {
        this.uiConsole('provider not initialized yet');
        return;
      }
      const rpc = new RPC(this.provider);
      const result = await rpc.signAndSendTransaction();
      this.uiConsole(result);
    };`;
  }
  return code;
};
