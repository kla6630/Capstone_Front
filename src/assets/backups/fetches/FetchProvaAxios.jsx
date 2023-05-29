import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const BaseURL = "http://localhost:8080/attivitaricettive";

export const FetchProvaAxios = () => {
  const [attivitaList, setAttivitaList] = useState([]);

  useEffect(() => {
    axios.get(BaseURL).then((response) => {
      const attivitaList = response.data;
      setAttivitaList(attivitaList);
    });
  }, []);

  return (
    <Container>
      <div id="card-container">
        {attivitaList.map((attivita) => (
          <div key={attivita.id} className="card">
            <img src={attivita.immagine} alt={attivita.nome} />
            <div className="card-content">
              <h2>{attivita.nome}</h2>
              <p>
                {attivita.citta} - {attivita.indirizzo}
              </p>
              <p>
                <strong>Tipo:</strong> {attivita.tipologiaAttivita}
              </p>
              <p>
                <strong>Email:</strong> {attivita.email}
              </p>
              <p>
                <strong>Telefono:</strong> {attivita.telefono}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
