import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";

export const CardMare = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Container fluid className="p-0 bigCardMainContainerMare">
      <Row>
        <Col sm={12} md={6} className="order-1 order-md-2 ">
          <div className="bigCardImageContainer">
            <img
              className={`bigCardImage ${imageLoaded ? "loaded" : ""}`}
              src="https://www.sardiniaturismo.eu/wp-content/uploads/2020/05/tuerredda.jpg"
              alt="Immagine casuale"
              onLoad={handleImageLoaded}
            />
          </div>
        </Col>
        <Col sm={12} md={6} className="order-2 order-md-1 d-flex align-items-center ">
          <div className="card-body p-5">
            <h2 className="card-title mb-3">Vivi il mare</h2>
            <h5 className="card-text mb-3">
              Vivi l'esperienza del mare come mai prima d'ora, immergendoti nelle acque cristalline del Sud Sardegna e
              scoprendo le meraviglie che si celano sotto la superficie.
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
