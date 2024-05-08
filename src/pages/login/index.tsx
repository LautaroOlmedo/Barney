import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div>
       <div className="framelogin">
        <section className="frame-wrapper">
          <div className="frame">
            <input className="frame-child" id="contraseñaInput" type="text" />
            <button className="ingresar-wrapper" id="btnLogin">
               <div className="ingresar">Ingresar</div>
             </button>
            <button className="btnolvidocontra" id="contraseñaOlvido">
              ¿Olvidaste tu contraseña?
             </button>
             <div className="frame1">
               <img
                 className="sin-ttulo-2marron-1"
                 alt=""
                 src="./public/sin-ttulo2marron-1@2x.png"
                />
               <img className="tinder-1-icon" alt="" src="./public/img/nameYellow.png" />
             </div>
             <input className="frame-item" id="emailImput" type="text" />
          </div>
         </section>
        </div>
        <Link to="/home"/>
    </div>
  );
};
