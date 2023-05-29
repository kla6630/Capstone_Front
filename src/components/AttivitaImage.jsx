import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export const AttivitaImage = (props) => {
  const apiKey = "36783924-76d94ec5d83721e0e7f9c5f5f"; //process.env.PIXABAY_API_KEY;
  const [foto, setFoto] = useState();

  const getFotoAction = async (props) => {
    try {
      let res = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${props}&image_type=photo`, {
        method: "GET",
      });
      if (res.ok) {
        let data = await res.json();
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        setFoto(data.hits[randomIndex].webformatURL);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFotoAction(props.foto);
  }, [props]);

  return <Image src={foto} className="mx-2 elencoCardImg" />;
};
