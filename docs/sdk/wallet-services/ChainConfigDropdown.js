import React, { useState } from "react";

const chainConfigs = {
  Ethereum: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://etherscan.io",
    chainId: "0x1",
    displayName: "Ethereum",
    logo: "eth.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
  Polygon: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://polygonscan.com",
    chainId: "0x89",
    displayName: "Polygon",
    logo: "polygon.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "POL",
    tickerName: "Polygon Ecosystem Token",
  },
  BinanceSmartChain: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://bscscan.com",
    chainId: "0x38",
    displayName: "Binance Smart Chain (BSC)",
    logo: "bnb_logo.svg",
    rpcTarget: "https://bsc-dataseed.binance.org",
    ticker: "BNB",
    tickerName: "Binance Coin",
  },
  Avalanche: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://snowtrace.io",
    chainId: "0xa86a",
    displayName: "Avalanche",
    logo: "avax.svg",
    rpcTarget: "https://api.avax.network/ext/bc/C/rpc",
    ticker: "AVAX",
    tickerName: "Avalanche",
  },
  Optimism: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://optimistic.etherscan.io",
    chainId: "0xa",
    displayName: "Optimism",
    logo: "optimism.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
  CeloMainnet: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://explorer.celo.org",
    chainId: "0xa4ec",
    displayName: "Celo Mainnet",
    logo: "celo.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "CELO",
    tickerName: "Celo",
  },
  ArbitrumOne: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://arbiscan.io",
    chainId: "0xa4b1",
    displayName: "Arbitrum One",
    logo: "arbitrum.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
  xDai: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://gnosis.blockscout.com",
    chainId: "0x64",
    displayName: "xDai",
    logo: "xDai.svg",
    rpcTarget: "https://rpc.gnosischain.com",
    ticker: "DAI",
    tickerName: "xDai Token",
  },
  Base: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://basescan.org",
    chainId: "0x2105",
    displayName: "Base",
    logo: "base.svg",
    rpcTarget: "https://mainnet.base.org",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
  SepoliaTestNetwork: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://sepolia.etherscan.io",
    chainId: "0xaa36a7",
    displayName: "Sepolia Test Network",
    logo: "eth.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
    isTestnet: true,
  },
  PolygonAmoy: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://amoy.polygonscan.com",
    chainId: "0x13882",
    displayName: "Polygon Amoy",
    logo: "polygon.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "POL",
    tickerName: "Polygon Ecosystem Token",
    isTestnet: true,
  },
  BinanceSmartChainTestnet: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://testnet.bscscan.com",
    chainId: "0x61",
    displayName: "Binance Smart Chain Testnet",
    logo: "bnb_logo.svg",
    rpcTarget: "https://data-seed-prebsc-1-s1.binance.org:8545",
    ticker: "BNB",
    tickerName: "Binance Coin",
    isTestnet: true,
  },
  AvalancheTestnetCChain: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://testnet.snowtrace.io",
    chainId: "0xa869",
    displayName: "Avalanche Testnet C-Chain",
    logo: "avax.svg",
    rpcTarget: "https://api.avax-test.network/ext/bc/C/rpc",
    ticker: "AVAX",
    tickerName: "Avalanche",
    isTestnet: true,
  },
  ArbitrumSepolia: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://sepolia.arbiscan.io",
    chainId: "0x66eee",
    displayName: "Arbitrum Sepolia",
    logo: "arbitrum.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
    isTestnet: true,
  },
  OptimismSepolia: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://sepolia-optimistic.etherscan.io",
    chainId: "0xaa37dc",
    displayName: "Optimism Sepolia",
    logo: "optimism.svg",
    rpcTarget: "ENTER YOUR RPC URL HERE",
    ticker: "ETH",
    tickerName: "Ethereum",
    isTestnet: true,
  },
  BaseSepolia: {
    chainNamespace: "EIP155",
    decimals: 18,
    blockExplorerUrl: "https://sepolia.basescan.org",
    chainId: "0x14a34",
    displayName: "Base Sepolia",
    logo: "base.svg",
    rpcTarget: "https://sepolia.base.org",
    ticker: "ETH",
    tickerName: "Ethereum",
    isTestnet: true,
  },
};

const ChainConfigDropdown = () => {
  const [selectedChain, setSelectedChain] = useState(Object.keys(chainConfigs)[0]);

  const handleChange = (event) => {
    setSelectedChain(event.target.value);
  };

  return (
    <div>
      <label htmlFor="chain-select">Select a chain: </label>
      <select id="chain-select" value={selectedChain} onChange={handleChange}>
        {Object.keys(chainConfigs).map((chain) => (
          <option key={chain} value={chain}>
            {chain}
          </option>
        ))}
      </select>

      <div>
        <h3>Chain Configuration for {selectedChain}</h3>
        <pre>{JSON.stringify(chainConfigs[selectedChain], null, 2)}</pre>
      </div>
    </div>
  );
};

export default ChainConfigDropdown;
