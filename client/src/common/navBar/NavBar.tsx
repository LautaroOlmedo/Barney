import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Premium from "../../components/Premium/Premium";
import { useLocation } from "react-router-dom";
// import { Dog } from "../../types/Dog";

export const NavBar: React.FC<{}> = ({}) => {
  const [isPremiumOpen, setPremiumOpen] = useState(false); // Estado para controlar la ventana emergente

  const openPremium = () => {
    setPremiumOpen(true); // Mostrar la ventana emergente
  };

  const closePremium = () => {
    setPremiumOpen(false); // Cerrar la ventana emergente
  };

  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  if (location.pathname === "/register") {
    return null;
  }

  return (
    <nav>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className="navbar">
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
          <Link to={"/userProfile"} className="navbar-link">
            Mi Perfil
          </Link>
        </div>
        <div>
          <Link to={"/dogProfile"} className="navbar-link">
            Mi Perro
          </Link>
        </div>
        <div>
          <Link to={"/messages"} className="navbar-link">
            Mensajes
          </Link>
        </div>
        <div>
          <Link to={"/dogProfileSelect"} className="navbar-link">
            Seleccionar Perfil
          </Link>
        </div>

        <div className="navbar-buttons">
          <button className="premium-button" onClick={openPremium}>
            Premium
          </button>
          <Link to={"/login"} >
            <button className="navbar-button">Cerrar Sesion</button>
          </Link>
        </div>
      </div>
      {isPremiumOpen && <Premium onClose={closePremium} />}
    </nav>
  );
};
