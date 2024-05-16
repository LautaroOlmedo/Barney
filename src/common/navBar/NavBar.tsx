import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar: React.FC<{}> = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-item">
          <Link to={"/profile/:id"} className="navbar-link">
            Terminos y condiciones
          </Link>
        </div>
        <div>
          <Link to={"/mypets/:id" } className="navbar-link">
            ¿Quienes somos?
          </Link>
        </div>
      </div>
    </nav>
  );
};
