import moment from "moment/moment";
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const RiepilogoPrenotazione = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentDate = moment().format("DD-MM-YYYY");
  const currentTime = moment().format("HH:mm:ss");

  const prenotazione = {
    nome: queryParams.get("nome"),
    citta: queryParams.get("citta"),
    indirizzo: queryParams.get("indirizzo"),
    descrizione: queryParams.get("descrizione"),
    prezzo: queryParams.get("prezzo"),
    tipologiaAttivita: queryParams.get("tipologiaAttivita"),
    email: queryParams.get("email"),
    telefono: queryParams.get("telefono"),
    arrivalDate: queryParams.get("arrivalDate"),
    departureDate: queryParams.get("departureDate"),
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Checkout</h2>
        </Col>
        <Col xs={12}>
          <div>
            <h4>Attività:</h4>
            <p>Nome: {prenotazione.nome}</p>
            <p>Città: {prenotazione.citta}</p>
            <p>Prezzo: {prenotazione.prezzo} €</p>
            <p>Tipologia Attività: {prenotazione.tipologiaAttivita}</p>
            <p>Email: {prenotazione.email}</p>
            <p>Telefono: {prenotazione.telefono}</p>
            <p>Data attuale: {currentDate}</p>
            <p>Ora attuale: {currentTime}</p>
            <p>Data di arrivo: {prenotazione.arrivalDate.split("-").reverse().join("-")}</p>
            <p>Data di partenza: {prenotazione.departureDate.split("-").reverse().join("-")}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
