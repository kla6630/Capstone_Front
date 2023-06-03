import React, { useEffect, useState, useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { CancellaAttivita } from "../common/Fetches/CancellaAttivita";
import { ModificaAttivita } from "../SingolaAttivita/nuovaAttivita/ModificaAttivita";
import { Alert, Button, TextField } from "@mui/material";
import { ContactMail, Delete, Euro, ExpandLessSharp, ExpandMoreSharp, LocationOn, Phone } from "@mui/icons-material";
import AuthContext from "../Auth/AuthContext";
import { TranslateTipologiaAttivita } from "../common/Translate/TranslateTipologiaAttivita";
import { DettagliAttivitaCarouselComponent } from "./DettagliAttivitaCarouselComponent";

export const DettagliAttivita = ({ deleteCallBack }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { user } = useContext(AuthContext);

  const params = useParams();
  const [attivita, setAttivita] = useState(null);

  const [showRow, setShowRow] = useState(false);

  // LOGICA PER IL CALENDARIO E IL BOTTONE DI INVIO DEL FORM
  const [selectedArrivalDate, setSelectedArrivalDate] = useState("");
  const [selectedDepartureDate, setSelectedDepartureDate] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

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
        } else {
          console.log("Response is not OK", response.status);
        }
      } catch (error) {
        console.error("Error fetching activity details:", error);
      }
    };

    fetchAttivita();
  }, [params.id]);

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
    if (!arrivalDate || !departureDate) {
      return false;
    }

    const currentDate = new Date();
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);

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
            <DettagliAttivitaCarouselComponent attivita={attivita} />
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
                <Euro className="footer-icons" /> {attivita.prezzoMinimo} € a notte / persona
              </Card.Text>

              <Card.Text className="py-2">
                <ContactMail className="footer-icons" />
                <Link to={`mailto:${attivita.email}`}>{attivita.email}</Link>
              </Card.Text>

              <Card.Text className="py-2">
                <Phone className="footer-icons" /> <a href={`tel:${attivita.telefono}`}>{attivita.telefono}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mx-4 my-4 px-2 py-3 innerContainerDa">
        <Col>
          <Row>
            <h4>Vuoi prenotare?</h4>
            <h5>Seleziona le date di arrivo e di partenza previste per poter procedere alla fase successiva.</h5>
          </Row>
          <Row className="mx-2 my-4">
            <div className="my-1">
              <b>Check-in</b>
            </div>
            <TextField
              className="detTextField"
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
            <div className="my-1">
              <b>Check-out</b>
            </div>
            <TextField
              className="detTextField"
              id="departure-date"
              type="date"
              value={selectedDepartureDate}
              onChange={handleDepartureDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {showAlert && (
              <Alert className="mt-2 p-2" severity="error">
                La data di arrivo deve essere precedente alla data di partenza e non può essere nel passato.
              </Alert>
            )}
            {user && (
              <Button
                onClick={scrollToTop}
                variant="outlined"
                component={Link}
                to={`/riepilogo-prenotazione?id=${attivita.id}
                &nome=${attivita.nome}
                &citta=${attivita.citta}
                &email=${attivita.email}&indirizzo=${attivita.indirizzo}
                &descrizione=${attivita.descrizione}
                &prezzo=${attivita.prezzoMinimo}&tipologiaAttivita=${TranslateTipologiaAttivita(
                  attivita.tipologiaAttivita
                )}&telefono=${attivita.telefono}&immagine=${
                  attivita.immagine
                }&arrivalDate=${selectedArrivalDate}&departureDate=${selectedDepartureDate}`}
                className={`allButtons ${isButtonDisabled ? "hiddenButton" : ""}`}
                disabled={isButtonDisabled}
              >
                AVANTI
              </Button>
            )}
            {!user && (
              <Button variant="outlined" className="allButtons" component={Link} to="/login">
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
