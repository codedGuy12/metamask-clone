import React, { useRef, useState } from "react";
import { ThemeObject } from "../../context/themeContext";
import PopUp from "./PopUp/PopUp";
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
            <h2>CONNECT WALLET</h2>
            <button
              onClick={() => {
                buttonRef.current.alterToggle();
                sethide(!hide);
              }}
            >
              connect wallet
            </button>
          </div>
        )}
        <PopUp ref={buttonRef} sethide={sethide} hide={hide} />
      </div>
    </div>
  );
};

export default Wallet;
