import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/logoRecurso 2.png";
import bg from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss"

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main className="mainHome">
        <div className="content container">
          <img src={logo} alt="" />
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Ut sint minus vel minus ipsa est expedita atque</p>
        </div>
      </main>
    </>
  );
}

export default Home;
