import React from "react";
import "./home.css";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";
import { Matchs } from "../../components/Matchs/Matchs";

export const HomePage: React.FC<{ user: User; dog: Dog }> = ({ user, dog }) => {
  return (
    <div>
      <div className="matchs-section">
        <Matchs dog={user.dogs[0]} />
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

//  <div className="dog-profile-container">
//       {/* Renderizamos el componente Matchs a la izquierda */}
//       <div className="matches-section">
//         <Matchs dog={user.dogs[0]} />
//       </div>

//       {/* Contenido principal en el centro */}
// <div className="main-content">
//   <div className="main-image-section">
//     {/* Main image of the dog */}
//     <img src={dog.images[0]} alt={dog.Name} className="main-image" />

//     {/* Dog info (name and age) */}
//     <div className="dog-info">
//       <h2>
//         {dog.Name}, {dog.Age}
//       </h2>
//     </div>
//   </div>

//   <div className="button-container">
//     {/* Dislike button */}
//     <button className="dislike-btn">
//       <img src="/img/appLogos/ghosted.png" alt="Dislike" />
//     </button>

//     {/* Super-like button */}
//     <button className="superlike-btn">
//       <img src="/img/appLogos/superGuau.png" alt="Super-like" />
//     </button>

//     {/* Like button */}
//     <button className="like-btn">
//       <img src="/img/appLogos/guau.png" alt="Like" />
//     </button>
//   </div>
// </div>
//     </div>
