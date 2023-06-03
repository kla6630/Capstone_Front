import { Button } from "@mui/material";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="textsAndFormsContainer">
      <Row>
        <h2>Qualcosa su di noi...</h2>
        <h5 className="mb-2">Benvenuti su easyBook!</h5>
        <Card.Body>
          <Card.Text>
            EasyBook è il mio progetto personale, sviluppato interamente da me, dedicato a semplificare il processo di
            prenotazione per le piccole realtà ricettive.
          </Card.Text>

          <Card.Text>
            Sono un developer junior appassionato, e con easyBook cerco di offrire una soluzione centralizzata per
            consentire a queste attività locali di promuoversi e ai clienti di prenotare facilmente le loro sistemazioni
            preferite.
          </Card.Text>

          <Card.Text>
            Utilizzando le mie competenze in tecnologie come React, SASS, HTML, CSS, JavaScript, Bootstrap, Material UI,
            Java, Spring Boot e JPA, sto creando easyBook per fornire un'interfaccia intuitiva e user-friendly sia per
            gli utenti che per le attività ricettive.
          </Card.Text>

          <Card.Text>
            L'idea easyBook nasce dalla mia passione per l'innovazione e il desiderio di supportare le piccole realtà
            locali.
          </Card.Text>

          <Card.Text>
            Lavorando da solo su questo progetto, sto affrontando diverse sfide, ma sono determinato a creare una
            piattaforma che semplifichi il processo di prenotazione per le attività ricettive e offra esperienze
            autentiche agli utenti.
          </Card.Text>

          <Card.Text>
            easyBook offrirà funzionalità come la ricerca avanzata, la visualizzazione delle disponibilità, le
            recensioni degli utenti e un sistema di prenotazione sicuro, al fine di offrire una soluzione completa e
            affidabile. Guardando al futuro, il mio obiettivo è continuare a sviluppare easyBook e migliorarlo
            costantemente. Sono aperto a feedback e suggerimenti per rendere easyBook sempre più efficace ed efficiente.
          </Card.Text>

          <Card.Text>Grazie per il vostro supporto e per essere parte di questa avventura.</Card.Text>

          <Card.Text>
            <i>Claudio - Fondatore di easyBook</i>
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="outlined" className="mt-2 allButtons">
            <Link to="/contactspage/" onClick={scrollToTop}>
              Contattaci
            </Link>
          </Button>
        </Card.Footer>
      </Row>
    </div>
  );
};
