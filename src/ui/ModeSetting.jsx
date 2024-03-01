import styles from "./ModeSetting.module.css";
import { useThemeMode } from "../context/ThemeModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

function ModeSetting() {
  const { isDark, toggleMode } = useThemeMode();

  function handleClickLight() {
    if (isDark) toggleMode();
  }

  function handleClickDark() {
    if (!isDark) toggleMode();
  }

  return (
    <div className={styles.modeSetting}>
      <HiSun onClick={handleClickLight} />
      <span
        className={`${styles.modeThemeBar} ${isDark ? "dark" : "light"}`}
        onClick={toggleMode}
      >
        <span className={styles.modeThemeBarBall} />
      </span>
      <HiMoon onClick={handleClickDark} />
    </div>
  );
}

export default ModeSetting;
