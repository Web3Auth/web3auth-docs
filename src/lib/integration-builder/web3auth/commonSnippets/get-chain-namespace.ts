export const getChainNamespace = (
  chain: "eth" | "sol"
): {
  code: string;
} => {
  const code =
    chain === "eth"
      ? `
    const chainNamespace = "eip155";
    `
      : `
      const chainNamespace = "solana";
    `;
  return {
    code,
  };
};
