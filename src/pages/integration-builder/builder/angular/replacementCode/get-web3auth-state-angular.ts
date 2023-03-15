export const getWeb3AuthStateAngular = (useModal: boolean) => {
  if (useModal) {
    return `
    web3auth: Web3Auth | null = null;`;
  }
  return `
    web3auth: Web3AuthNoModal | null = null;`;
};
