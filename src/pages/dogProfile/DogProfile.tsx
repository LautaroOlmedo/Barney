import React from "react";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { DogCart } from "../../components/Carts/Dog/DogCart/DogCart";

export const DogProfilePage: React.FC<{ dog: Dog; user: User }> = ({
  dog,
  user,
}) => {
  return (
    <div>
      {
        <div>
          <DogCart dog={dog} user={user} />
        </div>
      }
    </div>
  );
};
