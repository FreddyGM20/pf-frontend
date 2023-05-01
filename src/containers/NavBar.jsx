import * as React from 'react';
import "../styles/navBar.scss"
//import images
import logoH  from "../assets/Logo con letras.png"
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className='container'>
          <div className="logoNavBar">
            <img src={logoH} alt="" onClick={()=> navigate('/')} />
          </div>
          <div className="buttonsNavBar">
            <ol>
              <Link to={'/'}>Inicio<div className="separe"></div></Link>
              <Link to={'/chatbot'}>ChatBot<div className="separe"></div></Link>
            </ol>
            <button type='button' className='btn btn-primary' onClick={()=> navigate('/login')}>¡Soy medico!</button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
