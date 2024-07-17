import { useState } from "react";
import "./Header.css";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Providers from "../Providers/Providers";
import Services from "../Services/Services";
import { Box } from "@chakra-ui/react";
import Logo from "../../Logo-penger-solutions.png";

function Header(props) {
  const [pages, setPages] = useState("Home");
  const [icon, setIcon] = useState("lineas");

  const onClick = (e) => {
    const DropDownMenu = document.querySelector(".dropdown_menu");

    DropDownMenu.classList.toggle("open");

    if (icon === "lineas") {
      setIcon("x");
    } else {
      setIcon("lineas");
    }
  };

  const onClickHome = (e) => {
    setPages("Home");
    onClick();
  };

  const onClickAbout = (e) => {
    setPages("About");
    onClick();
  };

  const onClickServices = (e) => {
    setPages("Services");
    onClick();
  };

  const onClickContact = (e) => {
    setPages("Contact");
    onClick();
  };

  const onClickProviders = (e) => {
    setPages("Providers");
    onClick();
  };

  if (pages === "Home") {
    return (
      <Box backgroundColor="white">
        <Box backgroundColor="#0B0125" height="130px">
          <br></br>

          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" onClick={onClickHome} />
            </div>

            <ul className="links">
              <li>
                <button onClick={onClickAbout}>About</button>
              </li>
              <li>
                <button onClick={onClickServices}>Services</button>
              </li>
              <li>
                <button onClick={onClickContact}>Contact</button>
              </li>
              <li>
                <button onClick={onClickProviders}>
                  Freight Payment Providers
                </button>
              </li>
            </ul>

            <button onClick={onClickHome} className="action_btn">
              Home
            </button>

            <button className="toggle_btn" onClick={onClick}>
              {icon === "lineas" ? (
                <ion-icon name="reorder-four-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="close-outline" size="large"></ion-icon>
              )}
            </button>

            <div className="dropdown_menu">
              <div>
                <li>
                  <button
                    onClick={onClickAbout}
                    className="action_btn_responsive"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickServices}
                    className="action_btn_responsive"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickContact}
                    className="action_btn_responsive"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickProviders}
                    className="action_btn_responsive"
                  >
                    Freight Payment
                  </button>
                </li>
                <li>
                  <button onClick={onClickHome} className="home_btn_responsive">
                    Home
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Box>

        <div>
          <Home />
        </div>
      </Box>
    );
  } else if (pages === "About") {
    return (
      <Box backgroundColor="white">
        <Box backgroundColor="#0B0125" height="130px">
          <br></br>

          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" onClick={onClickHome} />
            </div>

            <ul className="links">
              <li>
                <button onClick={onClickAbout}>About</button>
              </li>
              <li>
                <button onClick={onClickServices}>Services</button>
              </li>
              <li>
                <button onClick={onClickContact}>Contact</button>
              </li>
              <li>
                <button onClick={onClickProviders}>
                  Freight Payment Providers
                </button>
              </li>
            </ul>

            <button onClick={onClickHome} className="action_btn">
              Home
            </button>

            <button className="toggle_btn" onClick={onClick}>
              {icon === "lineas" ? (
                <ion-icon name="reorder-four-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="close-outline" size="large"></ion-icon>
              )}
            </button>

            <div className="dropdown_menu">
              <div>
                <li>
                  <button
                    onClick={onClickAbout}
                    className="action_btn_responsive"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickServices}
                    className="action_btn_responsive"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickContact}
                    className="action_btn_responsive"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickProviders}
                    className="action_btn_responsive"
                  >
                    Freight Payment
                  </button>
                </li>
                <li>
                  <button onClick={onClickHome} className="home_btn_responsive">
                    Home
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Box>

        <Box backgroundColor="white" className="max-heigth">
          <About />
        </Box>
      </Box>
    );
  } else if (pages === "Services") {
    return (
      <Box backgroundColor="white">
        <Box backgroundColor="#0B0125" height="130px">
          <br></br>

          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" onClick={onClickHome} />
            </div>

            <ul className="links">
              <li>
                <button onClick={onClickAbout}>About</button>
              </li>
              <li>
                <button onClick={onClickServices}>Services</button>
              </li>
              <li>
                <button onClick={onClickContact}>Contact</button>
              </li>
              <li>
                <button onClick={onClickProviders}>
                  Freight Payment Providers
                </button>
              </li>
            </ul>

            <button onClick={onClickHome} className="action_btn">
              Home
            </button>

            <button className="toggle_btn" onClick={onClick}>
              {icon === "lineas" ? (
                <ion-icon name="reorder-four-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="close-outline" size="large"></ion-icon>
              )}
            </button>

            <div className="dropdown_menu">
              <div>
                <li>
                  <button
                    onClick={onClickAbout}
                    className="action_btn_responsive"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickServices}
                    className="action_btn_responsive"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickContact}
                    className="action_btn_responsive"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickProviders}
                    className="action_btn_responsive"
                  >
                    Freight Payment
                  </button>
                </li>
                <li>
                  <button onClick={onClickHome} className="home_btn_responsive">
                    Home
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Box>

        <Box backgroundColor="white">
          <Services />
        </Box>
      </Box>
    );
  } else if (pages === "Contact") {
    return (
      <Box backgroundColor="white">
        <Box backgroundColor="#0B0125" height="130px">
          <br></br>

          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" onClick={onClickHome} />
            </div>

            <ul className="links">
              <li>
                <button onClick={onClickAbout}>About</button>
              </li>
              <li>
                <button onClick={onClickServices}>Services</button>
              </li>
              <li>
                <button onClick={onClickContact}>Contact</button>
              </li>
              <li>
                <button onClick={onClickProviders}>
                  Freight Payment Providers
                </button>
              </li>
            </ul>

            <button onClick={onClickHome} className="action_btn">
              Home
            </button>

            <button className="toggle_btn" onClick={onClick}>
              {icon === "lineas" ? (
                <ion-icon name="reorder-four-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="close-outline" size="large"></ion-icon>
              )}
            </button>

            <div className="dropdown_menu">
              <div>
                <li>
                  <button
                    onClick={onClickAbout}
                    className="action_btn_responsive"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickServices}
                    className="action_btn_responsive"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickContact}
                    className="action_btn_responsive"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickProviders}
                    className="action_btn_responsive"
                  >
                    Freight Payment
                  </button>
                </li>
                <li>
                  <button onClick={onClickHome} className="home_btn_responsive">
                    Home
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Box>

        <Box backgroundColor="white" className="max-heigth">
          <Contact />
        </Box>
      </Box>
    );
  } else if (pages === "Providers") {
    return (
      <Box backgroundColor="white">
        <Box backgroundColor="#0B0125" height="130px">
          <br></br>

          <div className="navbar">
            <div className="logo">
              <img src={Logo} alt="Logo" onClick={onClickHome} />
            </div>

            <ul className="links">
              <li>
                <button onClick={onClickAbout}>About</button>
              </li>
              <li>
                <button onClick={onClickServices}>Services</button>
              </li>
              <li>
                <button onClick={onClickContact}>Contact</button>
              </li>
              <li>
                <button onClick={onClickProviders}>
                  Freight Payment Providers
                </button>
              </li>
            </ul>

            <button onClick={onClickHome} className="action_btn">
              Home
            </button>

            <button className="toggle_btn" onClick={onClick}>
              {icon === "lineas" ? (
                <ion-icon name="reorder-four-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="close-outline" size="large"></ion-icon>
              )}
            </button>

            <div className="dropdown_menu">
              <div>
                <li>
                  <button
                    onClick={onClickAbout}
                    className="action_btn_responsive"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickServices}
                    className="action_btn_responsive"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickContact}
                    className="action_btn_responsive"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={onClickProviders}
                    className="action_btn_responsive"
                  >
                    Freight Payment
                  </button>
                </li>
                <li>
                  <button onClick={onClickHome} className="home_btn_responsive">
                    Home
                  </button>
                </li>
              </div>
            </div>
          </div>
        </Box>

        <Box backgroundColor="white">
          <Providers />
        </Box>
      </Box>
    );
  }
}

export default Header;
