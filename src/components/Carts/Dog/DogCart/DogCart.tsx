import { Dog } from "../../../../types/Dog";
import { User } from "../../../../types/User";

export const DogCart: React.FC<{ dog: Dog; user: User }> = ({ dog, user }) => {
  return (
    <div>
      {dog.images.length
        ? dog.images.map((image: string, index) => (
            <div>
              <p key={index}>{image}</p>
            </div>
          ))
        : "not images loaded"}
      <p>nombre: {dog.Name != null ? dog.Name : "no hay datos para mostrar"}</p>
      <p>edad: {dog.Age}</p>
      <p>descripción: {dog.Description}</p>
      <p>dueño: {user.Person.Name}</p>
    </div>
  );
};
