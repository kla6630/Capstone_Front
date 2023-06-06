import { Container, Row, Col } from "react-bootstrap";
import { ElencoTutteLeAttivitaCardFetch } from "./ElencoTutteLeAttivitaCardFetch";
import { CreaNuovaAttivita } from "../../SingolaAttivita/nuovaAttivita/CreaNuovaAttivita";

import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";

export const ElencoTutteLeAttivitaSection = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container className="py-5">
      <div className="d-flex">
        <h5>Tutte le Attivita</h5>
      </div>
      {user && <CreaNuovaAttivita />}
      <Row className="mt-2">
        <Col>
          <ElencoTutteLeAttivitaCardFetch />
        </Col>
      </Row>
    </Container>
  );
};
