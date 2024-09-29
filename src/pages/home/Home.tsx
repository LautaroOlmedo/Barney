import React from "react";
import "./home.css";
// --------------
import { dogData } from "../../mocks/dogMockData";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { Matchs } from "../../components/Matchs/Matchs";

export const HomePage: React.FC<{ user: User; dog: Dog }> = ({ user, dog }) => {
  return (
    <div className="dog-profile-container">
      <div className="gallery-container">
        <div className="matches-section">
          {dog.images.map((image, index) => (
            <div key={index} className="match-image">
              <img src={image} alt={`${dog.Name} match ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="main-image-section">
          {/* Main image of the dog */}
          <img src={dog.images[0]} alt={dog.Name} className="main-image" />

          {/* Dog info (name and age) */}
          <div className="dog-info">
            <h2>
              {dog.Name}, {dog.Age}
            </h2>
          </div>
        </div>

        <div className="button-container">
          {/* Dislike button */}
          <button className="dislike-btn">
            <img src="/img/appLogos/ghosted.png" alt="Dislike" />
          </button>

          {/* Super-like button */}
          <button className="superlike-btn">
            <img src="/img/appLogos/superGuau.png" alt="Super-like" />
          </button>

          {/* Like button */}
          <button className="like-btn">
            <img src="/img/appLogos/guau.png" alt="Like" />
          </button>
        </div>
      </div>
    </div>
  );
};
