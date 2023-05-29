import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export const CreaNuovaAttivita = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    citta: "",
    indirizzo: "",
    descrizione: "",
    prezzoMinimo: "",
    tipologiaAttivita: "",
    email: "",
    telefono: "",
    immagine: "",
  });

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/attivitaricettive", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Dati inviati con successo!");
      } else {
        console.log("Errore durante l'invio dei dati");
      }
    } catch (error) {
      console.error("Errore durante la chiamata Fetch:", error);
    }

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Nuova Attività
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea Nuova Attività</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="citta">
              <Form.Label>Città:</Form.Label>
              <Form.Control type="text" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="indirizzo">
              <Form.Label>Indirizzo:</Form.Label>
              <Form.Control type="text" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="descrizione">
              <Form.Label>Descrizione:</Form.Label>
              <Form.Control as="textarea" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="prezzoMinimo">
              <Form.Label>Prezzo minimo:</Form.Label>
              <Form.Control type="number" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="tipologiaAttivita">
              <Form.Label>Tipologia:</Form.Label>
              <Form.Select required onChange={handleInputChange}>
                <option value="">Seleziona una tipologia</option>
                <option value="BEB">Bed & Breakfast</option>
                <option value="HOTEL">Hotel</option>
                <option value="RESIDENCE">Appartamento</option>
                <option value="APPARTAMENTO">Residence</option>
                <option value="ALTRO">Altro</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="telefono">
              <Form.Label>Telefono:</Form.Label>
              <Form.Control type="tel" required onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="immagine">
              <Form.Label>Immagine:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il link all'immagine"
                required
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">Inserisci il link all'immagine</Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary">
              Invia
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
