export const TranslateTipologiaAttivita = (tipologiaAttivita) => {
  switch (tipologiaAttivita) {
    case "BEB":
      return "Bed and Breakfast";
    case "HOTEL":
      return "Hotel";
    case "APPARTAMENTO":
      return "Appartamento";
    case "RESIDENCE":
      return "Residence";
    case "ALTRO":
      return "Altro";
    default:
      return "N/A";
  }
};
