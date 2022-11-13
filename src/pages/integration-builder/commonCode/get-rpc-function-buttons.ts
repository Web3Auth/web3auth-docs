import { SOL, STARKEX, STARKNET, TEZOS } from "../builder/choices";

export const getRPCFunctionsButtonsReact = (chain: string) => {
  let code = `
      <button onClick={getChainId} className="card">
        Get Chain ID
      </button>
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={sendTransaction} className="card">
        Send Transaction
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={getPrivateKey} className="card">
        Get Private Key
      </button>`;

  if (chain === SOL) {
    code = `
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={sendTransaction} className="card">
        Send Transaction
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={getPrivateKey} className="card">
        Get Private Key
      </button>`;
  }

  if (chain === STARKEX) {
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

  if (chain === STARKNET) {
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

  if (chain === TEZOS) {
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
