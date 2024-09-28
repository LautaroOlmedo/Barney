import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  dni: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dni: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): { [key: string]: string } => {
    const validationErrors: { [key: string]: string } = {};
    // Validar si todos los campos están completos
    if (!formData.firstName) validationErrors.firstName = "El campo 'Nombre' es obligatorio.";
    if (!formData.lastName) validationErrors.lastName = "El campo 'Apellido' es obligatorio.";
    if (!formData.dni) validationErrors.dni = "El campo 'DNI' es obligatorio.";
    if (!formData.birthDate) validationErrors.birthDate = "El campo 'Fecha de Nacimiento' es obligatorio."; 
    if (!formData.email) validationErrors.email = "El campo 'Email' es obligatorio.";
    if (!formData.phoneNumber) validationErrors.phoneNumber = "El campo 'Teléfono' es obligatorio.";
    if (!formData.password) validationErrors.password = "El campo 'Contraseña' es obligatorio.";
    if (!formData.confirmPassword) validationErrors.confirmPassword = "El campo 'Confirmar Contraseña' es obligatorio.";

    // Validar nombre
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      validationErrors.firstName = "Ingrese un nombre valido.";
    }

    // Validar apellido
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(formData.lastName)) {
      validationErrors.lastName = "Ingrese un Apellido valido.";
    }

    // Validar DNI
    if (!/^\d+$/.test(formData.dni)) {
      validationErrors.dni = "El DNI debe contener solo números sin espacios ni puntos.";
    }

    // Validar email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      validationErrors.email = "El email no es válido.";
    }

    // Validar teléfono
    if (!/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "El número de teléfono debe contener solo números.";
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      validationErrors.password = "Las contraseñas no coinciden.";
    }

    return validationErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    errors,
    setErrors,
    handleChange,
    validateForm,
  };
};

export default useForm;