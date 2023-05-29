import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

export const BigCardAttivita = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Container className="bigCardAttivitaContainer">
      <Row className="bigCardAttivitaContainerInterno">
        <Col className="bigCardAttivitaImage col-sm-12 col-md-6">
          <img src="https://picsum.photos/1920/1080" className="img-fluid" onLoad={handleImageLoaded} />
        </Col>
        <Col className="col-sm-12 col-md-6">
          <h2 className="card-title mb-3">Scopri la tua prossima meta da sogno</h2>
          <h5 className="card-text mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum, necessitatibus
          </h5>
          <h5 className="card-text mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum, necessitatibus
          </h5>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Button variant="outlined" className="mt-2 allButtons">
          Visualizza dettagli
        </Button>
      </Row>
    </Container>
  );
};
