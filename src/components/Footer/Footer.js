import React from "react";
import { ThemeObject } from "../../context/themeContext";
import styles from "./footer.module.scss";

const Footer = () => {
  const { theme } = ThemeObject();

  return (
    <div
      className={
        theme
          ? `${styles.footerContainer}`
          : `${styles.footerContainer} ${styles.lightMode}`
      }
    >
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <div className={styles.logoItem}></div>
          <div className={styles.logoText}>MetaMask</div>
        </div>
        <div className={styles.footerGallery}>
          <div>
            <span>
              <h2>LEARN MORE</h2>
            </span>
            <ul>
              <li>About</li>
              <li>Developers Docs</li>
              <li>Download</li>
              <li>Documentation</li>
              <li>MetaMask Institutional</li>
            </ul>
          </div>
          <div>
            <span>
              <h2>GET INVOLVED</h2>
            </span>
            <ul>
              <li>Github</li>
              <li>Gitcoin</li>
              <li>Open Positions</li>
              <li>Swag Shop</li>
              <li>Press & Partnership</li>
            </ul>
          </div>
          <div>
            <span>
              <h2>CONNECT</h2>
            </span>
            <ul>
              <li>FAQs</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <span>
              <h2>LEGAL</h2>
            </span>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Contributor License Agreement</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          @2022 MetaMask • A ConsenSys Formation
        </div>
      </div>
    </div>
  );
};

export default Footer;
