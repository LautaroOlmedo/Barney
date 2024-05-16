import React from "react";
import { User } from "../../types/User";
import { UserCard } from "../../components/Carts/Dog/DogCart/UserCard";
import { NavBar } from "../../common/navBar/NavBar";
import "./userProfile.css";

export const UserProfilePage: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <div className="navBar">
        <NavBar />
        <h1>PERFIL</h1>
      </div>
      <div className="container">
        <div className="perfil">
          <div className="userCard">
            <UserCard user={user} />
          </div>
          <button className="btn">Actualizar información</button>
        </div>
        <div className="imgPerro">
          <img className="img" src="./img/appLogos/image.png" alt="img"></img>
        </div>
      </div>
    </div>
  );
};
