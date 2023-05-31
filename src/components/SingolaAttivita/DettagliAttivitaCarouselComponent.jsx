import { useEffect, useState } from "react";
import { TranslateTipologiaAttivita } from "../common/Translate/TranslateTipologiaAttivita";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AspectRatio } from "@mui/icons-material";

export const DettagliAttivitaCarouselComponent = ({ attivita }) => {
  const searchTerm = TranslateTipologiaAttivita(attivita.tipologiaAttivita);
  console.log("Termine di ricerca:", searchTerm);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchimages = async () => {
      try {
        const apiKey = "36783924-76d94ec5d83721e0e7f9c5f5f"; // process.env.PIXABAY_API_KEY;
        const res = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&per_page=10`);
        if (res.ok) {
          const data = await res.json();
          const imageUrls = data.hits.map((hit) => hit.webformatURL);
          setImages(imageUrls);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchimages();
  }, [searchTerm]);

  return (
    <>
      <Carousel infiniteLoop>
        {attivita.immagine && (
          <div>
            <img
              className="d-block w-100"
              src={attivita.immagine}
              alt={`Immagine Attivita`}
              style={{ width: "100%", height: "22rem", objectFit: "cover", borderRadius: "2%" }}
            />
          </div>
        )}
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Immagine ${index + 1}`}
              style={{ width: "100%", height: "22rem", objectFit: "cover", borderRadius: "2%" }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
