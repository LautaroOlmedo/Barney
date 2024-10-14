import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { dogData } from "../../mocks/dogMockData";
import { DogCart } from "../../components/Carts/Dog/DogCart/DogCart";
import "./DogProfile.css";
import { data } from "../../mocks/userMockData";

export const DogProfilePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dog = (location.state?.dog as Dog) || dogData[0];
  const user = (location.state?.user as User) || data[0];

  const handleUpdateDogProfile = () => {
    navigate("/updateDogProfile", { state: { dog } });
  };

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
          <button className="btn" onClick={handleUpdateDogProfile}>
            <h3>Actualizar información</h3>
          </button>
        </div>
        <div className="imgPerro">
          <img className="img" src={dog.images[0]} alt="img"></img>
        </div>
      </div>
    </div>
  );
};
