import React from "react";
import"./register.css";

export const RegisterPage = () => {

    return (
      <div>
        <div className="frameregister">
          <section className="registerwrapper">
            <form className="registerCamp">
                <div className="framelogo">
                    <img
                    className="logo"
                    alt=""
                    src="./img/barneyLogos/namePawBrown.png" />
                </div>
              <input
                name="firstName"
                className="firstName"
                id="firstName"
                type="text"
                placeholder="Nombre"
                required
                autoComplete="off"
              />
              <input
                name="lastName"
                className="lastName"
                id="lastName"
                type="text"
                placeholder="Apellido"
                required
                autoComplete="off"
              />
              <input
                name="dni"
                className="dni"
                id="dni"
                type="text"
                placeholder="DNI"
                required
                autoComplete="off"
              />
              <input
                name="birthDate"
                className="birthDate"
                id="birthDate"
                type="date"
                placeholder="Fecha de Nacimiento"
                required
                autoComplete="off"
              />
              <input
                name="email"
                className="email"
                id="email"
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
              />
              <input
                name="confirmEmail"
                className="confirmEmail"
                id="confirmEmail"
                type="email"
                placeholder="Confirmar Email"
                required
                autoComplete="off"
              />
              <input
                className="password"
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
                required
                autoComplete="off"
              />
              <input
                className="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirmar Contraseña"
                required
                autoComplete="off"
              />
              
              <button type="submit" className="btnRegister" id="btnRegister">
                 <div className="ingresar">Registrar</div>
              </button>


            </form>
          </section>
        </div>
      </div>
    );
  };
