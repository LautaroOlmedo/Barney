import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <body>
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
                <img className="tinder-1-icon" alt="" src="./public/tinder-1@2x.png" />
              </div>
              <input className="frame-item" id="emailImput" type="text" />
            </div>
          </section>
         </div>
       </body>
    </div>
  );
};
