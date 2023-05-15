import React, { useState } from "react";
import "../styles/Login.scss";
import Header from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logot from "../assets/Logo azul.png";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { BsPersonFillAdd } from "react-icons/bs";

const Login = () => {
  const URL = "http://25.78.142.190:3000";
  const navigate = useNavigate();
  const navegador = false;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  function handle(e) {
    const userm = { ...user };
    userm[e.target.id] = e.target.value;
    setUser(userm);
  }

  function Submit(e) {
    e.preventDefault();
    axios.post(`${URL}/medico/login`, user).then((res) => {
      if (res.data.response == "Success") {
        localStorage.setItem("token", res.data.token);
        navigate("/medic");
      } else {
        setError(res.data.message);
        //ahora si mori ajajajaj heeelp!
      }
    });
  }
  return (
    <>
      <Header />
      <div className="login">
        <div className="BolaBg BolaLeft"></div>
        <div className="container-login">
          <img src={logot} alt="" className="logo" />
          <div className="form-container">
            {error && (
              //mani esperate
              //dale
              <Stack
                sx={{ display: "block", width: "100%", padding: "10px" }}
                spacing={2}
              >
                <Alert id="error" severity="error">
                  {error}
                </Alert>
              </Stack>
              //ishhhhhhhhhhhhhhhhhhhhhhhhhhhh HEY Y COMO SE HACE PA QUE SE VEA ASIU COLETO PILLLAAAA PA EL ENVIAR DIAGONSTICO
            )}

            <form className="form" onSubmit={(e) => Submit(e)}>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="tucorreo@dominio.com"
                value={user.email}
                onChange={(e) => handle(e)}
                className="input input-email"
              />
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={user.password}
                onChange={(e) => handle(e)}
                className="input input-password"
              />
              <button
                value="Iniciar sesion"
                className="primary-button login-button"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
        <div className="BolaBg rigthBola"></div>
      </div>
    </>
  );
};

export default Login;
