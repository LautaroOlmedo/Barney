import React from "react";
import { User } from "../../types/User";
import { UserCard } from "../../components/Carts/Dog/DogCart/UserCard";
import "./userProfile.css"

export const UserProfilePage: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <div>
        <UserCard user={user} />
      </div>

      <button>Actualizar información</button>
    </div>
  );
};
