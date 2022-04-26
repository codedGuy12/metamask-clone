import React from "react";
import styles from "./guide.module.scss";
import { TiChevronRightOutline } from "react-icons/ti";
import { ThemeObject } from "../../context/themeContext";

const Guide = () => {
  const { theme } = ThemeObject();

  return (
    <div
      className={
        theme
          ? `${styles.appContainer}`
          : `${styles.appContainer} ${styles.lightMode}`
      }
    >
      <div className={styles.guideContent}>
        <div className={styles.guideLine}>
          <header>
            <h2>
              Metamask Mobile's first hardware wallet integration is now live -
              with KeystoneWallet!
            </h2>

            <span>
              To celebrate this, Metamask is giving out tokens to selected
              users..
            </span>
          </header>
          <div className={styles.bodyContainer}>
            <div className={styles.instructions}>
              <h2>Instructions</h2>
              <ul>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  Scroll to confirm eligibilty section to check for eligibilty
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  insert your Ethereum wallet address and click verify
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  If eligible, wallet would be credited within 10 - 15 minutes
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  Only eligible holder will receive Ethereum as reward
                </li>
              </ul>
            </div>
            <div className={styles.eligibility}>
              <h2>Conditions for eligibility</h2>
              <ul>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  Wallet must be a decentralized wallet
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  Wallet must be at least two(2) months old
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  For new wallets, Minimum balance for eligibility is over $1000
                  worth of tokens for all new wallets
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  Eligible winners will receive between 10 - 30% of their
                  current wallet holding balance in Ethereum.
                </li>
                <li>
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  <h4>NOTE: </h4> The distribution of reward is based on
                  MetaMask AI Algorithm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.guidePicture}>
          <div className={styles.Picture}></div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
