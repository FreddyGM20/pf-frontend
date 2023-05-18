import * as React from 'react';
import "../styles/navBar.scss"
//import images
import logoH  from "../assets/Logo con letras.png"
import menu from "../assets/icon_menu.svg";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();
  function Logout(){
    localStorage.clear()
    navigate('/login')
  }
  function handleClick () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <>
      <header>
        <nav className='container'>
          <div className="logoNavBar">
            <img className="ldesktop" src={logoH} alt="" onClick={()=> navigate('/medic')} />
          </div>
          <div className="buttonsNavBar">
          <img
              className="lmobile"
              onClick={() => handleClick()}
              src={menu}
              alt=""
            />
            <ol>
              <Link to={'/estadistica'}>Estadistica<div className="separe"></div></Link>
              <Link to={'/medic'}>Diagnosticos<div className="separe"></div></Link>
            </ol>
            <button type='button' className='btn btn-primary' onClick={()=> Logout()}>Cerrar sesión</button>
          </div>
        </nav>
        <div id="menu" className="mobile-menu">
        <ul>
          <li>
            <a onClick={() => navigate("/estadistica")} className="title">
              Estadistica
            </a>
          </li>

          <li>
            <a onClick={() => navigate("/medic")} className="title">
              Diagnostico
            </a>
          </li>

          <li>
            <a onClick={()=> Logout()} className="title">
              Cerrar sesion
            </a>
          </li>
        </ul>
      </div>
      </header>
    </>
  );
}
export default NavBar;
