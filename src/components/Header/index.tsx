import WalletToolbar from "../WalletToolbar";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <h1 id="logo">ETHEREUM WALLET</h1>
      <WalletToolbar />
    </header>
  );
};

export default Header;
