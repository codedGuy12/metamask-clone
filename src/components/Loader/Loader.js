import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderParent}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;