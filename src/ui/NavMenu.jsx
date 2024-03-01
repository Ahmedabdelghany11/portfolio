import { NavLink } from "react-router-dom";
import { useRef } from "react";
import styles from "./NavMenu.module.css";
import useOutsideClose from "../hooks/useOutsideClose";
import { HiInformationCircle, HiHome } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";

function NavMenu({ close }) {
  const NavMenuRef = useRef();

  useOutsideClose(NavMenuRef, close, true);

  return (
    <div className={styles.navMenu} ref={NavMenuRef}>
      <NavLink to="/" className={styles.navMenuItem} key="home" onClick={close}>
        <HiHome />
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={styles.navMenuItem}
        key="about"
        onClick={close}
      >
        <HiInformationCircle />
        About
      </NavLink>

      <NavLink
        to="/skills"
        className={styles.navMenuItem}
        key="skills"
        onClick={close}
      >
        <BsStars />
        Skills & Certificates
      </NavLink>

      <NavLink
        to="/projects"
        className={styles.navMenuItem}
        key="projects"
        onClick={close}
      >
        <RiCodeBoxFill />
        Projects
      </NavLink>
    </div>
  );
}

export default NavMenu;
