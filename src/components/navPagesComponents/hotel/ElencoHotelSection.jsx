import { Container, Row, Col } from "react-bootstrap";
import { ElencoHotelCardFetch } from "./ElencoHotelCardFetch";

export const ElencoHotelSection = () => {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutti gli Hotel</h5>
      </div>
      <Row className="mt-2">
        <Col>
          <ElencoHotelCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
