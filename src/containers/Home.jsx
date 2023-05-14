import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/Marca.png";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss"

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main className="mainHome">
        <div className="content container">
          <div className="card">
            <img src={logo} alt="" />
            <h1>Lorem ipsum dolor sit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="buttons-login">
              <button type='button' className='btn btn-primary' onClick={()=> navigate('/chatbot')}>¡Conversemos!</button>
              <button type='button' className='btn btn-primary' onClick={()=> navigate('/informacion-ets')}>¡Aprendamos sobre ETS!</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
