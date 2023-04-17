import React from 'react'
import '../styles/Login.scss'
import { useNavigate } from "react-router-dom";

const users =[{
  email:"freddy@gmail.com",
  contraseña:"123456",
  isAdmin:false
},
{
  email:"admin@gmail.com",
  contraseña:"123456",
  isAdmin:true
}]

const Login = () => {
  const navigate = useNavigate();

  return (
<div className="login">
  <div className="form-container">
    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
    <form action="" className="form">
      <label htmlFor="email" className="label">Email address</label>
      <input type="text" id="email" placeholder="tucorreo@dominio.com" className="input input-email" />
      <label htmlFor="password" className="label">Password</label>
      <input type="password" id="password" placeholder="********" className="input input-password" />
      <button value="Iniciar sesion" className="primary-button login-button" onClick={()=>navigate("/home")}>Iniciar sesión</button>
      <a href="/">Forgot my password</a>
    </form>
    <button className="secundary-button  signup-button">Sign up</button>
  </div>
</div>

  )
}

export default Login