import { Dog } from "../../../../types/Dog";
import { User } from "../../../../types/User";
import "./DogCard.css";

export const DogCart: React.FC<{ dog: Dog; user: User }> = ({ dog, user }) => {
  return (
    <div className="profile">
      {/* <div>
        {dog.images.length
          ? dog.images.map((image: string, index) => (
              <div>
                <p key={index}>{image}</p>
              </div>
            ))
          : "not images loaded"}
      </div> */}
      <p className="bold">Nombre:</p> <p>{dog.Name != null ? dog.Name : "no hay datos para mostrar"}</p>
      <p className="bold">Edad:</p> <p>{dog.Age}</p>
      <p className="bold">Descripción:</p> <p>{dog.Description}</p>
      <p className="bold">Dueño:</p> <p>{user.Person.Name}</p>
    </div>
  );
};
