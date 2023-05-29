import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CaroselloAppartamentiFetch } from "./CaroselloAppartamentiFetch";

export const CaroselloAppartamentiSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <Link to="/apartment/" className="link-reset " onClick={scrollToTop}>
          <h5 className="sectionTitleLink">I migliori Appartamenti</h5>
        </Link>
      </div>
      <Row className="my-4">
        <Col>
          <CaroselloAppartamentiFetch />
        </Col>
      </Row>
    </Container>
  );
};
