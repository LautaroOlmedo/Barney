import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { UserCard } from "../../components/Carts/User/UserCard/UserCard";
import { data } from "../../mocks/userMockData";
import "./userProfile.css";

export const UserProfilePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = (location.state?.user as User) || data[0]; // Asignar data[0] si location.state.user es null o undefined

  const handleUpdateProfile = () => {
    navigate("/updateProfile", { state: { user } });
  };

  return (
    <div>
      <div className="titulo-user-profile">
        <h1>PERFIL</h1>
      </div>
      <div className="container-user-profile">
        <div className="perfil-user-profile">
          <div className="userCard-user-profile">
            <UserCard user={user} />
          </div>
          <button className="btn-user-profile" onClick={handleUpdateProfile}>
            <h3>Actualizar información</h3>
          </button>
        </div>
        <div className="imgPerro-user-profile">
          <div className="img-wrapper">
            <img className="img-user-profile" src={user.image} alt="img" />
            <div className="overlay-user-profile">
              <h1 className="nombre-user-profile">{user.Username},</h1>
              <span className="años-user-profile">{user.Person.age}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="initial-scale=1, width=device-width" />

//     <link rel="stylesheet" href="./global.css" />
//     <link rel="stylesheet" href="./index.css" />
//     <link
//       rel="stylesheet"
//       href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap"
//     />
//     <link
//       rel="stylesheet"
//       href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
//     />
//     <link
//       rel="stylesheet"
//       href="https://fonts.googleapis.com/css2?family=ES Build TRIAL:wght@500&display=swap"
//     />
//   </head>
//   <body>
//     <div class="desktop-8">
//       <img class="tinder-1-icon" alt="" src="./public/tinder-1@2x.png" />

//       <div class="frameinfoperro-wrapper">
//         <div class="frameinfoperro">
//           <div class="descripcion">
//             <h1 class="nombre">Barni,</h1>
//             <div class="aos">3</div>
//           </div>
//         </div>
//       </div>
//       <div class="rectangle-parent">
//         <div class="group-child"></div>
//         <div class="perfil">Perfil</div>
//         <button class="btnvolverhome" id="btnMensaes">
//           <img
//             class="basilcaret-down-solid-icon"
//             alt=""
//             src="./public/basilcaretdownsolid@2x.png"
//           />
//         </button>
//       </div>
//     </div>
//   </body>
// </html>
