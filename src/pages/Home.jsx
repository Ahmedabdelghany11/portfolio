import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import avatarImg from "/avatar.jpeg";
import Container from "../ui/Container";
import { useScramble } from "use-scramble";
import { useEffect, useState } from "react";

function Home() {
  const [scrambleText, setScrambleText] = useState("Ahmed Abd El-Ghany");

  const { ref: headingRef } = useScramble({
    text: scrambleText,
    speed: 0.2,
    tick: 1,
    step: 1,
    scramble: 6,
  });

  useEffect(() => {
    const interval = setInterval(
      () => {
        setScrambleText((prev) =>
          prev === "Ahmed Abd El-Ghany"
            ? "a Frontend Developer | React.js"
            : "Ahmed Abd El-Ghany"
        );
      },
      scrambleText === "Ahmed Abd El-Ghany" ? 5000 : 8000
    );

    return () => clearInterval(interval);
  }, [scrambleText]);

  return (
    <Container>
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      /> */}
      <div className={styles.home}>
        <div className={styles.infoContainer}>
          <h1 className={styles.heading}>
            {`I'm `} <span ref={headingRef} />
          </h1>
          <div className={styles.about}>
            <p>
              {`Have a bachelor's degree in physics and computer science from Minufiyah University.`}
            </p>
            <p>{`Have very good skills in Front-End Development in general, and especially in Responsive Web Designs, JavaScript, and its library React.`}</p>
            <p>{`Always have a lot of passion, ambition, and enthusiasm for software engineering, and seeking to become a professional MERN stack developer, and looking for every opportunity to achieve my goals`}</p>
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
