import { useState } from "react";
import styles from "./Setting.module.css";
import { HiCog } from "react-icons/hi";
import SettingBox from "./SettingBox";

function Setting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleOpenMenu() {
    setIsMenuOpen((open) => !open);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className={`${styles.settingContainer} ${isMenuOpen ? "open" : ""}`}>
      <span className={styles.settingIconBox} onClick={toggleOpenMenu}>
        <HiCog />
      </span>
      {isMenuOpen && <SettingBox close={handleCloseMenu} />}
    </div>
  );
}

export default Setting;
