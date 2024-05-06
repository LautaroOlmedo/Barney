import { Chat } from "./Chat";
import { Customer } from "./Customer";

export type Message = {
    Message: string;
    Customer: Customer;
    Chat: Chat;
};