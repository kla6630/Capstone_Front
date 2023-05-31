import React from "react";
import { useLocation } from "react-router-dom";

export const RiepilogoPrenotazioneP2 = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleSubmit = () => {
    const formData = {
      name: queryParams.get("name"),
      email: queryParams.get("email"),
      phone: queryParams.get("phone"),
      address: queryParams.get("address"),
    };

    const rightColumnData = {
      activityName: queryParams.get("activityName"),
      city: queryParams.get("city"),
      price: queryParams.get("price"),
      activityType: queryParams.get("activityType"),
      email: queryParams.get("email"),
      phone: queryParams.get("phone"),
      currentDate: queryParams.get("currentDate"),
      currentTime: queryParams.get("currentTime"),
      arrivalDate: queryParams.get("arrivalDate"),
      departureDate: queryParams.get("departureDate"),
    };

    // Puoi fare qualcosa con i dati qui, ad esempio inviarli al server o mostrarli sulla pagina

    // Esempio di visualizzazione dei dati sulla pagina
    return (
      <div>
        <h2>Dati del form:</h2>
        <p>Nome: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Telefono: {formData.phone}</p>
        <p>Indirizzo: {formData.address}</p>

        <h2>Dati della colonna di destra:</h2>
        <p>Nome attività: {rightColumnData.activityName}</p>
        <p>Città: {rightColumnData.city}</p>
        <p>Prezzo: {rightColumnData.price} €</p>
        <p>Tipologia Attività: {rightColumnData.activityType}</p>
        <p>Email: {rightColumnData.email}</p>
        <p>Telefono: {rightColumnData.phone}</p>
        <p>Data attuale: {rightColumnData.currentDate}</p>
        <p>Ora attuale: {rightColumnData.currentTime}</p>
        <p>Data di arrivo: {rightColumnData.arrivalDate}</p>
        <p>Data di partenza: {rightColumnData.departureDate}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Pagina dei dati del modulo</h1>
      {handleSubmit()}
    </div>
  );
};
