import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const isFormValid = () => {
    return name !== "" && username !== "" && validateEmail(email) && password !== "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, username, email, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            setRegistrationSuccess(true);
          } else {
            return response.json().then((data) => {
              setError(data.message);
              setShowError(true);
              setTimeout(() => {
                setShowError(false);
              }, 4000); // NASCONDE L'ERRORE DOPO 4 SECONDI
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("Compila tutti i campi correttamente.");
    }
  };

  return (
    <div className="textsAndFormsContainer signInPageContainer">
      <h2>Registrati su easyBook</h2>
      <h5>Completa i seguenti campi con i dati richiesti!</h5>
      <p>Ricorda, l'indirizzo email che inserirai tramite questo form sarà anche il tuo nome utente!</p>
      {!registrationSuccess && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              className="input-wrapper"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci il tuo indirizzo email"
              className="input-wrapper"
              value={email}
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
                setUsername(value);
              }}
              isInvalid={email !== "" && !validateEmail(email)}
            />
            <Form.Control.Feedback type="invalid">Inserisci un indirizzo email valido.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Scegli una password"
              className="input-wrapper"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button
            variant="outlined"
            type="submit"
            className={`allButtons ${!isFormValid() ? "hiddenButton" : ""}`}
            disabled={!isFormValid()}
          >
            Registrati
          </Button>
        </Form>
      )}
      {showError && (
        <div className="alert alert-danger">
          {error === "Username is already exists!."
            ? "Questo nome utente è già presente nei nostri sistemi, per favore scegline uno diverso e riprova"
            : error}
        </div>
      )}
      {registrationSuccess && (
        <div className="alert alert-success">
          La registrazione è andata a buon fine ora puoi effettuare il <a href="/login">LOGIN</a>
        </div>
      )}
    </div>
  );
};
