import { Container, Row, Col } from "react-bootstrap";
import { ElencoBebCardFetch } from "./ElencoBebCardFetch";

export const ElencoBebSection = () => {
  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutti i B&B</h5>
      </div>
      <Row className="mt-2">
        <Col>
          <ElencoBebCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
