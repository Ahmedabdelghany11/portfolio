import { useState } from "react";
import styles from "./Nav.module.css";
import NavMenu from "./NavMenu";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleOpenMenu() {
    setIsMenuOpen((open) => !open);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? "open" : ""}`}
        onClick={toggleOpenMenu}
      >
        <span className={`${styles.menuIconBar} ${styles.outside}`}></span>
        <span className={`${styles.menuIconBar} ${styles.inside}`}></span>
        <span className={`${styles.menuIconBar} ${styles.outside}`}></span>
      </div>
      {isMenuOpen && <NavMenu close={handleCloseMenu} />}
    </nav>
  );
}

export default Nav;
