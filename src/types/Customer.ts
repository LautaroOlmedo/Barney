import { Dog } from "./Dog";
import { Message } from "./Message";
import { Subscription } from "./Subscription";
import { User } from "./User";

export type Customer = {
    User: User;
    Dog: Dog;
    Subscription: Subscription;
    Message: Message;
};