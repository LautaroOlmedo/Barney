import React, { useState, FormEvent } from "react";
import "./login.css";
import { Link, useFormAction, useNavigate } from "react-router-dom";
import { useForm } from "./hooks/useForm";
import { data } from "../../mocks/userMockData";
import { HomePage } from "../home/Home";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  const validateUser = (email: string, password: string) => {
    return data.find(
      (user) => user.emails[0] === email && user.Password === password
    );
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación del correo y contraseña con los datos almacenados
    const user = validateUser(email, password);
    if (!user) {
      setError("Email o Contraseña incorrectos.");
      return;
    }

    navigate("/DogProfileSelect", { state: { user, dog: user.dogs[0] } });

    onResetForm();
    setError(null);
  };

  const onRegister = () => {
    // Redirige a la página de registro
    navigate("/register");
  };

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

            <button
              className="btnregister"
              id="Registrarse"
              onClick={onRegister}
            >
              Registrarse
            </button>

            <div className="frame1">
              <img
                className="tinder-1-icon"
                alt=""
                src="./img/barneyLogos/namePawBrown.png"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
