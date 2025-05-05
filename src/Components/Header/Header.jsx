import { useState } from "react";
import styles from "./header.module.css";
import Logo from "../../images/Logo-penger-solutions.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    window.scroll(0, 0);
    setMenu(false);
  };

  const openMenu = () => {
    setMenu(!menu ? true : false);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img
          src={Logo}
          alt="Logo"
          className={styles.logo}
          onClick={() => navigate("/")}
        />

        <div className={styles.containerLinks}>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? styles.ActiveLinks : styles.links
            }
            onClick={() => closeMenu()}
          >
            About
          </Link>

          <Link
            to="/services"
            className={
              location.pathname === "/services" ? styles.ActiveLinks : styles.links
            }
            onClick={() => closeMenu()}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? styles.ActiveLinks : styles.links
            }
            onClick={() => closeMenu()}
          >
            Contact
          </Link>

          <Link
            to="/providers"
            className={
              location.pathname === "/providers" ? styles.ActiveLinks : styles.links
            }
            onClick={() => closeMenu()}
          >
            Freight Payment Providers
          </Link>
        </div>

        <button className={styles.button} onClick={() => navigate("/")}>
          Home
        </button>

        <div className={styles.menu}>
          {!menu ? (
            <IoMenu className={styles.icon} onClick={openMenu} />
          ) : (
            <IoClose className={styles.icon} onClick={openMenu} />
          )}
        </div>

        {menu ? (
          <div className={styles.containerMenu}>
            <Link
              to="/"
              className={
                location.pathname === "/" ? styles.ActiveLinks : styles.links
              }
              onClick={() => closeMenu()}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? styles.ActiveLinks
                  : styles.links
              }
              onClick={() => closeMenu()}
            >
              About
            </Link>

            <Link
              to="/services"
              className={
                location.pathname === "/services"
                  ? styles.ActiveLinks
                  : styles.links
              }
              onClick={() => closeMenu()}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? styles.ActiveLinks
                  : styles.links
              }
              onClick={() => closeMenu()}
            >
              Contact
            </Link>

            <Link
              to="/providers"
              className={
                location.pathname === "/providers"
                  ? styles.ActiveLinks
                  : styles.links
              }
              onClick={() => closeMenu()}
            >
              Freight Payment Providers
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
