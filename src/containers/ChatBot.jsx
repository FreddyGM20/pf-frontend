import React from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "../styles/chatbot.css";
import { Box } from "@mui/material";
import bgHome from "../assets/BackgroundH.png"


const ChatBot = () => {
  const URL = "https://contenedor-diagven-production.up.railway.app";
  let [datosMessages, setdatosMessages] = useState([]);
  let [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });
  let [VerOverlay, setVerOverlay] = useState(true);
  let [mensajeError, setMensajeError] = useState("");
  let [chat, setChat] = useState({
    id: 0,
    pregunta: "",
    autor: "YO",
    respuestas: [],
  });
  let [idAnterior, setIdAnterior] = useState(0);

  //Primera pregunta
  function getPreguntas() {
    axios.get(`${URL}/preguntas/1`).then((res) => {
      setdatosMessages([...datosMessages, res.data]);
      setIdAnterior(res.data.id);
    });
  }

  //registroChat
  function Register() {
    axios.post(`${URL}/registro`, formData).then((res) => {
      if (res.data.Status === "Success") {
        localStorage.setItem("id", res.data.id);
        setVerOverlay(false);
        getPreguntas();
      } else {
        document.getElementById("Error").style.display = "block";
        setMensajeError(res.data.message);
      }
    });
  }

  //Responder
  const putRespuestas = (resPut, idPregunta) => {
    setIdAnterior(datosMessages[datosMessages.length - 1].id);
    const respuesta = {
      id_pregunta: idPregunta,
      respuesta: resPut.respuesta,
      iduser: localStorage.getItem("id"),
    };
    if (resPut.siguiente_pregunta === null) {
      setdatosMessages([
        ...datosMessages,
        { id: 0, pregunta: resPut.respuesta, autor: "YO", respuestas: [] },
      ]);
    } else {
      axios
        .put(`${URL}/respuestas`, respuesta, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          const datos = {
            id: 0,
            pregunta: resPut.respuesta,
            autor: "YO",
            respuestas: [],
          };
          setdatosMessages([...datosMessages, datos, res.data]);
        });
    }
  };

  //addchat
  const addChat = () => {
    if (chat.pregunta !== "") {
      setdatosMessages([...datosMessages, chat]);
      setChat((data) => ({
        ...data,
        pregunta: "",
      }));
      const limpiar = document.getElementById("text");
      limpiar.value = "";
    }
  };

  function scrollToBottom (id) {
    setTimeout(function(){
      var div = document.getElementById(id);
      div.scrollTop = div.scrollHeight + div.clientHeight;
    },100)
 }

  return (
    <>
      <NavBar />
      <Box sx={{ height: "400px" }} style={{ marginTop: "68.5px" }}>
        {VerOverlay === true && (
          <div className="overlay">
            <div className="boxRegister">
              <h1 style={{ textAlign: "center" }}>Registrarse</h1>
              <input
                type="text"
                placeholder="Nombre*"
                className="form-control"
                onChange={({ target }) => {
                  setFormData((data) => ({
                    ...data,
                    nombre: target.value,
                  }));
                }}
              />
              <input
                type="email"
                placeholder="Email*"
                className="form-control"
                onChange={({ target }) => {
                  setFormData((data) => ({
                    ...data,
                    email: target.value,
                  }));
                }}
              />
              <button className="btn btn-success" onClick={() => Register()}>
                Confirmar
              </button>
              <p
                style={{
                  margin: "5px",
                  color: "red",
                  display: "none",
                  textAlign: "center",
                }}
                id="Error"
              >
                {mensajeError}
              </p>
            </div>
          </div>
        )}
        <div
          className="content"
          style={{
            height: "calc( 100vh - 68.5px)",
            // background: "#fff",
            // backgroundColor: '#e5e5f7',
            // opacity: '0.8',
            // backgroundImage:  'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #00a2ff, #444cf7 )',
            backgroundColor: "#e5e5f7",
            opacity: "0.8",
            backgroundSize: "100%",
            backgroundImage:
              `url(${bgHome})`,
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "800px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div id="chat"  onLoad={scrollToBottom("chat")} className="chatBox" style={{ height: "100%" }}>
              {/* chat */}
              {datosMessages.map((element) => (
                <div
                  className={`${
                    element.autor === "BOT" ? "contentChat1" : "contentChat2"
                  }`} 
                >
                  <div
                    className="chat"
                    id={`${element.autor === "BOT" ? "chat1" : "chat2"}`}
                   
                  >
                    <p
                      style={{ color: "rgba(25,25,25,1)" }}
                      key={element.pregunta}
                    >
                      {element.pregunta}
                    </p>
                    <span className="contentButon">
                      {element.respuestas.map((el) => (
                        <button
                          className="btn btn-primary"
                          key={el.respuesta}
                          onClick={() => putRespuestas(el, element.id)}
                        >
                          {el.respuesta}
                        </button>
                        
                      ))}
                      {/* {
                      idAnterior !== 0 &&
                      <button className="btn btn-primary" onClick={prevQ()}>Pregunta anterior</button>
                    } */}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ChatBot;
