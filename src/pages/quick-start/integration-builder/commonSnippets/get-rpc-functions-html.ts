export const getRPCFunctionsHTML = (chain: "eth" | "sol" | "starkex" | "starknet") => {
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
      $("#get-stark-accounts").click(async function (event) {
        try {
          console.log(web3auth.provider);
          const accounts = await rpc.getStarkAccount(web3auth.provider);
          $("#code").text(JSON.stringify(["account", accounts], null, 2));
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#deploy-account").click(async function (event) {
        try {
          const response = await rpc.deployAccount(web3auth.provider, starknet.provider);
          $("#code").text(JSON.stringify(response));
        } catch (error) {
          console.error(error.message);
        }
      });`;
  }
  return code;
};
