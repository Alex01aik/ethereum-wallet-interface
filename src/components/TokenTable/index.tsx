import "./styles.css";
import { useEffect, useState } from "react";
import { formatAccount } from "../../utils/formatAccount";
import { Token, chainService } from "../../utils/services/chainService";
import { useWeb3React } from "@web3-react/core";

export type TokenTableProps = {};

const TokenTable: React.FC<TokenTableProps> = () => {
  const [data, setData] = useState<Token[]>([]);
  const [network, setNetwork] = useState<string>();
  const { account, chainId } = useWeb3React();

  useEffect(() => {
    const getData = async () => {
      if (chainId) {
        const network = chainService.findChain(chainId.toString());
        setNetwork(network?.[0]);
        if (account) {
          const tokens = await chainService.getTokens(
            account,
            chainId.toString()
          );
          setData(tokens);
        }
      }
    };
    getData();
  }, [account, chainId]);

  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h4 className="table-account">
          Account: {formatAccount(account ?? "")}
        </h4>
        {network && (
          <h6 className="table-network">
            network: {network}
            <img
              className="network-img"
              src={`${process.env.PUBLIC_URL}/assets/${network}-logo.svg`}
              alt="token-img"
            />
          </h6>
        )}
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="left-collumn">Token</th>
              <th className="right-collumn">Value</th>
            </tr>
          </thead>
          <tbody className="scroll-table">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="left-collumn" valign="top">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/${item.img}`}
                    alt="token-img"
                    className="token-img"
                  />
                  <span
                    style={{
                      display: "block",
                    }}
                  >
                    {item.name}
                  </span>
                </td>
                <td className="right-collumn">{item.balance} Wei</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenTable;
