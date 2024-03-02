import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import { HiOutlineArrowSmLeft, HiOutlineExclamation } from "react-icons/hi";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.errorPageContainer}>
      <HiOutlineExclamation className={styles.exclamationSvg} />
      <p className={styles.errorMsg}>
        Oh, There is an error in reaching this page
      </p>
      <p className={styles.errorMsg}>Please! Go Back and try again 😃</p>
      <button className={styles.errorBtn} onClick={() => navigate("/")}>
        <HiOutlineArrowSmLeft />
        <span>Back</span>
      </button>
    </div>
  );
}

export default ErrorPage;
