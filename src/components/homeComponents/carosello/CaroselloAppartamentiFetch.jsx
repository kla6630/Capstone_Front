import React, { useState, useEffect } from "react";
import { CaroselloStruttura } from "./CaroselloStruttura";
import { Col, Container, Row } from "react-bootstrap";

const BaseURL = "http://localhost:8080/attivitaricettive/tipologia/APPARTAMENTO";

export const CaroselloAppartamentiFetch = () => {
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
      const randomAttivita = shuffleArray(attivitaList);
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
      <Row>
        <Col>
          <CaroselloStruttura attivitaList={randomAttivitaList} />
        </Col>
      </Row>
    </Container>
  );
};
