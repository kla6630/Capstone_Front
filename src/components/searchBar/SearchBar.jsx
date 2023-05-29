import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8080/attivitaricettive")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((attivitaRicettive) => {
          const nomeLowerCase = attivitaRicettive.nome.toLowerCase();
          const cittaLowerCase = attivitaRicettive.citta.toLowerCase();
          const tipologiaLowerCase = attivitaRicettive.tipologiaAttivita.toLowerCase();
          return (
            attivitaRicettive &&
            (nomeLowerCase.includes(value.toLowerCase()) ||
              cittaLowerCase.includes(value.toLowerCase()) ||
              tipologiaLowerCase.includes(value.toLowerCase()))
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <SearchIcon id="search-icon" />
      <input
        className="input"
        placeholder="Dove vuoi dormire?"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};
