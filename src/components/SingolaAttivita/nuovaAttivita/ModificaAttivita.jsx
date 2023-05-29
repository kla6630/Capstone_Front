import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { Edit } from "@mui/icons-material";

export const ModificaAttivita = ({ id }) => {
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
      const response = await fetch(`http://localhost:8080/attivitaricettive/id/${id}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Dati aggiornati con successo!");
      } else {
        console.log("Errore durante l'aggiornamento dei dati");
      }
    } catch (error) {
      console.error("Errore durante la chiamata Fetch:", error);
    }

    setShow(false);
  };

  useEffect(() => {
    const fetchAttivita = async () => {
      try {
        const response = await fetch(`http://localhost:8080/attivitaricettive/id/${id}`);

        if (response.ok) {
          const attivita = await response.json();
          setFormData(attivita);
        } else {
          console.log("Errore durante il recupero dei dati dell'attività");
        }
      } catch (error) {
        console.error("Errore durante la chiamata Fetch:", error);
      }
    };

    if (id) {
      fetchAttivita();
    }
  }, [id]);

  return (
    <>
      <Button variant="outlined" className="allButtons" onClick={handleOpen}>
        Modifica Attività (Coming Soon)
        <Edit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Attività</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" required value={formData.nome} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="citta">
              <Form.Label>Città:</Form.Label>
              <Form.Control type="text" required value={formData.citta} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="indirizzo">
              <Form.Label>Indirizzo:</Form.Label>
              <Form.Control type="text" required value={formData.indirizzo} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="descrizione">
              <Form.Label>Descrizione:</Form.Label>
              <Form.Control as="textarea" required value={formData.descrizione} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="prezzoMinimo">
              <Form.Label>Prezzo minimo:</Form.Label>
              <Form.Control type="number" required value={formData.prezzoMinimo} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="tipologiaAttivita">
              <Form.Label>Tipologia:</Form.Label>
              <Form.Control type="text" required value={formData.tipologiaAttivita} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" required value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="telefono">
              <Form.Label>Telefono:</Form.Label>
              <Form.Control type="tel" required value={formData.telefono} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="immagine">
              <Form.Label>Immagine:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il link all'immagine"
                required
                value={formData.immagine}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">Inserisci il link all'immagine</Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary">
              Aggiorna
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
