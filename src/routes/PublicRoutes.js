import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./publicRoutes.module.scss";

export default function PublicRoute({ children }) {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <>
      <Navbar setnavOpen={setnavOpen} navOpen={navOpen} />
      <aside
        className={
          navOpen
            ? `${styles.componentAside} ${styles.active}`
            : `${styles.componentAside}`
        }
      >
        {children}
      </aside>
    </>
  );
}
