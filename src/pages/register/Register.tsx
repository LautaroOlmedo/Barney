import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import"./register.css";

export const RegisterPage = () => {
    const navigate = useNavigate(); // Usar useNavigate para la navegación

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      dni: "",
      birthDate: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleRegister = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        // Si no hay errores, redirigir al login
        navigate("/login");
      } else {
        setErrors(validationErrors);
      }
    };
  
    const validateForm = () => {
      const errors = {};
      // Validar si todos los campos están completos
      if (!formData.firstName) errors.firstName = "El campo 'Nombre' es obligatorio.";
      if (!formData.lastName) errors.lastName = "El campo 'Apellido' es obligatorio.";
      if (!formData.dni) errors.dni = "El campo 'DNI' es obligatorio.";
      if (!formData.birthDate) errors.birthDate = "El campo 'Fecha de Nacimiento' es obligatorio."; 
      if (!formData.email) errors.email = "El campo 'Email' es obligatorio.";
      if (!formData.phoneNumber) errors.phoneNumber = "El campo 'Teléfono' es obligatorio.";
      if (!formData.password) errors.password = "El campo 'Contraseña' es obligatorio.";
      if (!formData.confirmPassword) errors.confirmPassword = "El campo 'Confirmar Contraseña' es obligatorio.";

    
      // Validar nombre (una palabra, sin números ni espacios)
      if (!/^[A-Za-z]+$/.test(formData.firstName)) {
        errors.firstName = "Ingrese un nombre valido.";
      }
  
      // Validar apellido (solo letras)
      if (!/^[A-Za-zÀ-ÿ\s]+$/.test(formData.lastName)) {
        errors.lastName = "Ingrese un Apellido valido.";
      }
  
      // Validar DNI (solo números sin espacios ni puntos)
      if (!/^\d+$/.test(formData.dni)) {
        errors.dni = "El DNI debe contener solo números sin espacios ni puntos.";
      }
  
      // Validar email
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        errors.email = "El email no es válido.";
      }
  
      // Validar teléfono (solo números sin espacios ni símbolos)
      if (!/^\d+$/.test(formData.phoneNumber)) {
        errors.phoneNumber = "El número de teléfono debe contener solo números.";
      }
  
      // Validar que las contraseñas coincidan
      if (formData.password !== formData.confirmPassword) {
        errors.password = "Las contraseñas no coinciden.";
      }
  
      return errors;
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
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
              {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
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
              
              <button type="submit" className="btnRegister" id="btnRegister" onClick={handleRegister}>
                 <div className="ingresar">Registrarse</div>
              </button>


            </form>
          </section>
        </div>
      </div>
    );
  };
