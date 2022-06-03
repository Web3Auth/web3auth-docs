export const getRPCFunctionsUIButtonsAngular = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
      <button class="card card-small" (click)="getAccounts">Get Accounts</button>
      <button class="card card-small" (click)="getBalance">Get Balance</button>
      <button class="card card-small" (click)="signMessage">Sign Message</button>
      <button class="card card-small" (click)="signTransaction">Sign Transaction</button>
      <button class="card card-small" (click)="sendTransaction">Send Transaction</button>`;
  if (chain === "starkex") {
    code = `
      <button class="card card-small" (click)="onGetStarkHDAccount">Get Stark Accounts</button>
      <button class="card card-small" (click)="onMintRequest">Mint Request</button>
      <button class="card card-small" (click)="onDepositRequest">Deposit Request</button>
      <button class="card card-small" (click)="onWithdrawalRequest">Withdraw Request</button>`;
  }
  if (chain === "starknet") {
    code = `
      <button class="card card-small" (click)="onGetStarkHDAccount">Get Stark Accounts</button>
      <button class="card card-small" (click)="onDeployAccount">Deploy Account</button>
      <button class="card card-small" (click)="onDepositRequest">Deposit Request</button>`;
  }
  return code;
};
