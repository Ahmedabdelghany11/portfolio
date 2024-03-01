import Nav from "./Nav";
import styles from "./AppLayout.module.css";
import Setting from "./Setting";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Nav />
      <Setting />
      <div className={styles.wrappedContent}>{children}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
