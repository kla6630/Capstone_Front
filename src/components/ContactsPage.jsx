import React, { useRef, useState } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { Email, Facebook, GitHub, Instagram, LinkedIn, Map, Phone, Pinterest } from "@mui/icons-material";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export const ContactsPage = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ho5e2il", "template_pe6hrb2", formRef.current, "2WtlrS0rpwUaISgtF").then(
      (result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setShowAlert(true);
      },
      (error) => {
        console.log("Errore: ", error.text);
      }
    );
  };

  const handleInputChange = (e) => {
    setIsFormValid(formRef.current.checkValidity());
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setIsSubmitted(false);
    setShowAlert(false);
    setIsFormValid(false);
  };

  return (
    <div className="textsAndFormsContainer contactsPageContainer">
      <Row className="mx-4 my-4">
        <Col md={7}>
          <h3>Scrivici:</h3>
          {!isSubmitted && (
            <h5>
              Se necessiti di assistenza, sentiti libero di metterti in contatto con noi utilizzando il modulo fornito o
              utilizzando gli altri metodi a tua disposizione.
            </h5>
          )}

          {isSubmitted ? (
            <div>
              {showAlert ? (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  <Alert.Heading>Messaggio inviato con successo!</Alert.Heading>
                  <p>Grazie per averci contattato! Risponderemo il prima possibile.</p>
                </Alert>
              ) : null}

              <Button variant="outlined" onClick={resetForm} className={`mt-2 ${isSubmitted && "hiddenButton"}`}>
                Nuovo Messaggio
              </Button>
            </div>
          ) : (
            <Form ref={formRef} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  name="from_name"
                  className="input-wrapper"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Inserisci la tua email"
                  type="email"
                  name="from_email"
                  className="input-wrapper"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Inserisci il tuo messaggio"
                  rows={3}
                  name="message"
                  className="message-input-wrapper"
                />
              </Form.Group>

              <Button
                variant="outlined"
                type="submit"
                value="Send"
                className={`mt-2 ${!isFormValid && "hiddenButton"}`}
              >
                Invia
              </Button>
            </Form>
          )}
        </Col>

        <Col md={5} className="infoContatto mt-4">
          <h4>Informazioni di contatto</h4>
          <p>
            <Phone /> +39 3483292092
          </p>
          <p>
            <Email /> <Link to="mailto:claudiopinna@live.com">claudiopinna@live.com</Link>
          </p>
          <p>
            <Map />
            Via Molise, 15 - 09127 Cagliari
          </p>

          <hr />

          <h4>Social</h4>
          <p>
            <LinkedIn />
            <Link to="https://www.linkedin.com/in/claudio-pinna-277093253/">LinkedIn</Link>
          </p>
          <p>
            <Facebook />
            <Link to="https://www.facebook.com/claudio.pinna01">Facebook</Link>
          </p>
          <p>
            <Instagram />
            <Link to="https://www.instagram.com/claudio_pinna_/">Instagram</Link>
          </p>

          <p>
            <GitHub />
            <Link to="https://github.com/kla6630">GitHub</Link>
          </p>
          <p>
            <Pinterest />
            <Link to="#">Pinterest</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};
