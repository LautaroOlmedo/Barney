import React from "react";
import { Dog } from "../../types/Dog";
import "./matchs.css";

export const Matchs: React.FC<{ dog: Dog }> = ({ dog }) => {
  return (
    <div className="matches-grid">
      {dog.images.map((image, imgIndex) => (
        <div key={`${dog.ID}-${imgIndex}`} className="match-image">
          <img src={image} alt={`${dog.Name} ${imgIndex + 1}`} />
          <div className="dog-info">
            <p>{dog.Name}</p>{" "}
            {/* Nombre debajo de la imagen con el mismo estilo que en Home */}
          </div>
        </div>
      ))}
    </div>
  );
};