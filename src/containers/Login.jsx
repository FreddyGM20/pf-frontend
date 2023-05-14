import React, {useState} from "react";
import "../styles/Login.scss";
import Header from "./NavBar"
import axios from "axios";
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
  const URL = "http://25.78.142.190:3000";
  const navigate = useNavigate();
  const navegador = false

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  function handle(e){
    const userm = {...user}
    userm[e.target.id] = e.target.value
    setUser(userm)
    console.log(userm)
  }

  function Submit(e){
    e.preventDefault();
    axios.post(`${URL}/medico/login`,user)
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <>
    <Header />
      <div className="login">
        <div className="BolaBg BolaLeft"></div>
        <div className="container-login">
          <img src={logot} alt="" className="logo" />
          <div className="form-container">
            <form className="form" onSubmit={(e)=>Submit(e)}>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="tucorreo@dominio.com"
                value={user.email}
                onChange={(e)=>handle(e)}
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
                onChange={(e)=>handle(e)}
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
