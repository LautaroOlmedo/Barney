import { Dog } from "../types/Dog";
// import { User } from "../types/User";
// import { Person } from "../types/Person";

export let dogData: Dog[] = [
  {
    ID: "1",
    Name: "Changuito Zeballos",
    Age: 5,
    Description: "Buldog Frances",
    images: ["/img/dogProfileImg/perfilCuco.jpeg"],
    matches: [],
    likes: [],
    // User: {
    //   Person: {
    //     ID: "1",
    //     Name: "John",
    //     Lastname: "Doe",
    //     age: 30,
    //     DNI: "12345678",
    //   },
    //   Username: "johndoe",
    //   Password: "password123",
    //   emails: "john@example.com",
    //   phones: "123-456-789",
    //   type: "admin",
    //   dogs: [],
    // },
  },
  {
    ID: "4",
    Name: "Homero",
    Age: 9,
    Description: "Golden Retriever",
    images: ["/img/dogProfileImg/perfilCuco.jpeg"],
    matches: [],
    likes: [],
    // User: {
    //   Person: {
    //     ID: "2",
    //     Name: "Jane",
    //     Lastname: "Smith",
    //     age: 25,
    //     DNI: "87654321B",
    //   },
    //   Username: "janesmith",
    //   Password: "securepassword",
    //   emails: "jane@example.com",
    //   phones: "987-654-321",
    //   type: "admin",
    //   dogs: [],
    // },
  },
];

export const updateDog = (updatedDog: Dog) => {
  const index = dogData.findIndex((dog) => dog.ID === updatedDog.ID);
  if (index !== -1) {
    dogData[index] = updatedDog;
    console.log("Data updated in userMockData: ", dogData[index]);
  }
};
