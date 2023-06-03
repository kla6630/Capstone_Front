import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { Alert, AlertTitle, Button } from "@mui/material";
import moment from "moment";

import checkoutMoney from "../../assets/pictures/checkoutMoney/checkoutMoney.png";

export const RiepilogoPrenotazioneP2 = () => {
  const location = useLocation();
  const formCliente = location.state;
  const currentDate = moment().format("DD-MM-YYYY");
  const currentTime = moment().format("HH:mm:ss");

  const prenotazione = {
    nome: formCliente.nome,
    citta: formCliente.citta,
    indirizzo: formCliente.indirizzo,
    descrizione: formCliente.descrizione,
    prezzo: formCliente.prezzo,
    tipologiaAttivita: formCliente.tipologiaAttivita,
    email: formCliente.email,
    telefono: formCliente.telefono,
    arrivalDate: formCliente.arrivalDate,
    departureDate: formCliente.departureDate,
    immagine: formCliente.immagine,
    nazione: formCliente.nazione,
  };

  const checkInDate = moment(formCliente.arrivalDate);
  const checkOutDate = moment(formCliente.departureDate);
  const duration = checkOutDate.diff(checkInDate, "days");

  const prezzoTotaleApersona = prenotazione.prezzo * duration;
  const percentualeSconto = 20;

  const prezzoTotale = (prezzoTotaleApersona * formCliente.numeroPersone).toFixed(2);
  const scontoPrezzo = ((prezzoTotale * percentualeSconto) / 100).toFixed(2);
  const prezzoScontato = (prezzoTotale - scontoPrezzo).toFixed(2);

  const [showAlert, setShowAlert] = useState(false);

  const handleBooking = () => {
    setShowAlert(true);
  };

  //STAMPA//
  const handleStampa = () => {
    window.print();
  };

  return (
    <Card bg="primary">
      <Row className="mx-4 my-4 px-1 py-5 innerContainerDa">
        <Row>
          <Col>
            <h4 className="text-wrap">Checkout - Riepilogo Finale</h4>
            <h5 className="text-wrap">
              Rileggi attentamente tutti i dati e premi su "prenota" se vuoi completare la procedura
            </h5>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Card
              className="p-3 m-3"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${prenotazione.immagine})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Row>
                <Col>
                  <h5 className="text-wrap">Dati Prenotazione</h5>
                  <p className="text-wrap">
                    <strong>Struttura: </strong> {prenotazione.tipologiaAttivita} {prenotazione.nome}
                  </p>
                  <p className="text-wrap">
                    <strong>Data e ora di prenotazione:</strong> {currentDate} alle {currentTime}
                  </p>
                  <p className="text-wrap">
                    <strong>Data di arrivo prevista :</strong> {prenotazione.arrivalDate.split("-").reverse().join("-")}
                  </p>
                  <p className="text-wrap">
                    <strong>Data di partenza prevista:</strong>{" "}
                    {prenotazione.departureDate.split("-").reverse().join("-")}
                  </p>
                  <Card.Footer></Card.Footer>
                  <p className="text-wrap">
                    <strong>Indirizzo struttura: </strong>
                    {prenotazione.indirizzo}, {prenotazione.citta}
                  </p>
                  <p className="text-wrap">
                    <strong>Telefono struttura: </strong>
                    {prenotazione.telefono}
                  </p>
                  <p className="text-wrap">
                    <strong>Email struttura: </strong>
                    {prenotazione.email}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Card
              className="p-3 m-3"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${checkoutMoney})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(220, 240, 150, 0.8)",
              }}
            >
              <h5 className="text-wrap">Riepilogo Costi</h5>
              <p className="text-wrap">
                <strong>Prezzo a notte a persona: </strong>
                {prenotazione.prezzo} €
              </p>
              <p className="text-wrap">
                <strong>Durata del soggiorno:</strong> {duration} notti
              </p>
              <p className="text-wrap">
                <strong>Prezzo totale a persona: </strong>
                {prezzoTotaleApersona} €
              </p>
              <p className="text-wrap">
                <strong>Numero di persone: </strong>
                {formCliente.numeroPersone}
              </p>
              <p className="text-wrap">
                <strong>Prezzo totale provvisorio: </strong>
                {prezzoTotale} €
              </p>
              <p className="text-wrap">
                <strong>Sconto promo 20%: </strong>
                {scontoPrezzo} €
              </p>
              <Card.Footer></Card.Footer>
              <p className="text-wrap">
                <strong>TOTALE: {prezzoScontato} €</strong>
              </p>
            </Card>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Card
              className="p-3 m-3"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(220, 112, 0, 0.8)",
              }}
            >
              <h5 className="text-wrap">Dati Cliente</h5>
              <p className="text-wrap">
                <strong>Nome: </strong>
                {formCliente.nomeCliente}
              </p>
              <p className="text-wrap">
                <strong>Cognome: </strong>
                {formCliente.cognomeCliente}
              </p>
              <p className="text-wrap">
                <strong>Data di Nascita: </strong>
                {formCliente.dataDiNascitaCliente.split("-").reverse().join("-")}
              </p>
              <p className="text-wrap">
                <strong>Indirizzo: </strong>
                {formCliente.indirizzoCliente}, {formCliente.nazioneCliente}
              </p>
              <p className="text-wrap">
                <strong>Telefono: </strong>
                {formCliente.telefono}
              </p>
              <p className="text-wrap">
                <strong>Email: </strong>
                {formCliente.emailCliente}
              </p>
              <p className="text-wrap">
                <strong>Documento: </strong>
                {formCliente.tipoDocumentoCliente} N° {formCliente.numeroDocumentoCliente}
              </p>
            </Card>
          </Col>
        </Row>
        {showAlert && (
          <Row>
            <Col>
              <Alert severity="success" className="mt-4">
                <AlertTitle>Prenotazione effettuata!</AlertTitle>
                La tua prenotazione è stata completata con successo. Riceverai a breve una email di conferma.
              </Alert>
            </Col>
          </Row>
        )}
        <Row className="my-4 noPrint">
          <Col>
            <Button variant="outlined" className="mt-2 w-100 allButtons" onClick={handleBooking}>
              Prenota
            </Button>

            <Button variant="outlined" className="mt-2 w-100 d-flex allButtons" onClick={handleStampa}>
              Stampa Riepilogo
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
};
