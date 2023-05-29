import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CaroselloBbFetch } from "./CaroselloBbFetch";

export const CaroselloBbSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <Link to="/beb/" className="link-reset" onClick={scrollToTop}>
          <h5 className="sectionTitleLink">I migliori B&B</h5>
        </Link>
      </div>
      <Row className="my-4">
        <Col>
          <CaroselloBbFetch />
        </Col>
      </Row>
    </Container>
  );
};
