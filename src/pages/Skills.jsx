import { useState } from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import styles from "./Skills.module.css";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaSass } from "react-icons/fa";

import bachelorCertificate from "/Graduation Certificate.jpg";
import htmlCssCertificate from "/HTML and CSS in depth.jpg";
import javascriptCertificate from "/Programming with JavaScript.jpg";
import reactBasicsCertificate from "/React Basics.jpg";
import reactAdvancedCertificate from "/Advanced React.jpg";
import ultimateReactCertificate from "/The Ultimate React, Redux, & More.jpg";
import versionControlCertificate from "/Version Control.jpg";

const certificates = {
  bachelorCertificate,
  htmlCssCertificate,
  javascriptCertificate,
  reactBasicsCertificate,
  reactAdvancedCertificate,
  ultimateReactCertificate,
  versionControlCertificate,
};

function Skills() {
  const [openImg, setOpenImg] = useState(certificates.bachelorCertificate);

  function handleImageChange(img) {
    setOpenImg(img);
  }

  return (
    <Container>
      <div className={styles.skills}>
        <Heading>Skills</Heading>
        <div className={styles.skillsContainer}>
          <span className={`${styles.skillBox} html`}>
            <FaHtml5 />
            <span>HTML 5</span>
          </span>
          <span className={`${styles.skillBox} css`}>
            <FaCss3Alt />
            <span>CSS</span>
          </span>
          <span className={`${styles.skillBox} tailwind`}>
            <SiTailwindcss />
            <span>Tailwind</span>
          </span>
          <span className={`${styles.skillBox} bootstrap`}>
            <SiBootstrap />
            <span>Bootstrap</span>
          </span>
          <span className={`${styles.skillBox} sass`}>
            <FaSass />
            <span>SASS</span>
          </span>
          <span className={`${styles.skillBox} javascript`}>
            <SiJavascript />
            javaScript
          </span>
          <span className={`${styles.skillBox} jquery`}>
            <SiJquery />
            <span>jQuery</span>
          </span>
          <span className={`${styles.skillBox} react`}>
            <FaReact />
            <span>React</span>
          </span>
          <span className={`${styles.skillBox} redux`}>
            <SiRedux />
            <span>Redux (RTK)</span>
          </span>
          <span className={`${styles.skillBox} github`}>
            <FaGithub />
            <span>GitHub</span>
          </span>
        </div>

        <div className={styles.certificatesContainer}>
          <div className={styles.certificateNamesContainer}>
            <div
              className={`${styles.certificateName} ${openImg === bachelorCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(bachelorCertificate)}
            >
              {`Bachelor' certificate`}
            </div>

            <div
              className={`${styles.certificateName} ${openImg === htmlCssCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(htmlCssCertificate)}
            >
              Meta: HTML & CSS
            </div>

            <div
              className={`${styles.certificateName} ${openImg === javascriptCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(javascriptCertificate)}
            >
              Meta: Programming with JavaScript
            </div>

            <div
              className={`${styles.certificateName} ${openImg === reactBasicsCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(reactBasicsCertificate)}
            >
              Meta: React Basics
            </div>

            <div
              className={`${styles.certificateName} ${openImg === reactAdvancedCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(reactAdvancedCertificate)}
            >
              Meta: Advanced React
            </div>

            <div
              className={`${styles.certificateName} ${openImg === versionControlCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(versionControlCertificate)}
            >
              Meta: Version Control
            </div>

            <div
              className={`${styles.certificateName} ${openImg === ultimateReactCertificate ? "open" : ""}`}
              onClick={() => handleImageChange(ultimateReactCertificate)}
            >
              Udemy: The Ultimate React, Redux, & More
            </div>
          </div>

          <div className={styles.certificateImageContainer}>
            <img src={openImg} alt={openImg} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Skills;
