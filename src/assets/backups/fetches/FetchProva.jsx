import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const BaseURL = "http://localhost:8080/attivitaricettive";

export const FetchProva = () => {
  const [attivitaList, setAttivitaList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BaseURL, {
          method: "GET",
          headers: {
            Authorization: "Bearer ", //+ process.env.REACT_APP_MYTOKEN,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAttivitaList(data);
        } else {
          console.log("La RESPONSE non è corretta", response.status);
        }
      } catch (error) {
        console.error("Errore nel CATCH", error);
      }
    };

    fetchData();
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
