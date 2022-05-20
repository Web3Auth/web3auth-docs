export const getRPCFunctionsUIButtonsHTML = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
          <button id="get-accounts" class="btn">Get Accounts</button>
          <button id="get-balance" class="btn">Get Balance</button>
          <button id="sign-message" class="btn">Sign Message</button>
      `;
  if (chain === "starkex") {
    code = `
          <button id="get-stark-accounts" class="btn">Get Stark Accounts</button>
          <button id="mint-request" class="btn">Mint Request</button>
          <button id="deposit-request" class="btn">Deposit Request</button>
          <button id="withdraw-request" class="btn">Withdraw Request</button>
      `;
  }
  if (chain === "starknet") {
    code = `
          <button id="get-stark-hd-account" class="btn">Get Stark Accounts</button>
          <button id="on-deploy-account" class="btn">Mint Request</button>
      `;
  }
  return {
    code,
  };
};

export const getRPCFunctionsUIButtonsReact = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
        <button onClick={getAccounts} className="card">
          Get Accounts
        </button>
        <button onClick={getBalance} className="card">
          Get Balance
        </button>
        <button onClick={signMessage} className="card">
          Sign Message
        </button>
        <button onClick={signTransaction} className="card">
          Sign Transaction
        </button>
        <button onClick={sendTransaction} className="card">
          Send Transaction
        </button>
  `;
  if (chain === "starkex") {
    code = `
        <button onClick={onGetStarkHDAccount} className="card">
          Get Stark Accounts
        </button>
        <button onClick={onMintRequest} className="card">
          Mint Request
        </button>
        <button onClick={onDepositRequest} className="card">
          Deposit Request
        </button>
        <button onClick={onWithdrawalRequest} className="card">
          Withdraw Request
        </button>`;
  }
  if (chain === "starknet") {
    code = `
        <button onClick={onGetStarkHDAccount} className="card">
          Get Stark Accounts
        </button>
        <button onClick={onDeployAccount} className="card">
          Deploy Account
        </button>`;
  }
  return {
    code,
  };
};
