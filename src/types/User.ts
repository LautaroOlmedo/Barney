import { Dog } from "./Dog";
import { Person } from "./Person";

export type User = {
  Person: Person;
  Username: string;
  Password: string;
  emails: string;
  phones: string;
  type: string;
<<<<<<< HEAD
=======
  dogs: Dog[];
>>>>>>> origin/development
  image: string;
};
