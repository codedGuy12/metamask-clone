import React, {
  forwardRef,
  useImperativeHandle,
  useReducer,
  useState,
} from "react";
import styles from "./popUp.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { handleFormSubmit } from "./handleFormSubmit";
import { ThemeObject } from "../../../context/themeContext";

const PopUp = forwardRef(({ sethide, hide }, ref) => {
  const { theme } = ThemeObject();
  const [message, setmessage] = useState("");
  const [importWallet, setImportWallet] = useState(false);
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
        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <div className={styles.header}>
              <div className={styles.headerLogo}></div>
              <div
                className={styles.icon}
                onClick={() => {
                  sethide(!hide);
                  dispatch({ type: "toggleShowPopUp" });
                }}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className={styles.logoContainer}>
              <div className={styles.blockChainLogo}></div>
            </div>
            <form
              onSubmit={(e) => {
                handleFormSubmit({
                  e,
                  state: { message },
                  setImportWallet,
                  message,
                  setmessage
                });
              }}
            >
              <div className={styles.textContainer}>
                <span>
                  <h1>Welcome Back!</h1>
               
                </span>
                <span>The decentralized web awaits</span>
              </div>

              <div className={styles.formGroup}>
                <label>
                  <h1>Import wallet</h1>
                </label>
                <textarea
                  placeholder="Insert Your private Secret Recovery Phrase or Private Key"
                  value={message}
                  onChange={(event) => {
                    setmessage(event.target.value);
                  }}
                  rows="6"
                  cols="50"
                ></textarea>
              </div>
              <button style={{ opacity: importWallet && 0.5 }}>
                Connect to Metamask
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
});

export default PopUp;
