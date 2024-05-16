import { Dog } from "../types/Dog";
import { User } from "../types/User";
import { Person } from "../types/Person";


export let dogData: Dog[] = [
  { 
    ID: "1", 
    Name: "Cuco",
    Age: 5,
    Description: "Buldog Frances",
    images: [],
    matches: [],
    likes: [],
    User:{
        Person: {
        ID: "1",
        Name: "John",
        Lastname: "Doe",
        age: 30,
        DNI: "12345678A",
        },
        Username: "johndoe",
        Password: "password123",
        emails: "john@example.com",
        phones: "123-456-789",
        type: "admin", 
    }, 
  },
];