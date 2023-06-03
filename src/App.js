//STYLE IMPORTS
import "./style/css/app.css";
import { CssBaseline } from "@mui/material";
////FONT
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//TOOLS IMPORTS
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

//COMMON COMPONENTS IMPORTS
import { Footer } from "./components/common/Footer";
import { MyNavbarBigScreens } from "./components/common/MyNavbarBigScreens";
import { MyNavbarSmallScreens } from "./components/common/MyNavbarSmallScreens";
import { Container } from "react-bootstrap";
import { HomePage } from "./components/HomePage";

//PAGES IMPORTS
import { ContactsPage } from "./components/ContactsPage";
import { AboutPage } from "./components/AboutPage";
import { RegistrationPage } from "./components/Auth/RegistrationPage";
import { DettagliAttivita } from "./components/SingolaAttivita/DettagliAttivita";
import { ElencoBebSection } from "./components/navPagesComponents/b&b/ElencoBebSection";
import { ElencoHotelSection } from "./components/navPagesComponents/hotel/ElencoHotelSection";
import { ElencoAppartamentiSection } from "./components/navPagesComponents/appartamenti/ElencoAppartamentiSection";
import { ElencoResidenceSection } from "./components/navPagesComponents/residence/ElencoResidenceSection";
import { ElencoTutteLeAttivitaSection } from "./components/navPagesComponents/tutteleattivita/ElencoTutteLeAttivitaSection";
import Login from "./components/Auth/Login";
import LogoutPage from "./components/Auth/LogoutPage";
import { RiepilogoPrenotazione } from "./components/SingolaAttivita/RiepilogoPrenotazione";
import { RiepilogoPrenotazioneP2 } from "./components/SingolaAttivita/RiepilogoPrenotazioneP2";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <CssBaseline />
        <MyNavbarBigScreens />
        <MyNavbarSmallScreens />
        <Container className="routes-container">
          <Routes>
            {/* FREE ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/all" element={<ElencoTutteLeAttivitaSection />} />
            <Route path="/beb" element={<ElencoBebSection />} />
            <Route path="/hotel" element={<ElencoHotelSection />} />
            <Route path="/apartment" element={<ElencoAppartamentiSection />} />
            <Route path="/residence" element={<ElencoResidenceSection />} />
            <Route path="/contactspage" element={<ContactsPage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/activities/:id" element={<DettagliAttivita />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/registration" element={<RegistrationPage />} /> */}
            {/* <Route path="/riepilogo-prenotazione" element={<RiepilogoPrenotazione />} /> */}

            {/* NON-AUTHENTICATED ROUTES */}
            <Route
              path="/login"
              element={
                <ProtectedRoute accessBy="non-authenticated">
                  <Login />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/registration"
              element={
                <ProtectedRoute accessBy="non-authenticated">
                  <RegistrationPage />
                </ProtectedRoute>
              }
            ></Route>

            {/* AUTHENTICATED ROUTES */}

            <Route
              path="/logout"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <LogoutPage />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/riepilogo-prenotazione"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <RiepilogoPrenotazione />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/riepilogo-prenotazione-p2"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <RiepilogoPrenotazioneP2 />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Container>
        <Footer />
      </AuthContextProvider>
    </>
  );
}
