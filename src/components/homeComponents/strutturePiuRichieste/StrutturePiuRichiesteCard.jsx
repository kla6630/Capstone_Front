import React, { useState } from "react";
import classNames from "classnames";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TranslateTipologiaAttivita } from "../../common/Translate/TranslateTipologiaAttivita";

export const StrutturePiuRichiesteCard = ({ attivita }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Card className={classNames("d-flex", "colore", attivita.tipologiaAttivita)}>
      <Card.Img
        variant="top"
        src={attivita.immagine}
        onLoad={handleImageLoaded}
        className="strutturePiurichiesteCardimg"
      />
      <Card.Body>
        <Card.Title className="cardTitle">{attivita.nome}</Card.Title>
        <Card.Subtitle>{TranslateTipologiaAttivita(attivita.tipologiaAttivita)}</Card.Subtitle>
        <Card.Text className="cardText">{attivita.descrizione}...</Card.Text>
        <Card.Text>
          <strong>a partire da € {attivita.prezzoMinimo}</strong>
        </Card.Text>
        <Link to={`/activities/${attivita.id}`} onClick={scrollToTop}>
          <Button variant="outlined" className="allButtons">
            Prenota Subito
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
