import { User } from "../types/User";
export let data: User[] = [
  {
    Person: {
      ID: "1",
      Name: "John",
      Lastname: "Doe",
      age: 30,
      DNI: "12345678A",
    },
    Username: "johndoe",
    Password: "password123",
    emails: ["john@example.com"],
    phones: ["123-456-789"],
    type: "admin",
    image: "./img/userProfileImg/userPhoto3.jpeg",
    dogs: [
      {
        ID: "10",
        Name: "Cuco",
        Age: 5,
        Description: "Buldog Frances",
        images: [
          "/img/dogProfileImg/perfilCuco.jpeg",
          "/img/dogProfileImg/border-collie.jfif",
          "/img/dogProfileImg/golden-retriever.jpeg",
        ],
        matches: [],
        likes: [],
      },
      {
        ID: "12",
        Name: "Arya",
        Age: 7,
        Description: "Border Collie",
        images: ["/img/dogProfileImg/border-collie.jfif"],
        matches: [],
        likes: [],
      },
    ],
  },
  {
    Person: {
      ID: "2",
      Name: "David",
      Lastname: "Beckham",
      age: 53,
      DNI: "1234567",
    },
    Username: "dbeckham",
    Password: "alamadrid",
    emails: ["dbeckham@example.com"],
    phones: ["231-564-978"],
    type: "admin",
    image: "./img/userProfileImg/userPhoto.jpg",
    dogs: [
      {
        ID: "11",
        Name: "Homero",
        Age: 9,
        Description: "Golden Retriever",
        images: ["/img/dogProfileImg/golden-retriever.jpeg"],
        matches: [],
        likes: [],
      },
    ],
  },
];

export const updateUser = (updatedUser: User) => {
  const index = data.findIndex(
    (user) => user.Person.ID === updatedUser.Person.ID
  );
  if (index !== -1) {
    data[index] = updatedUser;
    console.log("Data updated in userMockData: ", data[index]);
  }
};
