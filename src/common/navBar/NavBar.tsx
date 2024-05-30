import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
// import { Dog } from "../../types/Dog";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={"/home"}>
          <img src="./img/barneyLogos/pawFlameBrown.png" alt="" />
        </Link>
      </div>

      <div>
        <Link to={"/home"} className="navbar-link">
          Inicio
        </Link>
      </div>
      <div>
        <Link to={"/userProfile" } className="navbar-link">
          Mi Perfil
         </Link>
      </div>
      <div>
        <Link to={"/dogProfile"} className="navbar-link">
          Mi Perro
        </Link>
      </div>

      {/* <ul>
        <li className="dropdown">
          <a href="" className="dropbtn">Perfiles</a>
          <div className="dropdown-content">
            <a href="">Link 1</a>
            <a href="">Link 2</a>

          </div>
        </li>
      </ul> */}
      <div>
        <button className="navbar-button">
          Cerrar Sesion
        </button>
      </div>    
    </nav>
  );
};
