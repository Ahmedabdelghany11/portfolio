import Overlay from "./Overlay";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <Overlay>
      <div className={styles.spinner}>{`3b8'ny`}</div>
    </Overlay>
  );
}

export default Spinner;
