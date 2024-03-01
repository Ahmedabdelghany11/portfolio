import { createPortal } from "react-dom";
import styles from "./Overlay.module.css";

function Overlay({ children }) {
  return createPortal(
    <div className={styles.overlay}>{children}</div>,
    document.body
  );
}

export default Overlay;
