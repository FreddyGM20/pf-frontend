import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../containers/Login'
import Admin from '../containers/Admin'
import Home from '../containers/Home'
import Diagnostico from '../containers/Diagnostico'
import Medic from '../containers/Medic'
import ChatBot from '../containers/ChatBot'
import Estadistica from '../containers/Estadistica'
import '../styles/global.scss';

function App() {
  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Estadistica />} path="/estadistica" />
                    <Route element={<ChatBot />} path="/chatbot" />
                    <Route element={<Medic />} path="/medic" />
                    <Route element={<Diagnostico />} path="/diagnostic" />
                    <Route element={<Home />} path="/home" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Admin />} path="/admin" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App