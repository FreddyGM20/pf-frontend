import React from "react";
import "../styles/Login.scss";
import Header from "./NavBar"
import { useNavigate } from "react-router-dom";
import logot from '../assets/Logo azul.png'

const users = [
  {
    email: "freddy@gmail.com",
    contraseña: "123456",
    isAdmin: false,
  },
  {
    email: "admin@gmail.com",
    contraseña: "123456",
    isAdmin: true,
  },
];


const Login = () => {
  const navigate = useNavigate();
  const navegador = false

  return (
    <>
    <Header />
      <div className="login">
        <div className="BolaBg BolaLeft"></div>
        <div className="container-login">
          <img src={logot} alt="" className="logo" />
          <div className="form-container">
            <form className="form">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="tucorreo@dominio.com"
                className="input input-email"
              />
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="input input-password"
              />
              <button
                value="Iniciar sesion"
                className="primary-button login-button"
                onClick={() => navigate('/medic')}
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
