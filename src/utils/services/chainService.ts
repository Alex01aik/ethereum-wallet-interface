import Web3 from "web3";
import { chains, tokens } from "../tokens";

export type Token = {
  name: string;
  balance: string;
  img?: string;
};

export class ChainService {
  async getTokens(account: string, chainId: string): Promise<Token[]> {
    const chain = this.findChain(chainId.toString());

    return await this.getTokenBalances(account, chain);
  }

  async getTokenBalances(
    account: string,
    chain: [string, chains] | undefined
  ): Promise<Token[]> {
    const web3 = new Web3(window.ethereum as any);
    const data: Token[] = [];

    const ethBalance = await web3.eth.getBalance(account);

    data.push({
      name: "ETH",
      balance: ethBalance.toString(),
      img: "eth-logo.svg",
    });

    if (chain) {
      const [, chainID] = chain;
      const tokensInNetwork = tokens[chainID];

      await Promise.all(
        tokensInNetwork.map(async (token) => {
          const tokenInst = new web3.eth.Contract(token.abi, token.address);
          const tokenBalance = await (tokenInst.methods as any)
            .balanceOf(account)
            .call();
          data.push({
            name: token.name,
            balance: tokenBalance.toString(),
            img: token.img,
          });
        })
      );
    }
    return data;
  }

  findChain(chainId: string): [string, chains] | undefined {
    return Object.entries(chains).find(
      ([, value]) => chainId.toString() === value
    );
  }
}

export const chainService = new ChainService();
