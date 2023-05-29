import { Container, Row, Col } from "react-bootstrap";
import { ElencoTutteLeAttivitaCardFetch } from "./ElencoTutteLeAttivitaCardFetch";
import { CreaNuovaAttivita } from "../../SingolaAttivita/nuovaAttivita/CreaNuovaAttivita";

export const ElencoTutteLeAttivitaSection = () => {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutte le Attivita</h5>
      </div>
      <CreaNuovaAttivita />
      <Row className="mt-2">
        <Col>
          <ElencoTutteLeAttivitaCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
