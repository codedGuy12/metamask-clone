import React, { useReducer } from "react";
import styles from "./navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeObject } from "../../context/themeContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Navbar = () => {
  const { toggleTheme, theme } = ThemeObject();
  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleNavIcon":
        return {
          toggleNav: !state.toggleNav,
          dropDownActive: state.dropDownActive,
        };
      case "toggleDropDownActive":
        return {
          toggleNav: state.toggleNav,
          dropDownActive: !state.dropDownActive,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    toggleNav: false,
    dropDownActive: false,
  });
  return (
    <div
      className={
        theme
          ? `${styles.navbarParentDiv}`
          : `${styles.navbarParentDiv} ${styles.lightMode}`
      }
    >
      <div className={styles.horizontalBar}>
        <div className={styles.horizontalBarContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoItem}></div>
            <div className={styles.logoText}>Metamask</div>
          </div>
          <div className={styles.listContent}>
            <div className={styles.listItems}>
              <button
                onClick={() => {
                  window.location.replace("https://metamask.io/download");
                }}
              >
                Download
              </button>
              <ToggleSwitch
                label={theme === true ? "Light Mode" : "Dark Mode"}
              />
            </div>
            <div className={styles.navIconsContainer}>
              <div
                onClick={() => {
                  dispatch({ type: "toggleNavIcon" });
                  dispatch({ type: "toggleDropDownActive" });
                }}
                className={styles.navIcons}
              >
                {!state.toggleNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !state.toggleNav
            ? `${styles.dropDownContent}`
            : `${styles.dropDownContent} ${styles.active}`
        }
      >
        <div className={styles.listContentDropdown}>
          <div className={styles.listItemsDropdown}>
            <button
              onClick={() => {
                window.location.replace("https://metamask.io/download");
              }}
            >
              Download
            </button>
            <div className={styles.toggleSwitch}>
              <ToggleSwitch
                label={theme === true ? "Light Mode" : "Dark Mode"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
