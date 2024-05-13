import { Message } from "./Message";
import { User } from "./User";

export type Chat = {
  ID: string;
  Users: User[];
  Messages: Message[];
};
