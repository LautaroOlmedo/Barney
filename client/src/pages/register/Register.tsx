import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "./hooks/useForm";
import "./register.css";

export const RegisterPage = () => {
  const navigate = useNavigate(); // Usar useNavigate para la navegación

  const { formData, errors, setErrors, handleChange, validateForm } = useForm();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores, redirigir al login
      navigate("/login");
    } else {
      // Establecer errores en el estado
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div className="frameregister">
        <section className="registerwrapper">
          <form className="registerCamp" onSubmit={handleRegister}>
            <div className="framelogo">
              <img
                className="logo"
                alt=""
                src="./img/barneyLogos/namePawBrown.png"
              />
            </div>
            <input
              name="firstName"
              className="firstName"
              id="firstName"
              type="text"
              placeholder="Nombre"
              required
              autoComplete="off"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              name="lastName"
              className="lastName"
              id="lastName"
              type="text"
              placeholder="Apellido"
              required
              autoComplete="off"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              name="dni"
              className="dni"
              id="dni"
              type="text"
              placeholder="DNI"
              required
              autoComplete="off"
              value={formData.dni}
              onChange={handleChange}
            />
            {errors.dni && <p className="error">{errors.dni}</p>}
            <input
              name="birthDate"
              className="birthDate"
              id="birthDate"
              type="date"
              placeholder="Fecha de Nacimiento"
              required
              autoComplete="off"
              value={formData.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && <p className="error">{errors.birthDate}</p>}
            <input
              name="email"
              className="email"
              id="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              name="phoneNumber"
              className="phoneNumber"
              id="phoneNumber"
              type="text"
              placeholder="Numero de Telefono"
              required
              autoComplete="off"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
            <input
              className="password"
              name="password"
              id="password"
              type="password"
              placeholder="Contraseña"
              required
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirmar Contraseña"
              required
              autoComplete="off"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button
              type="submit"
              className="btnRegister"
              id="btnRegister"
              onClick={handleRegister}
            >
              <div className="ingresar">Registrarse</div>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
