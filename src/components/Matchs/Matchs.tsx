import React from "react";
import { Dog } from "../../types/Dog";
import "./matchs.css";

export const Matchs: React.FC<{ dogs: Dog[] }> = ({ dogs }) => {
  return (
    <div className="matches-grid">
      {dogs.map((dog) =>
        dog.images.map((image, imgIndex) => (
          <div key={`${dog.ID}-${imgIndex}`} className="match-image">
            <img src={image} alt={`${dog.Name} ${imgIndex + 1}`} />
            <p className="dog-name">{dog.Name}</p>{" "}
            {/* Nombre debajo de la imagen */}
          </div>
        ))
      )}
    </div>
  );
};
