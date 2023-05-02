import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import Admin from "../containers/Admin";
import Home from "../containers/Home";
import Medic from "../containers/Medic";
import ChatBot from "../containers/ChatBot";
import Estadistica from "../containers/Estadistica";
import "../styles/global.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Estadistica />} path="/estadistica" />
          <Route element={<ChatBot />} path="/chatbot" />
          <Route element={<Medic />} path="/medic" />
          <Route element={<Login />} path="/login" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
