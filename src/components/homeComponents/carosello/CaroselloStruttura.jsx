import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import classNames from "classnames";
import { useState } from "react";

export const CaroselloStruttura = ({ attivitaList }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Carousel>
            {attivitaList.map((attivita) => (
              <Carousel.Item key={attivita.id}>
                <img
                  className="d-block w-100 immagineCarosello"
                  src={attivita.immagine}
                  onLoad={handleImageLoaded}
                  alt="slides"
                />
                <Carousel.Caption className={classNames("caroselloCaptionText", "colore", attivita.tipologiaAttivita)}>
                  <h3>
                    <Link to={`/activities/${attivita.id}`} onClick={scrollToTop}>
                      {attivita.nome}
                    </Link>
                  </h3>
                  <p>{attivita.citta}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
