import React from "react";
import Wallet from "../../components/ConnectWallet/Wallet";
import Footer from "../../components/Footer/Footer";
import Guide from "../../components/Guide/Guide";
import Partner from "../../components/Partners/Partner";
import Table from "../../components/Table.js/Table";
import { ThemeObject } from "../../context/themeContext";
import styles from "./homePage.module.scss";
import {AiOutlineRight} from "react-icons/ai"

const Homepage = () => {
  const { theme } = ThemeObject();
  return (
    <div
      className={
        theme
          ? `${styles.container}`
          : `${styles.container} ${styles.lightMode}`
      }
    >
      <div className={styles.bodyParentDiv}>
        <div className={styles.bodyContainer}>
          <div className={styles.blockChainParent}>
            <div className={styles.blockChain}>
              <span>
                <h1>
                  A crypto wallet & gateway to <br /> blockchain apps
                </h1>
              </span>
              <p>
                Start exploring blockchain applications in seconds. Trusted by
                over 21 million users worldwide.
              </p>
              <button
                onClick={() => {
                  window.location.replace("https://metamask.io/download");
                }}
              >
                Download now
              </button>
            </div>
            <div className={styles.blockChainLogo}></div>
          </div>
          <div className={styles.learnMore}>
            <span>LEARN MORE</span>
            <span className={styles.arrowKey}>
               <AiOutlineRight />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.guideContainer}>
        <Guide />
      </div>

      <div className={styles.walletContainer}>
        <Wallet />
      </div>

      <div className={styles.transactionContainer}>
        <Table />
      </div>

      <div className={styles.partnerContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textItem}>
            <h2>Your key to blockchain applications</h2>
            MetaMask provides an essential utility for blockchain newcomers,
            token traders, crypto gamers, and developers. Over a million
            downloads and counting!
          </div>
        </div>
        <div className={styles.partnerImageContainer}>
          <Partner />
        </div>
      </div>

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
