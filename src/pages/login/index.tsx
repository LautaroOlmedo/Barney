import React, { useState, FormEvent } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "./hooks/useForm";

const initialForm = {
  email:"",
  password:"",
};


export interface Errors {
  email: string;
  password: string;
}

const validationsForm = (form: any) => {
  let errors: Errors = {
    email: "",
    password: ""
  };

  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!form.email.trim()){
    errors.email = "El campo 'Email' es obligatorio";
  }else if(!regexEmail.test(form.email.trim())){
    errors.email = "El campo 'Email' es incorrecto";
  }

  if(!form.password.trim()){
    errors.password = "El campo 'Contraseña' es obligatorio";
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
            <button type="submit" className="ingresar-wrapper" id="btnLogin"> 
              <div className="ingresar">Ingresar</div>
            </button> 

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