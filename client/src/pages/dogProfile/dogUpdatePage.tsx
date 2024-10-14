import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dog } from "../../types/Dog";
import { updateDog } from "../../mocks/dogMockData";
import "./dogUpdate.css";

export const DogUpdatePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dog = location.state.dog as Dog;

  const [dogname, setDogname] = useState(dog.Name);
  const [age, setAge] = useState(dog.Age);
  const [descript, setDescript] = useState(dog.Description);

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (dog) {
      const updatedDog = {
        ...dog,
        Name: dogname,
        Age: age,
        Description: descript,
      };

      updateDog(updatedDog); // Actualizar el usuario en la base de datos simulada
      navigate("/dogProfile", {
        state: { dog: updatedDog, user: location.state.user },
      });
      console.log("Updated Dog: ", updatedDog);
    }
  };

  return (
    <div className="update-container">
      <h1>Actualizar Perfil Perro</h1>
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
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSave}>
          <h3>Guardar datos</h3>
        </button>
      </form>
    </div>
  );
};
