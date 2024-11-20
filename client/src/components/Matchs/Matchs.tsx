import React from "react";
import "./matchs.css";
import { Dog } from "../../types/Dog";

export const Matchs: React.FC<{ dog: Dog }> = ({ dog }) => {
  return (
    <div className="matches-grid">
      {dog.images.map((image, imgIndex) => (
        <div key={`${dog.ID}-${imgIndex}`} className="match-image">
          <img src={image} alt={`${dog.Name} ${imgIndex + 1}`} />
          <div className="dog-info">
            <p>{dog.Name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
