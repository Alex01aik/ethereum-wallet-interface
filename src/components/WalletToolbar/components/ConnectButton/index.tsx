import { useWeb3React } from "@web3-react/core";
import "./styles.css";

export type ConnectButtonProps = {
  type: "CONNECT" | "DISCONNECT";
};

const ConnectButton: React.FC<ConnectButtonProps> = ({ type }) => {
  const { connector } = useWeb3React();

  const activate = async () => {
    await connector.activate();
  };

  const deactivate = async () => {
    await connector.deactivate?.();
    await connector.resetState();
    localStorage.removeItem("account");
  };
  return (
    <button
      id="connect-button"
      onClick={async () => {
        switch (type) {
          case "CONNECT":
            await activate();
            break;
          case "DISCONNECT":
            await deactivate();
            break;
        }
      }}
    >
      {type} WALLET
    </button>
  );
};

export default ConnectButton;
