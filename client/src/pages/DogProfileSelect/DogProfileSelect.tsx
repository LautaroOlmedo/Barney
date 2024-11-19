import React from "react";
import { Link } from "react-router-dom";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import "./DogProfileSelect.css";
import { data } from "../../mocks/userMockData";



// interface DogProfileSelectProps {
//     dogs: Dog[];
//     user: User;
// }

// export const DogProfileSelect: React.FC <{dog:Dog; user:User}> = ({ dog, user }) => {
// export const DogProfileSelect: React.FC<DogProfileSelectProps> = ({ dogs, user }) => {   
export const DogProfileSelect: React.FC = () => {
    const user = data[0]; 
    const dogs = user.dogs; 
return(
    <div className="chooseDog">
        <div className="main-div">
            <h1>Seleccione un perfil</h1>
            <div className="profilesDiv">
                {dogs?.map((dog, index) => (
                    <Link key={index} to={"/home"}>
                        <button className="btnProfile">
                            <img src={dog.images[0]} alt={`${dog.Name} profile`}  />
                            <span>{dog.Name}</span>
                        </button>
                    </Link>
                 ))}
                    
                        <button className="btnCreateProfile">
                            <img src="./img/crearPerfilImg/crearPerfil.png" alt='Crear Perfil' />
                            <span> Crear perfil </span>
                        </button>
                    
            </div>
        </div>
    </div>
);

}