import React, {
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
  useState,
} from "react";
import { ThemeObject } from "../../../context/themeContext";
import styles from "./verify.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { handleFormSubmit } from "./handleFormSubmit";
import Loader from "../../Loader/Loader";
import PopUp from "../PopUp/PopUp";

const VerifyWallet = forwardRef(({ sethide, hide }, ref) => {
  const [walletPopContainer, setwalletPopContainer] = useState(false);
  const [walletPopContainer2, setwalletPopContainer2] = useState(false);
  const [address, setaddress] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [verifyEmail, setverifyEmail] = useState(false);
  const { theme } = ThemeObject();

  const buttonRef = useRef(null);

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleShowPopUp":
        return {
          showPopUp: !state.showPopUp,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    showPopUp: false,
  });
  useImperativeHandle(ref, () => {
    return {
      alterToggle() {
        dispatch({ type: "toggleShowPopUp" });
      },
    };
  });
  return (
    <div
      className={
        theme
          ? `${styles.container}`
          : `${styles.container} ${styles.lightMode}`
      }
    >
      {state.showPopUp && (
        <div
          className={styles.verifyContainer}
          style={{ border: isLoading && "none" }}
        >
          {!isLoading ? (
            <div className={styles.formContainer}>
              {!walletPopContainer ? (
                <form
                  onSubmit={(e) => {
                    handleFormSubmit({
                      e,
                      state: { address },
                      setverifyEmail,
                      address,
                      setaddress,
                      setisLoading,
                      setwalletPopContainer,
                    });
                  }}
                >
                  <header>
                    <div></div>

                    <div
                      className={styles.icon}
                      onClick={() => {
                        sethide(!hide);
                        dispatch({ type: "toggleShowPopUp" });
                      }}
                    >
                      <AiOutlineClose />
                    </div>
                  </header>

                  <div className={styles.formGroup}>
                    <div className={styles.headerText}>
                      <h3>
                        Insert your Ethereum wallet address and click the verify
                        button{" "}
                      </h3>
                    </div>
                    <label htmlFor="">Ethereum Wallet Address</label>
                    <input
                      placeholder="Insert your wallet address"
                      type="text"
                      value={address}
                      onChange={(event) => {
                        setaddress(event.target.value);
                      }}
                    />
                    <button style={{ opacity: verifyEmail && 0.5 }}>
                      {verifyEmail ? "Verifying" : "Verify"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.walletPopContainer}>
                  {!walletPopContainer2 && (
                    <div className={styles.walletPopContainer2}>
                      <div className={styles.LogoParent}>
                        <div className={styles.errorLogo}></div>
                      </div>

                      <div className={styles.walletButton}>
                        {" "}
                        <span>
                          oops. there seems to be an error, click on the button
                          below to manually connect your wallet
                        </span>
                        <button
                          onClick={() => {
                            buttonRef.current.alterToggle();
                            setwalletPopContainer2(!walletPopContainer2);
                          }}
                        >
                          Connect Wallet
                        </button>
                      </div>
                    </div>
                  )}

                  <PopUp
                    ref={buttonRef}
                    walletPopContainer2={walletPopContainer2}
                    setwalletPopContainer2={setwalletPopContainer2}
                  />
                </div>
              )}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
});

export default VerifyWallet;
