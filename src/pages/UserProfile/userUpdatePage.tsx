import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { updateUser } from "../../mocks/userMockData";
import "./userUpdate.css";

export const UserUpdatePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.user as User;

  const [username, setUsername] = useState(user.Username);
  const [email, setEmail] = useState(user.emails[0]);
  const [phone, setPhone] = useState(user.phones[0]);

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (user) {
      const updatedUser = {
        ...user,
        Username: username,
        emails: [email],
        phones: [phone],
      };

      updateUser(updatedUser); // Actualizar el usuario en la base de datos simulada
      navigate("/userProfile", { state: { user: updatedUser } });
      console.log("Updated User: ", updatedUser);
    }
  };

  return (
    <div className="update-container">
      <h1>Actualizar Perfil</h1>
      <form>
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSave}>
          <h3>Guardar datos</h3>
        </button>
      </form>
    </div>
  );
};

// useEffect(() => {
//   if (user) {
//     setUsername(user.Username);
//     setEmail(user.emails[0]);
//     setPhone(user.phones[0]);
//   }
// }, [user]);

// user.Username = username;
// user.emails[0] = email;
// user.phones[0] = phone;

// const updatedData = data.map((userData) => {
//   if (userData.Person.ID === user.Person.ID) {
//     return user;
//   }

//   return userData;
// });
// localStorage.setItem("userData", JSON.stringify(updatedData));
