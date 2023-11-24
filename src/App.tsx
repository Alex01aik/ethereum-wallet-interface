import Header from "./components/Header";
import Main from "./components/Main";
import LoaderWrapper from "./components/LoaderWrapper";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

const App = () => {
  const { account, isActive, connector } = useWeb3React();

  const connectWallet = async () => {
    await connector.activate();
  };

  useEffect(() => {
    const account = localStorage.getItem("account");
    if (!isActive && account) {
      connectWallet().catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    account
      ? localStorage.setItem("account", account)
      : localStorage.removeItem("account");
  }, [account]);

  return (
    <LoaderWrapper>
      <Header />
      <Main />
    </LoaderWrapper>
  );
};

export default App;
