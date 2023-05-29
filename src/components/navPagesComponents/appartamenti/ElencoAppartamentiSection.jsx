import { Container, Row, Col } from "react-bootstrap";
import { ElencoAppartamentiCardFetch } from "./ElencoAppartamentiCardFetch";

export const ElencoAppartamentiSection = () => {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutti gli Appartamenti</h5>
      </div>
      <Row className="mt-2">
        <Col>
          <ElencoAppartamentiCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
