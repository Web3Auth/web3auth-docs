export const getRPCFunctionsButtonsVue = (chain: "eth" | "sol" | "starkex" | "starknet") => {
  let code = `
      <button class="rpcBtn" @click="getAccounts" style="cursor: pointer">Get Accounts</button>
      <button class="rpcBtn" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" @click="signTransaction" style="cursor: pointer">Sign Transaction</button>
      <button class="rpcBtn" @click="sendTransaction" style="cursor: pointer">Send Transaction</button>`;
  if (chain === "starkex") {
    code = `
      <button class="rpcBtn" @click="onGetStarkHDAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" @click="onMintRequest" style="cursor: pointer">Mint Request</button>
      <button class="rpcBtn" @click="onDepositRequest" style="cursor: pointer">Deposit Request</button>
      <button class="rpcBtn" @click="onWithdrawalRequest" style="cursor: pointer">Withdraw Request</button>`;
  }
  if (chain === "starknet") {
    code = `
      <button class="rpcBtn" @click="onGetStarkHDAccount" style="cursor: pointer">Get Stark Accounts</button>
      <button class="rpcBtn" @click="onDeployAccount" style="cursor: pointer">Deploy Account</button>`;
  }
  return code;
};
