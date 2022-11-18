import {
  Nav,
  List,
  NavBar,
  MenuButton,
  MobileMenu,
  MobileViewNav,
  CloseButton,
  Title,
} from "./styles";

import { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

class NavMenu extends Component {
  state = { scrollstatus: false, mobileView: false };

  componentDidMount() {
    window.addEventListener("scroll", this.changeBg);
  }

  changeBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 250) {
      this.setState({ scrollstatus: true });
    } else {
      this.setState({ scrollstatus: false });
    }
  };

  changeView = () => {
    this.setState((prevState) => ({ mobileView: !prevState.mobileView }));
  };

  renderDesktopView = () => {
    const { scrollstatus, mobileView } = this.state;
    return (
      <NavBar
        as={motion.header}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {mobileView ? (
          <AnimatePresence>
            <MobileViewNav
              as={motion.nav}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              <CloseButton onClick={this.changeView}>
                <span>
                  <ClearIcon />
                </span>
              </CloseButton>
              <MobileMenu>
                <ul onClick={this.changeView}>
                  <li>
                    <a href="#home">Inicio</a>
                  </li>
                  <li>
                    <a href="#about">Acerca</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#work">Projectos</a>
                  </li>
                  <li>
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
              </MobileMenu>
            </MobileViewNav>
          </AnimatePresence>
        ) : (
          <Nav
            as={motion.nav}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            scrollstatus={scrollstatus}
          >
            <Title scrollstatus={scrollstatus}>Kevin</Title>
            <List scrollstatus={scrollstatus}>
              <li>
                <a scrollstatus={scrollstatus} href="#home">
                  Inicio
                </a>
              </li>
              <li>
                <a scrollstatus={scrollstatus} href="#about">
                  Acerca
                </a>
              </li>
              <li>
                <a scrollstatus={scrollstatus} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a scrollstatus={scrollstatus} href="#work">
                  Projectos
                </a>
              </li>
              <li>
                <a scrollstatus={scrollstatus} href="#contact">
                  Contacto
                </a>
              </li>
            </List>
            {mobileView ? (
              ""
            ) : (
              <MenuButton onClick={this.changeView} scrollstatus={scrollstatus}>
                <span>
                  <MenuIcon />
                </span>
              </MenuButton>
            )}
          </Nav>
        )}
      </NavBar>
    );
  };

  render() {
    return <>{this.renderDesktopView()}</>;
  }
}

export default NavMenu;
