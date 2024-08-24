import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import avatarImg from "/avatar.jpeg";
import Container from "../ui/Container";

function Home() {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.infoContainer}>
          <h1 className={styles.heading}>Ahmed Abd El-Ghany</h1>
          <span className={styles.jobTitle}>
            A Junior Fron-End Developer | React.js at{" "}
            <Link
              to="https://www.linkedin.com/company/namitec/"
              target="_blank"
            >
              Nami
            </Link>
          </span>
          <div className={styles.about}>
            <p>{`A junior front-end developer using React.js.`}</p>
            <p>
              {` Have a bachelor's degree in physics and computer science from Minufiyah University.`}
            </p>
            <p>{`Have good skills in Responsive Web Designs, and JavaScript.`}</p>
          </div>
          <Link to="/about" className={styles.buttonLink}>
            Read more
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <img src={avatarImg} alt="Ahmed Abd El-Ghany" />
        </div>
      </div>
    </Container>
  );
}

export default Home;
