import { useRef } from "react";
import ColorSetting from "./ColorSetting";
import ModeSetting from "./ModeSetting";
import styles from "./SettingBox.module.css";
import useOutsideClose from "../hooks/useOutsideClose";

function SettingBox({ close }) {
  const settingMenuRef = useRef();

  useOutsideClose(settingMenuRef, close, true);

  return (
    <div className={styles.settingThemesContainer} ref={settingMenuRef}>
      <ColorSetting />
      <ModeSetting />
    </div>
  );
}

export default SettingBox;
