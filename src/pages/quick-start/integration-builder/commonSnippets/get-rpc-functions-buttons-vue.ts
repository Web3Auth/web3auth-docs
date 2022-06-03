export const getRPCFunctionsButtonsVue = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
      <button class="rpcBtn" v-if="provider" @click="getAccounts" style="cursor: pointer">Get Accounts</button>
      <button class="rpcBtn" v-if="provider" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" v-if="provider" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" v-if="provider" @click="signTransaction" style="cursor: pointer">Sign Transaction</button>
      <button class="rpcBtn" v-if="provider" @click="sendTransaction" style="cursor: pointer">Send Transaction</button>`;
  if (chain === "starkex") {
    code = `
      <button class="rpcBtn" v-if="provider" @click="onGetStarkHDAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" v-if="provider" @click="onMintRequest" style="cursor: pointer">Mint Request</button>
      <button class="rpcBtn" v-if="provider" @click="onDepositRequest" style="cursor: pointer">Deposit Request</button>
      <button class="rpcBtn" v-if="provider" @click="onWithdrawalRequest" style="cursor: pointer">Withdraw Request</button>`;
  }
  if (chain === "starknet") {
    code = `
      <button class="rpcBtn" v-if="provider" @click="onGetStarkHDAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" v-if="provider" @click="onDeployAccount" style="cursor: pointer">Deploy Account</button>`;
  }
  return code;
};
