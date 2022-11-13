import { SOL, STARKEX, STARKNET, TEZOS } from "../../choices";

export const getRPCFunctionsButtonsAngular = (chain: string) => {
  let code = `
      <button class="card card-small" (click)="getChainId()">Get Chain ID</button>
      <button class="card card-small" (click)="getAccounts()">Get Accounts</button>
      <button class="card card-small" (click)="getBalance()">Get Balance</button>
      <button class="card card-small" (click)="sendTransaction()">Send Transaction</button>
      <button class="card card-small" (click)="signMessage()">Sign Message</button>
      <button class="card card-small" (click)="getPrivateKey()">Get Private Key</button>`;
  if (chain === SOL) {
    code = `
    <button class="card card-small" (click)="getAccounts()">Get Accounts</button>
    <button class="card card-small" (click)="getBalance()">Get Balance</button>
    <button class="card card-small" (click)="sendTransaction()">Send Transaction</button>
    <button class="card card-small" (click)="signMessage()">Sign Message</button>
    <button class="card card-small" (click)="getPrivateKey()">Get Private Key</button>`;
  }
  if (chain === STARKEX) {
    code = `
      <button class="card card-small" (click)="onGetStarkAccount()">Get Stark Accounts</button>
      <button class="card card-small" (click)="getStarkKey()">Get Stark Key</button>
      <button class="card card-small" (click)="onMintRequest()">Mint Request</button>
      <button class="card card-small" (click)="onDepositRequest()">Deposit Request</button>
      <button class="card card-small" (click)="onWithdrawalRequest()">Withdraw Request</button>`;
  }
  if (chain === STARKNET) {
    code = `
      <button class="card card-small" (click)="onGetStarkAccount()">Get Stark Accounts</button>
      <button class="card card-small" (click)="getStarkKey()">Get Stark Key</button>
      <button class="card card-small" (click)="onDeployAccount()">Deploy Account</button>`;
  }
  if (chain === TEZOS) {
    code = `
      <button class="card card-small" (click)="onGetTezosKeyPair()">Get Tezos Key</button>
      <button class="card card-small" (click)="getAccounts()">Get Accounts</button>
      <button class="card card-small" (click)="getBalance()">Get Balance</button>
      <button class="card card-small" (click)="signMessage()">Sign Message</button>
      <button class="card card-small" (click)="signAndSendTransaction()">Sign and Send Transaction</button>`;
  }
  return code;
};
