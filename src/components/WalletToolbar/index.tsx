import { useWeb3React } from "@web3-react/core";
import "./styles.css";
import ConnectButton from "./components/ConnectButton";
import { formatAccount } from "../../utils/formatAccount";

const WalletToolbar = () => {
  const { account } = useWeb3React();

  return account ? (
    <div id="account-toolbar">
      <h6 id="account-address">{formatAccount(account)}</h6>
      <ConnectButton type="DISCONNECT" />
    </div>
  ) : (
    <ConnectButton type="CONNECT" />
  );
};

export default WalletToolbar;
