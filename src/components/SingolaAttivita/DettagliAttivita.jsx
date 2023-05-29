import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CancellaAttivita } from "../common/Fetches/CancellaAttivita";
import { ModificaAttivita } from "../SingolaAttivita/nuovaAttivita/ModificaAttivita";
import { Button } from "@mui/material";
import { Delete, ExpandLessSharp, ExpandMoreSharp } from "@mui/icons-material";

export const DettagliAttivita = ({ deleteCallBack }) => {
  const params = useParams();
  const [attivita, setAttivita] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [showRow, setShowRow] = useState(false);

  const imageUrl =
    "https://www.thespruce.com/thmb/NSCstDYshpokOKwOpQAY-lXozMU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tips-for-decorating-a-beautiful-bedroom-1976169-hero-e960fbb8311c4b9b875a1813962d34eb.jpg";

  const handleDelete = async () => {
    await CancellaAttivita(attivita.id, deleteCallBack);
    window.location.reload();
  };

  const handleToggleRow = () => {
    setShowRow(!showRow);
  };

  useEffect(() => {
    const fetchAttivita = async () => {
      try {
        const response = await fetch(`http://localhost:8080/attivitaricettive/id/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setAttivita(data);
          setSelectedThumbnail(data.immagine || imageUrl); // Set the default image as selected
        } else {
          console.log("Response is not OK", response.status);
        }
      } catch (error) {
        console.error("Error fetching activity details:", error);
      }
    };

    fetchAttivita();
  }, [params.id]);

  const handleThumbnailClick = (imageUrl) => {
    setSelectedThumbnail(imageUrl);
  };

  if (!attivita) {
    return (
      <div>
        <h2>Attività Eliminata!</h2>
        <h4>
          premere <a href="/">qui</a> per tornare in home
        </h4>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Container>
            <Row>
              <Col md={12}>
                <Carousel>
                  {attivita.immagine && (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={selectedThumbnail}
                        alt="Immagine"
                        style={{ width: "100%", height: "15rem" }}
                      />
                    </Carousel.Item>
                  )}
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageUrl}
                      alt="Immagine"
                      style={{ width: "100%", height: "15rem" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="d-flex justify-content-center mt-3">
                  {attivita.immagine && (
                    <img
                      src={attivita.immagine}
                      alt="Anteprima 1"
                      className={`img-thumbnail m-1 ${selectedThumbnail === attivita.immagine ? "active" : ""}`}
                      style={{ width: "80px", height: "80px", cursor: "pointer" }}
                      onClick={() => handleThumbnailClick(attivita.immagine)}
                    />
                  )}
                  <img
                    src={imageUrl}
                    alt="Anteprima 2"
                    className={`img-thumbnail m-1 ${selectedThumbnail === imageUrl ? "active" : ""}`}
                    style={{ width: "80px", height: "80px", cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(imageUrl)}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={8}>
          <div>
            <h2>{attivita.nome}</h2>
            <p>Città: {attivita.citta}</p>
            <p>Indirizzo: {attivita.indirizzo}</p>
            <p>Descrizione: {attivita.descrizione}</p>
            <p>Prezzo Minimo: {attivita.prezzoMinimo} €</p>
            <p>
              Tipologia Attività: {attivita.tipologiaAttivita === "BEB" && "Bed and Breakfast"}
              {attivita.tipologiaAttivita === "HOTEL" && "Hotel"}
              {attivita.tipologiaAttivita === "APPARTAMENTO" && "Appartamento"}
              {attivita.tipologiaAttivita === "RESIDENCE" && "Residence"}
              {attivita.tipologiaAttivita === "ALTRO" && "Altro"}
            </p>
            <p>Email: {attivita.email}</p>
            <p>Telefono: {attivita.telefono}</p>
          </div>
        </Col>

        <Col xs={12} className=" d-flex justify-content-center" onClick={handleToggleRow}>
          {showRow ? <ExpandLessSharp /> : <ExpandMoreSharp />}
        </Col>
        {showRow && (
          <Col xs={12} className=" d-flex justify-content-center editSection">
            <Button variant="danger" className="allButtons mx-2" onClick={handleDelete}>
              Cancella Attività
              <Delete />
            </Button>
            <ModificaAttivita className="allButtons mx-2" />
          </Col>
        )}
      </Row>
    </Container>
  );
};
