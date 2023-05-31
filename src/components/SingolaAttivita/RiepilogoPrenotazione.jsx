import { Button } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";

import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const RiepilogoPrenotazione = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentDate = moment().format("DD-MM-YYYY");
  const currentTime = moment().format("HH:mm:ss");

  // FORM //
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

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
    immagine: queryParams.get("immagine"),
  };

  return (
    <Container>
      <Row>
        <h2>Checkout</h2>
      </Row>
      <Row>
        <Col xs={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Body>
              <Card.Title>Attività:</Card.Title>
              <Card.Img src={prenotazione.immagine} alt="Immagine prenotazione" />
              <Card.Text>Nome: {prenotazione.nome}</Card.Text>
              <Card.Text>Città: {prenotazione.citta}</Card.Text>
              <Card.Text>Prezzo: {prenotazione.prezzo} €</Card.Text>
              <Card.Text>Tipologia Attività: {prenotazione.tipologiaAttivita}</Card.Text>
              <Card.Text>Email: {prenotazione.email}</Card.Text>
              <Card.Text>Telefono: {prenotazione.telefono}</Card.Text>
              <Card.Text>Data attuale: {currentDate}</Card.Text>
              <Card.Text>Ora attuale: {currentTime}</Card.Text>
              <Card.Text>Data di arrivo: {prenotazione.arrivalDate.split("-").reverse().join("-")}</Card.Text>
              <Card.Text>Data di partenza: {prenotazione.departureDate.split("-").reverse().join("-")}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

/* <Container>
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
    </Container> */
