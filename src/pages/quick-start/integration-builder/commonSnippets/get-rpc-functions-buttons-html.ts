export const getRPCFunctionsButtonsHTML = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
          <button id="get-accounts" class="btn">Get Accounts</button>
          <button id="get-balance" class="btn">Get Balance</button>
          <button id="sign-message" class="btn">Sign Message</button>
      `;
  if (chain === "starkex") {
    code = `
          <button id="get-stark-accounts" class="btn">Get Stark Accounts</button>
          <button id="get-stark-key" class="btn">Get Stark Key</button>
          <button id="mint-request" class="btn">Mint Request</button>
          <button id="deposit-request" class="btn">Deposit Request</button>
          <button id="withdraw-request" class="btn">Withdraw Request</button>
      `;
  }
  if (chain === "starknet") {
    code = `
          <button id="get-stark-accounts" class="btn">Get Stark Accounts</button>
          <button id="get-stark-key" class="btn">Get Stark Key</button>
          <button id="deploy-account" class="btn">Deploy Account</button>
      `;
  }
  return code;
};
