import React from "react";
import { Link } from "react-router-dom";

//from react-boostrap
import { Container, Row, Col } from "react-bootstrap";

///from mui material
import { LinkedIn, Facebook, GitHub, Instagram, Pinterest } from "@mui/icons-material";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer>
        <Container className="footer">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={6} className="mt-3">
              <h2>easyBook</h2>
              <h5>Trova il tuo alloggio ideale, per una vacanza perfetta.</h5>
            </Col>
            <Col md={6} className="mt-3">
              <Row>
                <Col xs={6} sm={4}>
                  <ul className="list-unstyled">
                    <h4 className="text-uppercase">menu rapido</h4>
                    <li>
                      <Link to="/" onClick={scrollToTop}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/beb/" onClick={scrollToTop}>
                        B&B
                      </Link>
                    </li>
                    <li>
                      <Link to="/hotel/" onClick={scrollToTop}>
                        Hotel
                      </Link>
                    </li>
                    <li>
                      <Link to="/apartment/" onClick={scrollToTop}>
                        Appartamenti
                      </Link>
                    </li>
                    <li>
                      <Link to="/residence/" onClick={scrollToTop}>
                        Residence
                      </Link>
                    </li>

                    <li>
                      <Link to="/all/" onClick={scrollToTop}>
                        Tutto
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} sm={4}>
                  <ul className="list-unstyled">
                    <h4 className="text-uppercase">Chi siamo</h4>
                    <li>
                      <Link to="/aboutpage/" onClick={scrollToTop}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactspage/" onClick={scrollToTop}>
                        Contatti
                      </Link>
                    </li>
                    <li>
                      <Link to="https://epicode.com/">Epicode</Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={6} sm={4}>
                  <ul className="list-unstyled">
                    <h4 className="text-uppercase">social</h4>
                    <li>
                      <LinkedIn className="footer-icons" />
                      <Link to="https://www.linkedin.com/in/claudio-pinna-277093253/">LinkedIn</Link>
                    </li>
                    <li>
                      <Facebook className="footer-icons" />
                      <Link to="https://www.facebook.com/claudio.pinna01">Facebook</Link>
                    </li>
                    <li>
                      <Instagram className="footer-icons" />
                      <Link to="https://www.instagram.com/claudio_pinna_/">Instagram</Link>
                    </li>
                    <li>
                      <GitHub className="footer-icons" />
                      <Link to="https://github.com/kla6630">GitHub</Link>
                    </li>
                    <li>
                      <Pinterest className="footer-icons" />
                      <Link to="#">Pinterest</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <p>&copy; 2023 easyBook - Claudio Pinna - Tutti i diritti riservati.</p>
              <p>Capstone Project</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
