import React, { useRef, useState } from "react";
import { ThemeObject } from "../../context/themeContext";
import PopUp from "./PopUp/PopUp";
import VerifyWallet from "./verifyWallet/VerifyWallet";
import styles from "./wallet.module.scss";

const Wallet = () => {
  const { theme } = ThemeObject();
  const buttonRef = useRef(null);
  const [hide, sethide] = useState(true);
  return (
    <div
      className={
        theme
          ? `${styles.container}`
          : `${styles.container} ${styles.lightMode}`
      }
    >
      <div className={styles.walletContent}>
        {hide && (
          <div className={styles.contentParent}>
            <h3>Click the button below to check if you are eligible </h3>
            <button
              onClick={() => {
                buttonRef.current.alterToggle();
                sethide(!hide);
              }}
            >
              Confirm Eligibility
            </button>
          </div>
        )}
        <VerifyWallet ref={buttonRef} sethide={sethide} hide={hide} />
        {/* <PopUp ref={buttonRef} sethide={sethide} hide={hide} /> */}
      </div>
    </div>
  );
};

export default Wallet;
