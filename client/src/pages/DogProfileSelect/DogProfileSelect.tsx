import React from "react";
import {useNavigate } from "react-router-dom";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import "./DogProfileSelect.css";
import { data } from "../../mocks/userMockData";

export const DogProfileSelect: React.FC = () => {
    const user = data[0]; 
    const dogs = user.dogs; 
    const navigate = useNavigate(); //hook para manejar la navegacion

    const handleCreateProfile = () => {
        navigate("/dogCreateProfile"); //Navegar a la pagina de creacion de perfil
    }

    const handleSelectProfile = (dog: Dog) =>{
        navigate("/dogProfile", {
            state: { dog }, //pasar el objeto 'dog' al estado
        });
    }

return(
    <div className="chooseDog">
        <div className="main-div">
            <h1>Seleccione un perfil</h1>
            <div className="profilesDiv">
                {dogs?.map((dog, index) => (
                        <button key={index} className="btnProfile" onClick = {() => handleSelectProfile(dog)}>              
                            <img src={dog.images[0]} alt={`${dog.Name} profile`}  />
                            <span>{dog.Name}</span>
                        </button>
                 ))}
                        <button className="btnCreateProfile" onClick={handleCreateProfile}>
                            <img src="./img/createProfileImg/createProfile.png" alt='Crear Perfil' />
                            <span> Crear perfil </span>
                        </button>
            </div>
        </div>
    </div>
);

}