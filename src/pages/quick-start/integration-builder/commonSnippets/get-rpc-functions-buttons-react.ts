export const getRPCFunctionsButtonsReact = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos") => {
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
      </button>`;

  if (chain === "starkex") {
    code = `
      <button onClick={onGetStarkAccount} className="card">
        Get Stark Accounts
      </button>
      <button onClick={getStarkKey} className="card">
        Get Stark Key
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
      <button onClick={onGetStarkAccount} className="card">
        Get Stark Accounts
      </button>
      <button onClick={getStarkKey} className="card">
        Get Stark Key
      </button>
      <button onClick={onDeployAccount} className="card">
        Deploy Account
      </button>`;
  }

  if (chain === "tezos") {
    code = `
      <button onClick={onGetTezosKeyPair} className="card">
        Get Tezos Key Pair
      </button>
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={signAndSendTransaction} className="card">
        Sign And Send Transaction
      </button>`;
  }
  return code;
};
