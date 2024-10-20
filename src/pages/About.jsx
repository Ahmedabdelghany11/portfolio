import styles from "./About.module.css";
import {
  HiAcademicCap,
  HiCalendar,
  HiIdentification,
  HiLocationMarker,
  HiPhone,
} from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import Heading from "../ui/Heading";
import { FaGooglePlusG, FaEarthAfrica } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import Container from "../ui/Container";
import Footer from "../ui/Footer";

function About() {
  return (
    <Container>
      <div className={styles.about}>
        <Heading>About Me</Heading>
        <div className={styles.aboutContent}>
          <p>
            {`A junior front-end developer using React.js. Have a bachelor's degree in physics and computer science from
          Minufiyah University. Have good skills in Responsive Web Designs, and JavaScript. Have completed many online courses and certificates in my field to
          improve my skills in web development especially with JavaScript and
          React library. Always have a lot of passion, ambition, and enthusiasm for software
          engineering, and seeking to become a professional MERN stack
          developer, and looking for every opportunity to achieve my goals.`}
          </p>
        </div>
        <div className={styles.aboutInfo}>
          <div className={styles.aboutInfoBox} key="name">
            <span className={styles.aboutInfoBoxTitle}>
              <HiIdentification />
              Name:
            </span>
            <span className={styles.aboutInfoBoxValue}>
              Ahmed Abd El-Ghany El-Hewala
            </span>
          </div>
          <div className={styles.aboutInfoBox} key="birthdate">
            <span className={styles.aboutInfoBoxTitle}>
              <HiCalendar />
              Birthdate:
            </span>
            <span className={styles.aboutInfoBoxValue}>01/01/2001</span>
          </div>
          <div className={styles.aboutInfoBox} key="nationality">
            <span className={styles.aboutInfoBoxTitle}>
              <FaEarthAfrica style={{ fontSize: "1.6rem" }} />
              Nationality:
            </span>
            <span className={styles.aboutInfoBoxValue}>Egyptian</span>
          </div>
          <div className={styles.aboutInfoBox} key="address">
            <span className={styles.aboutInfoBoxTitle}>
              <HiLocationMarker />
              Address:
            </span>
            <span className={styles.aboutInfoBoxValue}>
              Al Minufiyah, Egypt
            </span>
          </div>
          <div className={styles.aboutInfoBox} key="languages">
            <span className={styles.aboutInfoBoxTitle}>
              <FaLanguage />
              Languages:
            </span>
            <span className={styles.aboutInfoBoxValue}>
              <span>English</span>
              <span>Arabic</span>
            </span>
          </div>
          <div className={styles.aboutInfoBox} key="education">
            <span className={styles.aboutInfoBoxTitle}>
              <HiAcademicCap />
              Education:
            </span>
            <span className={styles.aboutInfoBoxValue}>
              Al Minufiyah University, Faculty of Science, Physics and Computer
              Science Department
            </span>
          </div>
          <div className={styles.aboutInfoBox} key="grade">
            <span className={styles.aboutInfoBoxTitle}>
              <PiStudentFill />
              Grade:
            </span>
            <span className={styles.aboutInfoBoxValue}>Very good</span>
          </div>
          <div className={styles.aboutInfoBox} key="phone">
            <span className={styles.aboutInfoBoxTitle}>
              <HiPhone style={{ fontSize: "1.6rem" }} />
              Phone Number:
            </span>
            <a
              href="tel:+201060170368"
              className={styles.aboutInfoBoxValue}
              style={{ cursor: "pointer" }}
            >
              +201060170368
            </a>
          </div>
          <div className={styles.aboutInfoBox} key="gmail">
            <span className={styles.aboutInfoBoxTitle}>
              <FaGooglePlusG />
              Gmail:
            </span>
            <a
              href="mailto:ahmed.abdelghany1211@gmail.com"
              className={styles.aboutInfoBoxValue}
              style={{ cursor: "pointer" }}
            >
              ahmed.abdelghany1211@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default About;
