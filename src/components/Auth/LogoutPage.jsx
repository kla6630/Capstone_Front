import React from "react";
import { useSignOut } from "react-auth-kit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();

    navigate("/");
  };

  const handleGoToActivities = () => {
    navigate("/activities/{id}");
  };

  return (
    <div className="logoutPageContainer">
      <h1>Complimenti! Ti sei collegato con successo!</h1>

      <h2>Logout</h2>
      <p>Sei sicuro di voler effettuare il logout?</p>

      <Button variant="outlined" onClick={handleLogout} className="allButtons">
        Logout e Torna alla Home
      </Button>

      <Button variant="outlined" onClick={handleGoToActivities} className="allButtons">
        Vai a /activities/:id
      </Button>
    </div>
  );
};

export default LogoutPage;
