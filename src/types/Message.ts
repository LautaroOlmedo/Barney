import { Chat } from "./Chat";
import { User } from "./User";

export type Message = {
  ID: string;
  Message: string;
  Customer: User;
  Chat: Chat;
};
