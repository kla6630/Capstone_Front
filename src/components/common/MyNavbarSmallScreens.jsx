import { useContext, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import easyBookLogo from "../../assets/pictures/logo/easyBookLogo.png";
import { Menu } from "@mui/icons-material";
import AuthContext from "../Auth/AuthContext";

export const MyNavbarSmallScreens = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`myNavbarSmallScreens myNavbar ${
        location.pathname === "/"
          ? "nav-home"
          : location.pathname === "/beb/"
          ? "nav-beb"
          : location.pathname === "/hotel/"
          ? "nav-hotel"
          : location.pathname === "/apartment/"
          ? "nav-apartment"
          : location.pathname === "/residence/"
          ? "nav-residence"
          : location.pathname === "/all/"
          ? "nav-other"
          : "nav-home"
      }`}
    >
      <Container className="noPrint">
        <Navbar.Brand href="/">
          <img
            src={easyBookLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            id="logoImg"
            alt="Easy Book Logo"
          />
        </Navbar.Brand>
        <Button variant="outline-primary" className="menuButton" aria-controls="navbar-nav" onClick={handleToggle}>
          <Menu />
        </Button>

        <Navbar.Collapse id="navbar-nav" className={showLinks ? "show" : ""}>
          <Nav>
            <Nav.Link className="myNavbarText" href="/beb/">
              B&B
            </Nav.Link>
            <Nav.Link href="/hotel/" className="myNavbarText">
              Hotel
            </Nav.Link>
            <Nav.Link href="/apartment/" className="myNavbarText">
              Residence
            </Nav.Link>
            <Nav.Link href="/residence/" className="myNavbarText">
              Appartamenti
            </Nav.Link>
            <Nav.Link href="/all/" className="myNavbarText">
              Tutto
            </Nav.Link>
          </Nav>
          <Nav className="lastRows">
            <Nav.Link className="myNavbarText textUppercase" href="/aboutpage/" onClick={scrollToTop}>
              About Us
            </Nav.Link>

            {!user && (
              <Nav.Link href="/login" className="myNavbarText">
                Login
              </Nav.Link>
            )}

            {!user && (
              <Nav.Link href="/registration" className="myNavbarText">
                Registrazione
              </Nav.Link>
            )}

            {user && (
              <Nav.Link href="/" className="myNavbarText" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
