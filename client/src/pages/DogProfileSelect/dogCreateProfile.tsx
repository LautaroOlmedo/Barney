import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dog } from "../../types/Dog";
import { addDog } from "../../mocks/dogMockData";
import "./dogCreateProfile.css";

export const CreateProfileDog: React.FC = () => {
    const navigate = useNavigate();
  
    // Estados iniciales para el formulario
    const [dogname, setDogname] = useState("");
    const [age, setAge] = useState<number | undefined>(undefined);
    const [descript, setDescript] = useState("");
  
    const handleSave = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
  
      // Validar que los campos estén llenos
      if (!dogname || age === undefined || !descript) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Crear un nuevo objeto perro
      const newDog: Dog = {
        ID: Date.now().toString(), // Generar un ID único
        Name: dogname,
        Age: age,
        Description: descript,
        images: ["../img/dogProfileImg/newDogProfile"],
        matches: [],
        likes: [],
      };
  
      // Simular el guardado en la base de datos
      addDog(newDog);
  
      // Navegar a la página del perfil del perro recién creado
      navigate("/dogProfile", {
        state: { dog: newDog },
      });
  
      console.log("Nuevo Perro Creado: ", newDog);
    };
  
    return (
      <div className="create-container">
        <h1>Crear Perfil de Perro</h1>
        <form>
          <div className="form-group">
            <label>Nombre del Perro</label>
            <input
              type="text"
              value={dogname}
              onChange={(e) => setDogname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Edad</label>
            <input
              type="number"
              value={age ?? ""}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              type="text"
              value={descript}
              onChange={(e) => setDescript(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleSave}>
            <h3>Guardar</h3>
          </button>
        </form>
      </div>
    );
  };