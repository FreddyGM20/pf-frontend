import React, { useState } from "react";
import "../styles/navBar.scss";
//import images
import logoH from "../assets/Logo con letras.png";
import menu from "../assets/icon_menu.svg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleClick () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <>
      <header>
        <nav className="container">
          <div className="logoNavBar">
            <img
              className="ldesktop"
              src={logoH}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          <div className="buttonsNavBar">
            <img
              className="lmobile"
              onClick={() => handleClick()}
              src={menu}
              alt=""
            />
            <ol className="list">
              <Link to={"/"}>
                Inicio<div className="separe"></div>
              </Link>
              <Link to={"/chatbot"}>
                ChatBot<div className="separe"></div>
              </Link>
              <Link to={"/informacion-ets"}>
                Informacion ETS<div className="separe"></div>
              </Link>
            </ol>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              ¡Soy medico!
            </button>
          </div>
        </nav>
      </header>
      <div id="menu" className="mobile-menu">
        <ul>
          <li>
            <a onClick={() => navigate("/")} className="title">
              Inicio
            </a>
          </li>

          <li>
            <a onClick={() => navigate("/informacion-ets")} className="title">
              Informacion ETS
            </a>
          </li>

          <li>
            <a onClick={() => navigate("/login")} className="title">
              Iniciar sesión
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
