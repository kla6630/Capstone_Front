import { Container, Row, Col } from "react-bootstrap";
import { ElencoResidenceCardFetch } from "./ElencoResidenceCardFetch";

export const ElencoResidenceSection = () => {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutti i Residence</h5>
      </div>
      <Row className="mt-2">
        <Col>
          <ElencoResidenceCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
