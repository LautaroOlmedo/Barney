import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import Premium from "../../components/Premium/Premium";
// import { Dog } from "../../types/Dog";

export const NavBar: React.FC<{}> = ({}) => {

  const [isPremiumOpen, setPremiumOpen] = useState(false); // Estado para controlar la ventana emergente

  const openPremium = () => {
    setPremiumOpen(true); // Mostrar la ventana emergente
  };

  const closePremium = () => {
    setPremiumOpen(false); // Cerrar la ventana emergente
  };

  return (
    <nav >
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
            <Link to={"/userProfile" } className="navbar-link">
              Mi Perfil
            </Link>
          </div>
          <div>
            <Link to={"/dogProfile"} className="navbar-link">
              Mi Perro
            </Link>
          </div>
          <div>
            <Link to={"/dogProfileSelect"} className="navbar-link">
              Cambiar Perro
            </Link>
          </div>
          <div className="navbar-buttons">
            <button className="premium-button" onClick={openPremium}>
              Premium
            </button>
            <button className="navbar-button">
              Cerrar Sesion
            </button>
          </div>
      </div>  
      {isPremiumOpen && <Premium onClose={closePremium} />}
    </nav>
  );
};
