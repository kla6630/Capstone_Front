import React, { useState, useEffect } from "react";
import { ListaCard } from "../ListaCard";

const BaseURL = "http://localhost:8080/attivitaricettive/tipologia/APPARTAMENTO";

export const ElencoAppartamentiCardFetch = () => {
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
          console.log("Response is not OK", response.status);
        }
      } catch (error) {
        console.error("ERRORE CATCH", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {attivitaList.map((attivita) => (
        <ListaCard key={attivita.id} attivita={attivita} />
      ))}
    </>
  );
};
