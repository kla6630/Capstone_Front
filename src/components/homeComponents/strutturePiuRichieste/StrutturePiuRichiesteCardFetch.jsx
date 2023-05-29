import React, { useState, useEffect } from "react";
import { StrutturePiuRichiesteCard } from "./StrutturePiuRichiesteCard";
import { Col, Container, Row } from "react-bootstrap";

const BaseURL = "http://localhost:8080/attivitaricettive";

export const StrutturePiuRichiesteCardFetch = () => {
  const [attivitaList, setAttivitaList] = useState([]);
  const [randomAttivitaList, setRandomAttivitaList] = useState([]);

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
          console.log("Response is not OK", response.status);
        }
      } catch (error) {
        console.error("ERRORE CATCH", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (attivitaList.length > 0) {
      const randomAttivita = shuffleArray(attivitaList).slice(0, 4);
      setRandomAttivitaList(randomAttivita);
    }
  }, [attivitaList]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={2} lg={4} xl={4}>
        {randomAttivitaList.map((attivita) => (
          <Col className="mt-3" key={attivita.id}>
            <StrutturePiuRichiesteCard attivita={attivita} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
