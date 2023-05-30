import React, { useState, useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CancellaAttivita } from "../common/Fetches/CancellaAttivita";
import { Delete, Description, ExpandLessSharp, ExpandMoreSharp, Hotel, LocationOn } from "@mui/icons-material";
import { ModificaAttivita } from "../SingolaAttivita/nuovaAttivita/ModificaAttivita";
import { Button } from "@mui/material";
import AuthContext from "../Auth/AuthContext";
import { TranslateTipologiaAttivita } from "../common/Translate/TranslateTipologiaAttivita";

export const ListaCard = ({ attivita, deleteCallback }) => {
  const { user } = useContext(AuthContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showRow, setShowRow] = useState(false);

  const handleDelete = async () => {
    setImageLoaded(true);
    await CancellaAttivita(attivita.id, deleteCallback);
    window.location.reload();
  };

  const handleToggleRow = () => {
    setShowRow(!showRow);
  };

  return (
    <Card className={`my-3 py-3 colore ${attivita.tipologiaAttivita}`}>
      <Container>
        <Row className="elencoCardContainer">
          <Col xs={3}>
            <Card.Img
              variant="top"
              className="mx-2 elencoCardImg"
              src={attivita.immagine}
              onClick={() => (window.location.href = `/activities/${attivita.id}`)}
            />
          </Col>
          <Col xs={9}>
            <Card.Title
              className="cardTitleListaCard"
              onClick={() => (window.location.href = `/activities/${attivita.id}`)}
            >
              <b>"{attivita.nome}"</b>
            </Card.Title>

            <Card.Subtitle className="my-1">
              <Hotel className="footer-icons" />
              {TranslateTipologiaAttivita(attivita.tipologiaAttivita)}
            </Card.Subtitle>
            <Card.Subtitle className="my-1">
              <LocationOn className="footer-icons" />
              {attivita.citta}
            </Card.Subtitle>

            <Card.Subtitle className="my-1">
              <Description className="footer-icons" />
              {attivita.descrizione.slice(0, 80)}...
            </Card.Subtitle>
          </Col>
          {user && (
            <Col xs={12} className="d-flex justify-content-center" onClick={handleToggleRow}>
              {showRow ? <ExpandLessSharp /> : <ExpandMoreSharp />}
            </Col>
          )}
          {showRow && (
            <Col xs={12} className="d-flex justify-content-center editSection">
              <Button variant="danger" className="allButtons mx-2" onClick={handleDelete}>
                Cancella Attività
                <Delete />
              </Button>
              <ModificaAttivita className="allButtons mx-2" />
            </Col>
          )}
        </Row>
      </Container>
    </Card>
  );
};
