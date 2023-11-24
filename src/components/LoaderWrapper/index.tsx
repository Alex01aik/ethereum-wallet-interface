import { Circles } from "react-loader-spinner";
import "./styles.css";
import { ReactNode } from "react";
import { useWeb3React } from "@web3-react/core";

export type LoaderWrapperProps = {
  children: ReactNode;
};

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const { isActivating } = useWeb3React();

  return (
    <>
      {children}
      {isActivating && (
        <div id="loaderBackground">
          <Circles
            ariaLabel="loading"
            wrapperClass="loader"
            color="aliceblue"
          />
        </div>
      )}
    </>
  );
};

export default LoaderWrapper;
