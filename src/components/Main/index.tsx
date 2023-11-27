import { useWeb3React } from "@web3-react/core";
import "./styles.css";
import TokenTable from "../TokenTable";

const Main = () => {
  const { isActive } = useWeb3React();

  return (
    <main>
      {isActive ? (
        <TokenTable />
      ) : (
        <h2 id="prompt">Please, connect your wallet</h2>
      )}
    </main>
  );
};

export default Main;
