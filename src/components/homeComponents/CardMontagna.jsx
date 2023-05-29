import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";

export const CardMontagna = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Container fluid className="p-0 bigCardMainContainerMontagna">
      <Row>
        <Col sm={12} md={6} className="order-2 order-md-1 ">
          <div className="bigCardImageContainer">
            <img
              className={`bigCardImage ${imageLoaded ? "loaded" : ""}`}
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Punta_Sebera.JPG"
              alt="Immagine casuale"
              onLoad={handleImageLoaded}
            />
          </div>
        </Col>
        <Col sm={12} md={6} className="order-2 order-md-1 d-flex align-items-center ">
          <div className="card-body p-5">
            <h2 className="card-title mb-3">Una bella gita in montagna?</h2>
            <h5 className="card-text mb-3">
              Sfida te stesso e conquista le vette del Sud Sardegna, dove l'aria fresca e i panorami mozzafiato ti
              accompagneranno in un'avventura indimenticabile tra le maestose montagne.
            </h5>
            <Button variant="outlined" endIcon={""} className="mt-2 allButtons">
              Scopri
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
