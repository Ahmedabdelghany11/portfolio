import Heading from "../ui/Heading";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import shoppyImg from "/Shoppy.png";
import todoImg from "/Todo.png";
import chefImg from "/YourChef.png";
import curaImg from "/Cura.png";
import portfolioImg from "/Portfolio.png";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";

function Projects() {
  const [activeSlide, setActiveSlide] = useState("shoppy");

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const slides = swiper.slides;
    const activeSlideElement = slides[activeIndex];
    const activeSlideId = activeSlideElement.getAttribute("data_slide");

    setActiveSlide(activeSlideId);
  };

  return (
    <div className={styles.projects}>
      <Heading>Projects</Heading>
      <Swiper
        spaceBetween={15}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        initialSlide={0}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className={`${styles.projectsContainer} swiper-container`}
      >
        <SwiperSlide
          className={`${styles.projectBox} swiper-slide ${activeSlide === "shoppy" ? "active" : ""}`}
          data_slide="shoppy"
        >
          <div className={`${styles.projectImgContainer}`}>
            <img src={shoppyImg} alt="Shoopy" title="Shoopy" />
          </div>
          <div className={styles.projectInfoContainer}>
            <h3 className={styles.projectInfoHeading}>Shoppy</h3>
            <p className={styles.projectInfoDescription}>
              An well structured, scalable, and maintainable E-Commerce
              application with some features like real authentication /
              authorization, and state management for the products and the user
              details and his shopping cart.
            </p>
            <div className={styles.projectInfoTechnologiesContainer}>
              <span className={styles.projectInfoTechnology}>javaScript</span>
              <span className={styles.projectInfoTechnology}>
                {`React.js (Vite)`}
              </span>
              <span className={styles.projectInfoTechnology}>
                React-Router-Dom
              </span>
              <span className={styles.projectInfoTechnology}>React Query</span>
              <span className={styles.projectInfoTechnology}>
                {`Redux (RTK)`}
              </span>
              <span className={styles.projectInfoTechnology}>
                React-hook-form
              </span>
              <span className={styles.projectInfoTechnology}>
                Styled Components
              </span>
            </div>
            <div className={styles.projectInfoLinksContainer}>
              <Link
                to="https://github.com/Ahmedabdelghany11/shoppy"
                target="_blank"
                className={`${styles.projectInfoLink} github`}
              >
                <FaGithub />
                Repo
              </Link>
              <Link
                to="https://shoppy-online.netlify.app/"
                target="_blank"
                className={`${styles.projectInfoLink} host`}
              >
                <HiExternalLink />
                Preview
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.projectBox} swiper-slide ${activeSlide === "yourChef" ? "active" : ""}`}
          data_slide="yourChef"
        >
          <div className={`${styles.projectImgContainer}`}>
            <img src={chefImg} alt="Your Chef" title="Your Chef" />
          </div>
          <div className={styles.projectInfoContainer}>
            <h3 className={styles.projectInfoHeading}>Your Chef</h3>
            <p className={styles.projectInfoDescription}>
              A small website as a practice on improving skills in dealing with
              APIs and react. It provides a lot of recipes, and has a good
              feature that user can bookmark many recipes to view later.
            </p>
            <div className={styles.projectInfoTechnologiesContainer}>
              <span className={styles.projectInfoTechnology}>javaScript</span>
              <span className={styles.projectInfoTechnology}>
                {`React.js (Vite)`}
              </span>
              <span className={styles.projectInfoTechnology}>
                React-Router-Dom
              </span>
              <span className={styles.projectInfoTechnology}>React Query</span>
              <span className={styles.projectInfoTechnology}>
                React-YouTube
              </span>
              <span className={styles.projectInfoTechnology}>
                Styled Components
              </span>
            </div>
            <div className={styles.projectInfoLinksContainer}>
              <Link
                to="https://github.com/Ahmedabdelghany11/your-chef"
                target="_blank"
                className={`${styles.projectInfoLink} github`}
              >
                <FaGithub />
                Repo
              </Link>
              <Link
                to="https://your-chef.netlify.app/"
                target="_blank"
                className={`${styles.projectInfoLink} host`}
              >
                <HiExternalLink />
                Preview
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.projectBox} swiper-slide ${activeSlide === "todo" ? "active" : ""}`}
          data_slide="todo"
        >
          <div className={`${styles.projectImgContainer}`}>
            <img src={todoImg} alt="To do list" title="To do list" />
          </div>
          <div className={styles.projectInfoContainer}>
            <h3 className={styles.projectInfoHeading}>To do List</h3>
            <p className={styles.projectInfoDescription}>
              A meal recipes app, I use it as a way to improve skills in CRUD
              operations, using client storage, and preform good state
              management, with additional features such as deadlines and tasks
              progress.
            </p>
            <div className={styles.projectInfoTechnologiesContainer}>
              <span className={styles.projectInfoTechnology}>javaScript</span>
              <span className={styles.projectInfoTechnology}>
                {`React.js (Vite)`}
              </span>
              <span className={styles.projectInfoTechnology}>
                {`Redux (RTK)`}
              </span>
              <span className={styles.projectInfoTechnology}>Tailwind</span>
            </div>
            <div className={styles.projectInfoLinksContainer}>
              <Link
                to="https://github.com/Ahmedabdelghany11/todo_list"
                target="_blank"
                className={`${styles.projectInfoLink} github`}
              >
                <FaGithub />
                Repo
              </Link>
              <Link
                to="https://tasks-todo-list-help.netlify.app/"
                target="_blank"
                className={`${styles.projectInfoLink} host`}
              >
                <HiExternalLink />
                Preview
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.projectBox} swiper-slide ${activeSlide === "cura" ? "active" : ""}`}
          data_slide="cura"
        >
          <div className={`${styles.projectImgContainer}`}>
            <img src={curaImg} alt="Cura" title="Cura" />
          </div>
          <div className={styles.projectInfoContainer}>
            <h3 className={styles.projectInfoHeading}>Cura</h3>
            <p className={styles.projectInfoDescription}>
              My Graduation project (Pets health care system), a simulation of
              an IoT based system for caring, monitoring the real time health
              condition of the pets, and give the owner the best advices and
              reports about his pet, and connect this owner with vet to help.
            </p>
            <div className={styles.projectInfoTechnologiesContainer}>
              <span className={styles.projectInfoTechnology}>HTML 5</span>
              <span className={styles.projectInfoTechnology}>CSS</span>
              <span className={styles.projectInfoTechnology}>SASS</span>
              <span className={styles.projectInfoTechnology}>javaScript</span>
              <span className={styles.projectInfoTechnology}>jQuery</span>
              <span className={styles.projectInfoTechnology}>Ajax</span>
            </div>
            <div className={styles.projectInfoLinksContainer}>
              <Link
                to="https://github.com/mahmoudeldeeb00/AnimalHealthCare"
                target="_blank"
                className={`${styles.projectInfoLink} github`}
              >
                <FaGithub />
                Repo
              </Link>
              <Link
                to="http://cura.somee.com/"
                target="_blank"
                className={`${styles.projectInfoLink} host`}
              >
                <HiExternalLink />
                Preview
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.projectBox} swiper-slide ${activeSlide === "portfolio" ? "active" : ""}`}
          data_slide="portfolio"
        >
          <div className={`${styles.projectImgContainer}`}>
            <img src={portfolioImg} alt="Portfolio" title="Portfolio" />
          </div>
          <div className={styles.projectInfoContainer}>
            <h3 className={styles.projectInfoHeading}>Portfolio</h3>
            <p className={styles.projectInfoDescription}>
              {`It's just an application to introduce myself with, and view my projects within, and practise more.`}
            </p>
            <div className={styles.projectInfoTechnologiesContainer}>
              <span className={styles.projectInfoTechnology}>javaScript</span>
              <span
                className={styles.projectInfoTechnology}
              >{`React.js (Vite)`}</span>
              <span className={styles.projectInfoTechnology}>
                React-Router-Dom
              </span>
              <span className={styles.projectInfoTechnology}>Css Modules</span>
            </div>
            <div className={styles.projectInfoLinksContainer}>
              <Link
                to="https://github.com/mahmoudeldeeb00/AnimalHealthCare"
                target="_blank"
                className={`${styles.projectInfoLink} github`}
              >
                <FaGithub />
                Repo
              </Link>
              <Link to="/" className={`${styles.projectInfoLink} host`}>
                <HiExternalLink />
                Preview
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
