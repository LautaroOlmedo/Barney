import { Person } from "./Person";

export type User = {
  Person: Person;
  Username: string;
  Password: string;
  emails: string[];
  phones: string[];
};
