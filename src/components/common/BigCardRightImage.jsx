import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";

export const BigCardRightImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <Container fluid className="p-0 bigCardMainContainer">
      <Row>
        <Col sm={12} md={6} className="order-2 order-md-1 d-flex align-items-center ">
          <div className="card-body p-5">
            <h2 className="card-title mb-3">Quale sarà la tua tappa successiva?</h2>
            <h5 className="card-text mb-3">Benvenuto, preparati a scegliere il tuo prossimo rifugio...</h5>
            <h6>
              Scegli tra le nostre strutture ricettive, quella che più rispecchia la tua personalità ed il tuo gusto
            </h6>
            <Button variant="outlined" className="mt-2 allButtons" onClick={() => (window.location.href = "/all/")}>
              Tutte le strutture
            </Button>
          </div>
        </Col>
        <Col sm={12} md={6} className="order-1 order-md-2 ">
          <div className="bigCardImageContainer">
            <img
              className={`bigCardImage ${imageLoaded ? "loaded" : ""}`}
              src="https://www.kayak.it/rimg/himg/1a/71/fb/ostrovok-7808373-2bfdc0be74fcdec92071f309939dd2568131862b-184191.jpg?width=2160&height=1215&crop=true&outputtype=webp"
              alt="Immagine casuale"
              onLoad={handleImageLoaded}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
