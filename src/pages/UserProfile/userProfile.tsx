import React from "react";
import { User } from "../../types/User";
<<<<<<< HEAD
import { UserCard } from "../../components/Carts/Dog/DogCart/UserCard";
import "./userProfile.css"
=======
import { UserCard } from "../../components/Carts/User/UserCard/UserCard";
import { NavBar } from "../../common/navBar/NavBar";
import "./userProfile.css";
>>>>>>> origin/development

export const UserProfilePage: React.FC<{ user: User }> = ({ user }) => {
  return (
    <body>
      <div>
<<<<<<< HEAD
        <UserCard user={user} />
      </div>

      <button>Actualizar información</button>
    </div>
=======
        <div className="titulo">
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
            <img className="img" src={user.image} alt="img"></img>
          </div>
        </div>
      </div>
    </body>
>>>>>>> origin/development
  );
};
