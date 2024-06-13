import React from "react";
import "./home.css";
// --------------
import { dogData } from "../../mocks/dogMockData";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { Matchs } from "../../components/Matchs/Matchs";

export const HomePage: React.FC<{ user: User; dog: Dog }> = ({ user, dog }) => {
  return (
    <div className="card-container">
      {/* <div>
        <Matchs dog={dog} />
      </div> */}

      <button className="previous-btn">{"<-"}</button>

      {dog.images.map((image, index) => (
        <div key={index}>
          <h1>{dog.Name}</h1>
          <div className="card">
            <img src={image} alt={`Dog ${index + 1}`} />
          </div>
        </div>
      ))}
      <button className="next-btn">{"->"}</button>
      <div className="button-container">
        <button className="like-btn">
          <img src={"/img/appLogos/ghosted.png"} alt="Like" />
        </button>
        <button className="superlike-btn">
          <img src={"/img/appLogos/superGuau.png"} alt="Superlike" />
        </button>
        <button className="dislike-btn">
          <img src={"/img/appLogos/guau.png"} alt="Dislike" />
        </button>
      </div>
    </div>
  );
};
