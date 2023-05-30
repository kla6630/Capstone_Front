import React, { useEffect, useState, useContext } from "react";
import { Col, Row, Carousel, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { CancellaAttivita } from "../common/Fetches/CancellaAttivita";
import { ModificaAttivita } from "../SingolaAttivita/nuovaAttivita/ModificaAttivita";
import { Alert, Button, TextField } from "@mui/material";
import { ContactMail, Delete, Euro, ExpandLessSharp, ExpandMoreSharp, LocationOn, Phone } from "@mui/icons-material";
import AuthContext from "../Auth/AuthContext";
import { TranslateTipologiaAttivita } from "../common/Translate/TranslateTipologiaAttivita";

export const DettagliAttivita = ({ deleteCallBack }) => {
  const { user } = useContext(AuthContext);

  const params = useParams();
  const [attivita, setAttivita] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [showRow, setShowRow] = useState(false);

  // LOGICA PER IL CALENDARIO E IL BOTTONE DI INVIO DEL FORM
  const [selectedArrivalDate, setSelectedArrivalDate] = useState("");
  const [selectedDepartureDate, setSelectedDepartureDate] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

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

  // LOGICA PER IL CALENDARIO E IL BOTTONE DI INVIO DEL FORM
  const handleArrivalDateChange = (event) => {
    const arrivalDate = event.target.value;
    const isValidDateRange = validateDateRange(arrivalDate, selectedDepartureDate);
    setSelectedArrivalDate(arrivalDate);
    setIsButtonDisabled(!isValidDateRange);
  };

  const handleDepartureDateChange = (event) => {
    const departureDate = event.target.value;
    const isValidDateRange = validateDateRange(selectedArrivalDate, departureDate);
    setSelectedDepartureDate(departureDate);
    setIsButtonDisabled(!isValidDateRange);
  };

  const validateDateRange = (arrivalDate, departureDate) => {
    // Check if both dates are selected
    if (!arrivalDate || !departureDate) {
      return false;
    }

    const currentDate = new Date();
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);

    // Compare the dates
    if (arrival >= departure) {
      setShowAlert(true);
      return false;
    }

    if (arrival < currentDate) {
      setShowAlert(true);
      return false;
    }

    setShowAlert(false);
    return true;
  };

  if (!attivita) {
    return (
      <div>
        <h2>Attività Eliminata!</h2>
        <h4>
          Premi <Link to="/">qui</Link> per tornare alla home
        </h4>
      </div>
    );
  }

  return (
    <Card className={` colore ${attivita.tipologiaAttivita}`}>
      <Row className="mx-4 my-4 px-2 py-3 innerContainerDa">
        <Col md={5}>
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
        </Col>

        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title className="py-3">
                {TranslateTipologiaAttivita(attivita.tipologiaAttivita)} - <i>"{attivita.nome}"</i>
              </Card.Title>

              <h5 c>{attivita.descrizione}</h5>

              <Card.Text className="py-2">
                <LocationOn className="footer-icons" /> {attivita.citta} - {attivita.indirizzo}
              </Card.Text>

              <Card.Text className="py-2">
                <Euro className="footer-icons" /> {attivita.prezzoMinimo} €
              </Card.Text>

              <Card.Text className="py-2">
                <ContactMail className="footer-icons" /> {attivita.email}
              </Card.Text>

              <Card.Text className="py-2">
                <Phone className="footer-icons" /> {attivita.telefono}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5 mx-5 bookingSection">
        <Col>
          <Row>
            <h4>Vuoi prenotare?</h4>
            <h5>Seleziona le date di arrivo e di partenza previste per poter procedere alla fase successiva.</h5>
          </Row>
          <Row className="mx-2 my-4">
            Check-in
            <TextField
              className=""
              id="arrival-date"
              type="date"
              value={selectedArrivalDate}
              onChange={handleArrivalDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Row>
          <Row className="mx-2 my-4">
            Check-out
            <TextField
              className=""
              id="departure-date"
              type="date"
              value={selectedDepartureDate}
              onChange={handleDepartureDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {showAlert && (
              <Alert severity="error">
                La data di arrivo deve essere precedente alla data di partenza e non può essere nel passato.
              </Alert>
            )}
            {user && (
              <Button
                variant="contained"
                component={Link}
                to={`/riepilogo-prenotazione?id=${attivita.id}&nome=${attivita.nome}&citta=${attivita.citta}&email=${
                  attivita.email
                }&indirizzo=${attivita.indirizzo}&descrizione=${attivita.descrizione}&prezzo=${
                  attivita.prezzoMinimo
                }&tipologiaAttivita=${TranslateTipologiaAttivita(attivita.tipologiaAttivita)}&telefono=${
                  attivita.telefono
                }&immagine=${
                  attivita.immagine
                }&arrivalDate=${selectedArrivalDate}&departureDate=${selectedDepartureDate}`}
                className={`allButtons ${isButtonDisabled ? "hiddenButton" : ""}`}
                disabled={isButtonDisabled}
              >
                AVANTI
              </Button>
            )}
            {!user && (
              <Button className="allButtons" component={Link} to="/login">
                Effettua il Login per prenotare
              </Button>
            )}
          </Row>
        </Col>
      </Row>

      <Row>
        {user && (
          <Col xs={12}>
            <Row>
              <Col xs={12} className="d-flex justify-content-center" onClick={handleToggleRow}>
                {showRow ? <ExpandLessSharp /> : <ExpandMoreSharp />}
              </Col>
              {showRow && (
                <Col xs={12} className="d-flex justify-content-center editSection">
                  <Button variant="danger" className="allButtons mx-2" onClick={handleDelete}>
                    Cancella Attività <Delete />
                  </Button>
                  <ModificaAttivita className="allButtons mx-2" />
                </Col>
              )}
            </Row>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default DettagliAttivita;
