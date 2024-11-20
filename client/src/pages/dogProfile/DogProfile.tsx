import React, {useEffect, useState} from "react";
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

  // Cargar el perfil del perro desde localStorage o usar el perfil pasado por 'location.state'
  const[dog, setDog] = useState<Dog>(
    ()=>
    (location.state?.dog as Dog) ||
    JSON.parse(localStorage.getItem("selectedDog") as string) ||
    dogData[0]
  );

  useEffect(() => {
    if (location.state?.dog){
      localStorage.setItem("selectedDog", JSON.stringify(location.state.dog));
    }
  })
  
  // const dog = (location.state?.dog as Dog) || dogData[0];
  const user = (location.state?.user as User) || data[0];

  const handleUpdateDogProfile = () => {
    navigate("/updateDogProfile", { state: { dog } });
  };

  return (
    <div>
      <div className="titulo-dog-profile">
        <h1>Perfil</h1>
      </div>
      <div className="container-dog-profile">
        <div className="perfil-dog-profile">
          <div className="dogCard-dog-profile">
            <DogCart dog={dog} user={user} />
          </div>
          <button className="btn-dog-profile" onClick={handleUpdateDogProfile}>
            <h3>Actualizar información</h3>
          </button>
        </div>
        <div className="imgPerro-dog-profile">
          <div className="img-wrapper">
            <img className="img-dog-profile" src={dog.images[0]} alt="img" />
            <div className="overlay-dog-profile">
              <h1 className="nombre-dog-profile">{dog.Name},</h1>
              <span className="años-dog-profile">{dog.Age}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
