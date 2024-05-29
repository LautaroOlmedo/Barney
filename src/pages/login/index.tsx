import React, { useState, FormEvent } from "react";
import "./login.css";
import { useFormAction, useNavigate } from "react-router-dom";
import { useForm } from "./hooks/useForm";
import { data } from "../mocks/userMockData";


export const LoginPage = () => {

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {email, password, onInputChange, onResetForm} =
    useForm({
      email: "",
      password: "",
  });

  const validateUser = (email: string, password: string) => {
    return data.find(
      user => user.emails === email && user.Password === password
    );
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación del correo y contraseña contra los datos almacenados
    const user = validateUser(email, password);
    if (!user) {
      setError("Correo electrónico o contraseña incorrectos.");
      return;
    }
    navigate("/home", {
      replace: true,
      state: {
        logged: true,
      }
    })
    onResetForm();
    setError(null);

  }

  return (
    <div>
       <div className="framelogin">
        <section className="frame-wrapper">
          <form className="frame" onSubmit={onLogin}>
            <input
             name="email"
             className="frame-item"
             id="email"
             type="email"
             placeholder="Email"
             value={email}
             onChange={onInputChange}
             required
             autoComplete="off"
            />
            <input
            className="frame-child"
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={onInputChange}
            placeholder="Contraseña"
            required
            autoComplete="off"
            />
            <button type="submit" className="ingresar-wrapper" id="btnLogin">
               <div className="ingresar">Ingresar</div>
            </button>

            {error && <div className="error-message">{error}</div>}

            <button className="btnolvidocontra" id="contraseñaOlvido">
            ¿Olvidaste tu contraseña?
            </button>

             <div className="frame1">
               <img
               className="tinder-1-icon"
               alt=""
               src="./img/barneyLogos/namePawBrown.png" />
             </div>

          </form>
         </section>
        </div>
    </div>
  );

};