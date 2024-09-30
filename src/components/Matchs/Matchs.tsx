import React from "react";
import { Dog } from "../../types/Dog";
import "./matchs.css";

export const Matchs: React.FC<{ dog: Dog }> = ({ dog }) => {
  return (
    <div className="matches-grid">
      {dog.images.map((image, imgIndex) => (
        <div key={imgIndex} className="match-image">
          <img src={image} alt={`${dog.Name} ${imgIndex + 1}`} />
          <p className="dog-name">{dog.Name}</p>{" "}
          {/* Nombre debajo de la imagen */}
        </div>
      ))}
    </div>
  );
};
