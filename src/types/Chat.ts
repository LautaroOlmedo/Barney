import { Customer } from "./Customer";
import { Message } from "./Message";

export type Chat = {
    Customer: Customer;
    Messages: Message[];
};