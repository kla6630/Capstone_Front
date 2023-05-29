import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) {
      const tokens = JSON.parse(storedTokens);
      setUser(jwt_decode(tokens.accessToken));
    }
  }, []);

  const login = async (payload) => {
    try {
      const apiResponse = await axios.post("http://localhost:8080/api/auth/login", payload);
      localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
      setUser(jwt_decode(apiResponse.data.accessToken));
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    // invoke the logout API call, for our NestJS API no logout API

    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleStorageChange = (event) => {
    if (event.key === "tokens") {
      const storedTokens = event.newValue;
      if (storedTokens) {
        const tokens = JSON.parse(storedTokens);
        setUser(jwt_decode(tokens.accessToken));
      } else {
        setUser(null);
      }
    }
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
