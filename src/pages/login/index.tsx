import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div>
       <div className="framelogin">
        <section className="frame-wrapper">
          <div className="frame">
            <input className="frame-child" id="contraseñaInput" type="password" placeholder="Contraseña"/>
            <button className="ingresar-wrapper" id="btnLogin">
               <div className="ingresar">Ingresar</div>
             </button>
            <button className="btnolvidocontra" id="contraseñaOlvido">
              ¿Olvidaste tu contraseña?
             </button>
             <div className="frame1">
               <img className="tinder-1-icon" alt="" src="./img/barneyLogos/namePawBrown.png" />
             </div>
             <input className="frame-item" id="emailImput" type="text" placeholder="Email" />
          </div>
         </section>
        </div>
        <Link to="/home"/>
    </div>
  );
};
