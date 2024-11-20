// import { Like } from "./Like";
import { Match } from "./Match";
// import { User } from "./User";

export type Dog = {
  ID: string;
  // User: User;
  Age: number;
  Name: string;
  Description: string;
  images: string[];
  matches: Match[];
  likes: Dog[];
};
