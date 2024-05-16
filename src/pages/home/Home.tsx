import React from "react";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";

export const HomePage = () => {
  // traer dogs
  const addToLikes = (dog: any) => {};

  function dog(value: Dog, index: number, array: Dog[]): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1>HOME</h1>

      <div>
        {/* {fakeDataDogs.length ? (
          fakeDataDogs.map((dog: Dog, index) => <p></p>)
        ) : (
          <p>not data to display</p>
        )} */}
      </div>

      <button onClick={(e) => addToLikes(e)}>Super Guau</button>
      <button>Guau</button>
      <button>Skip</button>
    </div>
  );
};
