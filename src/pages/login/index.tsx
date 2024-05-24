import React, { useState, FormEvent } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "./hooks/useForm";
const initialForm = {
  email:"",
  password:"",
};
const validationsForm = (form) => {
  let errors = {};

  if(!form.email.trim()){
    errors.email = "El campo 'email' es requerido";
  }
  if(!form.password.trim()){
    errors.password = "El campo 'email' es requerido";
  }

  return errors;
};

export const LoginPage = () => {

  const {        
        form, 
        errors, 
        loading, 
        response, 
        handleBlur, 
        handleChange, 
        handleSubmit,
        } = useForm(initialForm, validationsForm);

  return (
    <div>
      <form onSubmit={handleSubmit}>

       <div className="framelogin">
        <section className="frame-wrapper">
          <div className="frame">
            <input 
              className="frame-item" 
              id="emailImput" 
              type="email" 
              placeholder="Email" 
              onBlur={handleBlur} 
              onChange={handleChange} 
              value={form.email} 
              required
            /> 
            {errors.email && <p>{errors.email}</p>}
            <input 
              className="frame-child" 
              id="contraseñaInput" 
              type="password" 
              placeholder="Contraseña" 
              onBlur={handleBlur} 
              onChange={handleChange} 
              value={form.password} 
              required
            /> 
            {errors.password && <p>{errors.password}</p>}
            <input type="submit" className="ingresar-wrapper" id="btnLogin"> 
              <div className="ingresar">Ingresar</div>
            </input> 

            <button className="btnolvidocontra" id="contraseñaOlvido"> ¿Olvidaste tu contraseña? </button> 

            <div className="frame1">
              <img className="tinder-1-icon" alt="" src="./img/barneyLogos/namePawBrown.png" />  
            </div>

            
          </div>
         </section>
        </div>

      </form>
    </div>
  );
};
