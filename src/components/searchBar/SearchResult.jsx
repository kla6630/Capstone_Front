import React from "react";
import { Link } from "react-router-dom";
import { TranslateTipologiaAttivita } from "../common/Translate/TranslateTipologiaAttivita";

export const SearchResult = ({ result }) => {
  let tipologiaAttivitaLabel = TranslateTipologiaAttivita(result.tipologiaAttivita);

  return (
    <Link to={`/activities/${result.id}`} className="search-result unstyled-link">
      <div>
        <b>{tipologiaAttivitaLabel}:</b> <i>"{result.nome}"</i> a {result.citta}
      </div>
    </Link>
  );
};
