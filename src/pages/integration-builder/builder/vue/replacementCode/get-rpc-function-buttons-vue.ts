import { SOL, STARKEX, STARKNET, TEZOS } from "../../choices";

export const getRPCFunctionsButtonsVue = (chain: string) => {
  let code = `
      <button class="rpcBtn" @click="getChainId" style="cursor: pointer">Get Chain ID</button>
      <button class="rpcBtn" @click="getAccounts" style="cursor: pointer">Get Accounts</button>
      <button class="rpcBtn" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" @click="sendTransaction" style="cursor: pointer">Send Transaction</button>
      <button class="rpcBtn" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" @click="getPrivateKey" style="cursor: pointer">Get Private Key</button>`;
  if (chain === SOL) {
    code = `
      <button class="rpcBtn" @click="getAccounts" style="cursor: pointer">Get Accounts</button>
      <button class="rpcBtn" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" @click="sendTransaction" style="cursor: pointer">Send Transaction</button>
      <button class="rpcBtn" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" @click="getPrivateKey" style="cursor: pointer">Get Private Key</button>`;
  }
  if (chain === STARKEX) {
    code = `
      <button class="rpcBtn" @click="onGetStarkAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" @click="getStarkKey"  style="cursor: pointer">Get Stark Key</button>
      <button class="rpcBtn" @click="onMintRequest" style="cursor: pointer">Mint Request</button>
      <button class="rpcBtn" @click="onDepositRequest" style="cursor: pointer">Deposit Request</button>
      <button class="rpcBtn" @click="onWithdrawalRequest" style="cursor: pointer">Withdraw Request</button>`;
  }
  if (chain === STARKNET) {
    code = `
      <button class="rpcBtn" @click="onGetStarkAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" @click="getStarkKey"  style="cursor: pointer">Get Stark Key</button>
      <button class="rpcBtn" @click="onDeployAccount" style="cursor: pointer">Deploy Account</button>`;
  }
  if (chain === TEZOS) {
    code = `
      <button class="rpcBtn" @click="onGetTezosKeyPair" style="cursor: pointer">Get Tezos Key</button>
      <button class="rpcBtn" @click="getAccounts" style="cursor: pointer">Get Accounts</button>
      <button class="rpcBtn" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" @click="signAndSendTransaction" style="cursor: pointer">Sign and Send Transaction</button>`;
  }
  return code;
};
