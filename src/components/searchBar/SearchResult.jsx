import React from "react";
import { Link } from "react-router-dom";

export const SearchResult = ({ result }) => {
  let tipologiaAttivitaLabel = result.tipologiaAttivita;

  if (result.tipologiaAttivita === "BEB") {
    tipologiaAttivitaLabel = "B&B";
  }

  return (
    <Link to={`/activities/${result.id}`} className="search-result unstyled-link">
      <div>
        <b>{tipologiaAttivitaLabel}:</b> <i>"{result.nome}"</i> a {result.citta}
      </div>
    </Link>
  );
};
