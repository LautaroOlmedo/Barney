import { User } from "./User";
import { Dog } from "./Dog";

export type Match = {
  ID: string;
  Dogs: Dog[];
  Users: User[];
};
