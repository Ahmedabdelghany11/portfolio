import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaGooglePlusG,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinksContainer}>
        <Link
          className={`${styles.socialLink} gmail`}
          to="mailto:ahmedabdoelhewala211@gmail.com"
        >
          <FaGooglePlusG />
        </Link>
        <Link
          className={`${styles.socialLink} github`}
          to="https://github.com/Ahmedabdelghany11/"
        >
          <FaGithub />
        </Link>
        <Link
          className={`${styles.socialLink} linkedin`}
          to="https://www.linkedin.com/in/ahmed-abd-el-ghany-276051279/"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className={`${styles.socialLink} facebook`}
          to="https://www.facebook.com/AHMEDABDELGHANY01"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className={`${styles.socialLink} whatsapp`}
          to="https://wa.me/+201060170368"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2024, Ahmed Abd El-Ghany.
      </div>
    </div>
  );
}

export default Footer;
