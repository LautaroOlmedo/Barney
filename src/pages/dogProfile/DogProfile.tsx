import React from "react";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { DogCart } from "../../components/Carts/Dog/DogCart/DogCart";
import "./DogProfile.css";

export const DogProfilePage: React.FC<{ dog: Dog; user: User }> = ({
  dog,
  user,
}) => {
  return (
    <div>
      <div className="tittle">
        <h1>{dog.Name}</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="dogCard">
            <DogCart dog={dog} user={user} />
          </div>
           <button className="btn">Actualizar información</button>
        </div>
         <div className="imgPerro">
           <img className="img" src={dog.images[0]} alt="img"></img>
         </div>
       </div>
   </div>
  );
};
