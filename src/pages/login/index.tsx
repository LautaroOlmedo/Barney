import React, { useState, FormEvent } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
/*import users from "./personMockData.json"; 

type User = {
  Person: {
    ID: string;
    Name: string;
    Lastname: string;
    age: number;
    DNI: string;
  };
  Username: string;
  Password: string;
  emails: string[];
  phones: string[];
};*/

export const LoginPage = () => {
  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find((user: User) => user.emails.includes(email));
    if (user && user.Password === password) {
      navigate("/home");  // Navegar a la página de inicio en caso de éxito
    } else {
      setError("El usuario o la contraseña no son correctos."); // Mostrar error si las credenciales no coinciden
    }
  };
  */
  return (
    <div>
       <div className="framelogin">
        <section className="frame-wrapper">
          <div className="frame">
            <input className="frame-child" id="contraseñaInput" type="password" placeholder="Contraseña" /*value={password} onChange={(e) => setPassword(e.target.value)}*//>
            <button className="ingresar-wrapper" id="btnLogin">
               <div className="ingresar">Ingresar</div>
             </button>
            <button className="btnolvidocontra" id="contraseñaOlvido">
              ¿Olvidaste tu contraseña?
             </button>
             <div className="frame1">
               <img className="tinder-1-icon" alt="" src="./img/barneyLogos/namePawBrown.png" />
             </div>
             <input className="frame-item" id="emailImput" type="text" placeholder="Email" /*value={email} onChange={(e) => setEmail(e.target.value)}*//>
          </div>
         </section>
        </div>
    </div>
  );
};
