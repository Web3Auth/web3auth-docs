import { SOL, STARKEX, STARKNET, TEZOS } from "../builder/choices";

export const getRPCFunctionsButtonsReact = (chain: string) => {
  let code = `
        <div>
          <button onClick={getChainId} className="card">
            Get Chain ID
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className="card">
            Get Accounts
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="card">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="card">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="card">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="card">
            Get Private Key
          </button>
        </div>`;

  if (chain === SOL) {
    code = `
        <div>
          <button onClick={getAccounts} className="card">
            Get Account
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="card">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="card">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="card">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="card">
            Get Private Key
          </button>
        </div>`;
  }

  if (chain === STARKEX) {
    code = `
        <div>
          <button onClick={onGetStarkAccount} className='card'>
            Get Stark Accounts
          </button>
        </div>
        <div>
          <button onClick={getStarkKey} className='card'>
            Get Stark Key
          </button>
        </div>
        <div>
          <button onClick={onMintRequest} className='card'>
            Mint Request
          </button>
        </div>
        <div>
          <button onClick={onDepositRequest} className='card'>
            Deposit Request
          </button>
        </div>
        <div>
          <button onClick={onWithdrawalRequest} className='card'>
            Withdraw Request
          </button>
        </div>`;
  }

  if (chain === STARKNET) {
    code = `
				<div>
          <button onClick={onGetStarkAccount} className='card'>
            Get Stark Accounts
          </button>
        </div>
        <div>
          <button onClick={getStarkKey} className='card'>
            Get Stark Key
          </button>
        </div>
        <div>
          <button onClick={onDeployAccount} className='card'>
            Deploy Account
          </button>
        </div>`;
  }

  if (chain === TEZOS) {
    code = `
				<div>
          <button onClick={onGetTezosKeyPair} className='card'>
            Get Tezos Key Pair
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className='card'>
            Get Accounts
          </button>
        </div>
        <div>
          <button onClick={getBalance} className='card'>
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={signMessage} className='card'>
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={signAndSendTransaction} className='card'>
            Sign And Send Transaction
          </button>
        </div>`;
  }
  return code;
};
