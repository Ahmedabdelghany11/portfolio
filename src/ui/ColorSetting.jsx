import { useThemeColor } from "../context/ThemeColorContext";
import styles from "./ColorSetting.module.css";

function ColorSetting() {
  const { themeColor, colors, changeThemeColor } = useThemeColor();

  return (
    <div className={styles.colorSetting}>
      {colors?.map((color) => (
        <span
          className={`${styles.colorSettingOption} ${color === themeColor ? "active" : ""}`}
          key={color}
          style={{ backgroundColor: `${color}` }}
          onClick={() => changeThemeColor(color)}
        ></span>
      ))}
    </div>
  );
}

export default ColorSetting;
