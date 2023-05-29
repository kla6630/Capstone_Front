import Navbar from "react-bootstrap/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import easyBookLogo from "../../assets/pictures/logo/easyBookLogo.png";
import AuthContext from "../Auth/AuthContext";

export const MyNavbarBigScreens = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`myNavbarBigScreens myNavbar ${
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
      <Container>
        <Col xs={2} className="d-flex justify-content-start text-uppercase ">
          <Link to="/aboutpage/" className="myNavbarText">
            About us
          </Link>
        </Col>
        <Col xs={8} className="colonnaCentrale">
          <Row>
            <Link to="/">
              <img id="logoImg" src={easyBookLogo} alt="Easy Book Logo" />
            </Link>
          </Row>
          <Row className="linkColonnaCentrale">
            <Col>
              <Link to="/beb/" className="myNavbarText">
                B&B
              </Link>
            </Col>
            <Col>
              <Link to="/hotel/" className="myNavbarText">
                Hotel
              </Link>
            </Col>
            <Col>
              <Link to="/apartment/" className="myNavbarText">
                Appartamenti
              </Link>
            </Col>
            <Col>
              <Link to="/residence/" className="myNavbarText">
                Residence
              </Link>
            </Col>
            <Col>
              <Link to="/all/" className="myNavbarText">
                Tutto
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="d-flex flex-column text-uppercase align-items-end">
          <Row xs={12}>
            {!user && (
              <Link to="/login" className="myNavbarText">
                Login
              </Link>
            )}
          </Row>
          <Row xs={12}>
            {!user && (
              <Link to="/registration" className="myNavbarText">
                Registrazione
              </Link>
            )}
          </Row>

          {user && (
            <Link to="/" className="myNavbarText" onClick={logout}>
              Logout
            </Link>
          )}
        </Col>
      </Container>
    </Navbar>
  );
};
