import React, { useState } from "react";
import NavBar from "./NavBar";
import logo from "../assets/Marca.png";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss"
import { BsFillChatLeftFill } from "react-icons/bs";
import ChatBot from "./ChatBot"

function Home() {
  const [openchat, setOpenChat] = useState(false)
  const navigate = useNavigate();
  const handleOpen = () => (setOpenChat(true))

  return (
    <>
      <NavBar />
      <main className="mainHome">
        <div className="content container">
          <button type="button" className="floatButton" onClick={handleOpen}> <BsFillChatLeftFill /> </button>
          {openchat &&
            <div className="openchat">
              <ChatBot />
            </div>
          }
          <div className="contents-cards">
            <div className="card">
              <img src={logo} alt="" />
              <h1>Lorem ipsum dolor sit</h1>
              <div className="buttons-login">
                <button type='button' className='btn btn-primary' onClick={() => navigate('/chatbot')}>¡Conversemos!</button>
                <button type='button' className='btn btn-primary' onClick={() => navigate('/informacion-ets')}>¡Aprendamos sobre ETS!</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
