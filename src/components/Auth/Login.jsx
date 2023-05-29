import { useContext, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AuthContext from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Button } from "@mui/material";

const Login = () => {
  const userName = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const loginSubmit = async () => {
    let payload = {
      username: userName.current.value,
      password: password.current.value,
    };
    const success = await login(payload);
    if (success) {
      navigate("/LogoutPage");
    } else {
      setLoginError(true);
    }
  };

  const handleInputChange = () => {
    const isDisabled = userName.current.value === "" || password.current.value === "";
    setIsButtonDisabled(isDisabled);
  };

  return (
    <>
      <Container className="textsAndFormsContainer loginFormContainer">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <h2>Login</h2>
            <h5>Inserisci le tue crenziali per effettuare l'accesso</h5>
            <p>
              Se sei nuovo puoi registrarti cliccando{" "}
              <Link to="/registration">
                <b>QUI</b>
              </Link>
            </p>
            <p>
              Ricorda, il tuo Nome utente potrebbe corrispondere all'indirizzo email che hai utilizzato in fase di
              registrazione
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Nome utente</Form.Label>
                <Form.Control type="text" ref={userName} className="input-wrapper" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} className="input-wrapper" onChange={handleInputChange} />
              </Form.Group>
              <Button
                variant="outlined"
                type="button"
                className={`allButtons ${isButtonDisabled ? "hideButton" : ""}`}
                onClick={loginSubmit}
                disabled={isButtonDisabled}
              >
                Login
              </Button>
            </Form>
            {loginError && (
              <>
                <Alert severity="error">
                  <AlertTitle>Credenziali Errate</AlertTitle>
                  C'è un problema - <strong>verifica i tuoi dati di accesso e riprova!</strong>
                </Alert>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
