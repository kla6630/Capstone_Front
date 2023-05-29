import { BigCardRightImage } from "../components/common/BigCardRightImage";
import { CardMare } from "./homeComponents/CardMare";
import { CardMontagna } from "./homeComponents/CardMontagna";
import { StrutturePiuRichiesteSection } from "./homeComponents/strutturePiuRichieste/StrutturePiuRichiesteSection";
import { CaroselloAppartamentiSection } from "./homeComponents/carosello/CaroselloAppartamentiSection";
import { CaroselloBbSection } from "./homeComponents/carosello/CaroselloBbSection";
import { CaroselloHotelSection } from "./homeComponents/carosello/CaroselloHotelSection";
import { CaroselloResidenceSection } from "./homeComponents/carosello/CaroselloResidenceSection";
import { SearchSection } from "../components/searchBar/SearchSection";

export const HomePage = () => {
  return (
    <>
      <SearchSection />

      <BigCardRightImage />
      <StrutturePiuRichiesteSection />
      <CardMontagna />
      <CaroselloBbSection />
      <CaroselloHotelSection />
      <CardMare />
      <CaroselloAppartamentiSection />
      <CaroselloResidenceSection />
    </>
  );
};
