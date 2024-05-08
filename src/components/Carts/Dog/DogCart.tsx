import { Dog } from "../../../types/Dog";
import { Customer } from "../../../types/Customer";

export const DogCart: React.FC<{ dog: Dog; customer: Customer }> = ({
  dog,
  customer,
}) => {
  return (
    <div>
      <p>name: {dog.Name != null ? dog.Name : "no hay datos para mostrar"}</p>
      <p>age: {dog.Age}</p>
      <p>description: {dog.Description}</p>
      <p>customer: {customer.User.Person.Name}</p>
    </div>
  );
};
