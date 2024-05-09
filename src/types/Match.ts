import { User } from "./User";
import { Dog } from "./Dog";

export type Match = {
  ID: string;
  Dog: Dog;
  Users: User[];
};
