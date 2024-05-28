import { User } from "../../../../types/User";
import "./UserCard.css";
export const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="profile">
      {/* <div>
        <img className="image" src={user.image} alt="" />
      </div> */}
      <p className="bold">Nombre:</p> <p>{user.Person.Name}</p>
      <p className="bold">Apellido:</p> <p>{user.Person.Lastname}</p>
      <p className="bold">Edad:</p> <p>{user.Person.age}</p>
      <p className="bold">DNI:</p> <p>{user.Person.DNI}</p>
      <p className="bold">Nombre de Usuario:</p> <p>{user.Username}</p>
      <p className="bold">Email:</p> <p>{user.emails}</p>
      <p className="bold">Telefono:</p> <p>{user.phones}</p>
    </div>
  );
};
