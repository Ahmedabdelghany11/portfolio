import styles from "./Heading.module.css";

function Heading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default Heading;
