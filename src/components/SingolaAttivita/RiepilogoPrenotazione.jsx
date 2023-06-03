import { Button } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const RiepilogoPrenotazione = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();

  // FORM //
  const [formCliente, setFormCliente] = useState({
    nomeCliente: "",
    cognomeCliente: "",
    dataDiNascitaCliente: "",
    nazioneCliente: "",
    indirizzoCliente: "",
    emailCliente: "",
    numeroDiTelefonoCliente: "",
    tipoDocumentoCliente: "",
    numeroDocumentoCliente: "",
    numeroPersone: "",
  });

  const handleChange = (e) => {
    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormCliente({
      nomeCliente: "",
      cognomeCliente: "",
      dataDiNascitaCliente: "",
      nazioneCliente: "",
      indirizzoCliente: "",
      emailCliente: "",
      numeroDiTelefonoCliente: "",
      tipoDocumentoCliente: "",
      numeroDocumentoCliente: "",
      numeroPersone: "",
    });

    navigate("/riepilogo-prenotazione-p2", { state: { ...formCliente, ...prenotazione } });
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

  const checkInDate = moment(prenotazione.arrivalDate);
  const checkOutDate = moment(prenotazione.departureDate);

  const duration = checkOutDate.diff(checkInDate, "days");

  const prezzoTotaleApersona = prenotazione.prezzo * duration;
  const percentualeSconto = 20;
  const scontoPrezzo = ((prezzoTotaleApersona * percentualeSconto) / 100).toFixed(2);
  const prezzoScontato = (prezzoTotaleApersona - scontoPrezzo).toFixed(2);

  return (
    <Card bg="primary">
      <Row className="mx-4 my-4 px-2 py-3 innerContainerDa">
        <Row>
          <h4>Checkout - Inserimento dati utente</h4>
          <h5>Inserisci i tuoi dati per poter procedere con la prenotazione</h5>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Form className="my-3 mx-5" onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il tuo nome"
                  className="detTextField"
                  type="text"
                  name="nomeCliente"
                  value={formCliente.nomeCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSurname" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Cognome</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il tuo cognome"
                  className="detTextField"
                  type="text"
                  name="cognomeCliente"
                  value={formCliente.cognomeCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBirthDate" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Data di Nascita</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  className="detTextField"
                  type="date"
                  name="dataDiNascitaCliente"
                  value={formCliente.dataDiNascitaCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCountry" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Nazione</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita la tua nazione di residenza"
                  className="detTextField"
                  type="text"
                  name="nazioneCliente"
                  value={formCliente.nazioneCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Indirizzo</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il tuo indirizzo"
                  className="detTextField"
                  type="text"
                  name="indirizzoCliente"
                  value={formCliente.indirizzoCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il tuo indirizzo di posta elettronica"
                  className="detTextField"
                  type="email"
                  name="emailCliente"
                  value={formCliente.emailCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Numero di Telefono</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="inserisci il tuo numero di telefono"
                  className="detTextField"
                  type="tel"
                  name="numeroDiTelefonoCliente"
                  value={formCliente.numeroDiTelefonoCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDocumentType" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Tipo Documento</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  className="detTextField"
                  as="select"
                  name="tipoDocumentoCliente"
                  value={formCliente.tipoDocumentoCliente}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    <span>&#9660;</span> seleziona un documento <span>&#9660;</span>
                  </option>

                  <option value="Carta d'identità">Carta d'Identità</option>
                  <option value="Passaporto">Passaporto</option>
                  <option value="Patente di guida">Patente</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDocumentNumber" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Numero Documento</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il numero del tuo documento"
                  className="detTextField"
                  type="text"
                  name="numeroDocumentoCliente"
                  value={formCliente.numeroDocumentoCliente}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formNumber" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>Numero persone</Form.Label>
                <Form.Control
                  style={{ fontWeight: "500", height: "3em" }}
                  placeholder="digita il numero di persone"
                  className="detTextField"
                  type="number"
                  step="1"
                  name="numeroPersone"
                  value={formCliente.numeroPersone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="outlined" className="mt-2 w-100 d-flex allButtons" type="submit" onClick={scrollToTop}>
                Avanti
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={4} style={{ position: "sticky", top: 0 }}>
            <Card
              className="p-3 m-3"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${prenotazione.immagine})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h5 className="text-wrap mb-4">Riepilogo prenotazione</h5>

              <p className="text-wrap mb-4">
                <strong>Struttura: </strong> {prenotazione.tipologiaAttivita} {prenotazione.nome}
              </p>
              <p className="text-wrap mb-4">
                <strong>Città: </strong>
                {prenotazione.citta}
              </p>
              <p className="text-wrap mb-4">
                <strong>Prezzo a notte a persona: </strong>
                {prenotazione.prezzo} €
              </p>
              <p className="text-wrap mb-4">
                <strong>Durata del soggiorno:</strong> {duration} notti
              </p>
              <p className="text-wrap mb-4">
                <strong>Prezzo totale a persona: </strong>
                {prezzoTotaleApersona} €
              </p>
              <p className="text-wrap mb-4">
                <strong>Sconto promo 20%: </strong> {scontoPrezzo} €
              </p>

              <Card.Footer
                className="d-flex flex-wrap justify-content-center align-items-center mt-5"
                style={{ backgroundColor: "rgba(64, 162, 219, 0.43)" }}
              >
                <h5>
                  <strong>Prezzo TOTALE a persona: </strong>
                </h5>
                <h5 className="text-wrap">{prezzoScontato} €</h5>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Row>
    </Card>
  );
};
