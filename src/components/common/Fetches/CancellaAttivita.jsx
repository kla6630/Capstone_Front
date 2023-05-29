export const CancellaAttivita = async (id, callbackFn) => {
  try {
    const BaseUrl = `http://localhost:8080/attivitaricettive/id/${id}`;
    const response = await fetch(BaseUrl, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " /*+ process.env.REACT_APP_MYTOKEN*/,
      },
    });
    if (response.ok) {
      callbackFn();
      const data = await response;
      console.log("tutto ok: elemento rimosso:", data);
      return data;
    } else {
      console.log("errore status", response.status);
    }
  } catch (error) {
    console.log("errore nella catch", error);
  }
};
