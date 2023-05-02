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
            <img src={logoH} alt="" onClick={()=> navigate('/medic')} />
          </div>
          <div className="buttonsNavBar">
            <ol>
              <Link to={'/estadistica'}>Estadistica<div className="separe"></div></Link>
              <Link to={'/medic'}>Diagnosticos<div className="separe"></div></Link>
            </ol>
            <button type='button' className='btn btn-primary' onClick={()=> navigate('/login')}>Cerrar sesión</button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
