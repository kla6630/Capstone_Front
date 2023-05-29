import React from "react";
import { Link } from "react-router-dom";

export const RisultatiRicerca = ({ attivita }) => {
  const { id, nome } = attivita;

  return (
    <div>
      <Link to={`/attivita/${id}`}>{nome}</Link>
    </div>
  );
};
