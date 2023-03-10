export const getWeb3AuthStateReact = (useModal: boolean) => {
  if (useModal) {
    return `
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);`;
  }
  return `
  const [web3auth, setWeb3auth] = useState<Web3AuthNoModal | null>(null);`;
};
