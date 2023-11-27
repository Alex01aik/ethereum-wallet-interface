import tokenAbi from "../utils/ABI/commonEth.abi.json";

export type TokenData = {
  name: string;
  address: string;
  abi: any;
  img?: string;
};

export enum chains {
  mainnet = "1",
  polygon = "137",
  arbitrum = "42161",
}

export const tokens: { [key: string]: TokenData[] } = {
  [chains.mainnet]: [
    {
      name: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      img: "usdc-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      img: "usdt-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "CRV",
      address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
      img: "crv-logo.svg",
      abi: tokenAbi,
    },
  ],
  [chains.polygon]: [
    {
      name: "USDC",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      img: "usdc-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "USDT",
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      img: "usdt-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "CRV",
      address: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
      img: "crv-logo.svg",
      abi: tokenAbi,
    },
  ],
  [chains.arbitrum]: [
    {
      name: "USDC",
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      img: "usdc-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "USDT",
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      img: "usdt-logo.svg",
      abi: tokenAbi,
    },
    {
      name: "CRV",
      address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
      img: "crv-logo.svg",
      abi: tokenAbi,
    },
  ],
};
