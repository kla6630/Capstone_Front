import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StrutturePiuRichiesteCardFetch } from "./StrutturePiuRichiesteCardFetch";

export const StrutturePiuRichiesteSection = () => {
  return (
    <Container className="mt-5 mb-5">
      <div className="justify-content-between">
        <h5>Strutture piu Richieste</h5>
        <Link to="#">
          <h6>Tutte le strutture</h6>
        </Link>
      </div>
      <Row className="mt-2">
        <Col>
          <StrutturePiuRichiesteCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
