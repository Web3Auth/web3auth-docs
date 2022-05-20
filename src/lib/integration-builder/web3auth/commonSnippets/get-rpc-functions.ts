export const getRPCFunctions = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
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
  return {
    code,
  };
};

export const getRPCFunctionsHTML = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
    $("#get-accounts").click(async function (event) {
      try {
        const accounts = await rpc.getAccounts(web3auth.provider);
        $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });

    $("#get-balance").click(async function (event) {
      try {
        const balance = await rpc.getBalance(web3auth.provider);
        $("#code").text(JSON.stringify(["balance", balance], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });

    $("#sign-message").click(async function (event) {
      try {
        const signedMsg = await rpc.signMessage(web3auth.provider);
        $("#code").text(JSON.stringify(["signed message", signedMsg], null, 2));
      } catch (error) {
        console.error(error.message);
      }
    });`;
  if (chain === "starkex") {
    code = `
      $("#get-stark-accounts").click(async function (event) {
        try {
          const accounts = await rpc.getStarkAccount(web3auth.provider);
          $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#mint-request").click(async function (event) {
        try {
          const response = await rpc.onMintRequest(web3auth.provider, starkExAPI);
          $("#code").text(JSON.stringify(["mint-request", response], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#deposit-request").click(async function (event) {
        try {
          const response = await rpc.onDepositRequest(web3auth.provider, starkExAPI);
          $("#code").text(JSON.stringify(["deposit-request", response], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#withdraw-request").click(async function (event) {
        try {
          const response = await rpc.onWithdrawalRequest(web3auth.provider, starkExAPI);
          $("#code").text(JSON.stringify(["withdraw-request", response], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });`;
  }
  if (chain === "starknet") {
    code = `
        $("#get-stark-hd-account").click(async function (event) {
          try {
            const accounts = await rpc.getStarkAccount(web3auth.provider);
            $("#code").text(JSON.stringify(["accounts", accounts], null, 2));
          } catch (error) {
            console.error(error.message);
          }
        });

        $("#on-deploy-account").click(async function (event) {
          try {
            const balance = await rpc.deployAccount(web3auth.provider);
            $("#code").text(JSON.stringify(["balance", balance], null, 2));
          } catch (error) {
            console.error(error.message);
          }
        });`;
  }
  return {
    code,
  };
};
