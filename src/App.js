import { Route, Routes } from "react-router-dom";
import "./style/css/app.css";
import { Footer } from "./components/common/Footer";
import { MyNavbarBigScreens } from "./components/common/MyNavbarBigScreens";
import { MyNavbarSmallScreens } from "./components/common/MyNavbarSmallScreens";
import { Container } from "react-bootstrap";
import { HomePage } from "./components/HomePage";
import { ContactsPage } from "./components/ContactsPage";
import { AboutPage } from "./components/AboutPage";

import { CssBaseline } from "@mui/material";

//FONT ROBOTO PER TUTTO IL PROGETTO
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { DettagliAttivita } from "./components/SingolaAttivita/DettagliAttivita";
import { ElencoBebSection } from "./components/navPagesComponents/b&b/ElencoBebSection";
import { ElencoHotelSection } from "./components/navPagesComponents/hotel/ElencoHotelSection";
import { ElencoAppartamentiSection } from "./components/navPagesComponents/appartamenti/ElencoAppartamentiSection";
import { ElencoResidenceSection } from "./components/navPagesComponents/residence/ElencoResidenceSection";
import { ElencoTutteLeAttivitaSection } from "./components/navPagesComponents/tutteleattivita/ElencoTutteLeAttivitaSection";
import { RegistrationPage } from "./components/Auth/RegistrationPage";

import Login from "./components/Auth/Login";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import LogoutPage from "./components/Auth/LogoutPage";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <CssBaseline />
        <MyNavbarBigScreens />
        <MyNavbarSmallScreens />
        <Container className="routes-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all" element={<ElencoTutteLeAttivitaSection />} />
            <Route path="/beb" element={<ElencoBebSection />} />
            <Route path="/hotel" element={<ElencoHotelSection />} />
            <Route path="/apartment" element={<ElencoAppartamentiSection />} />
            <Route path="/residence" element={<ElencoResidenceSection />} />
            <Route path="/contactspage" element={<ContactsPage />} />
            <Route path="/aboutpage" element={<AboutPage />} />

            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/registration" element={<RegistrationPage />} /> */}
            {/* <Route path="/activities/:id" element={<DettagliAttivita />} /> */}

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

            <Route
              path="/activities/:id"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <DettagliAttivita />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/logout"
              element={
                <ProtectedRoute accessBy="authenticated">
                  <LogoutPage />
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
