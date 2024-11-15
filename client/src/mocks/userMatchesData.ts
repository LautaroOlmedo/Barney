import { Match } from "../types/Match";

export const matchesMockData: Match[] = [
  {
    ID: "1",
    Username: "JuanPerez",
    image: "/img/dogProfileImg/perfilCuco.jpeg",
    lastMessage: "Hola, ¿cómo estás?",
    lastMessageTime: "18:56",
    chatHistory: [
      { sender: "JuanPerez", text: "Hola, ¿cómo estás?" },
      { sender: "me", text: "Bien, gracias!" },
    ],
  },
  {
    ID: "2",
    Username: "MariaLopez",
    image: "https://example.com/marialopez.jpg",
    lastMessage: "Nos vemos mañana.",
    lastMessageTime: "09:15",
    chatHistory: [
      { sender: "MariaLopez", text: "Nos vemos mañana." },
      { sender: "me", text: "Claro, ¿a qué hora?" },
    ],
  },
  {
    ID: "3",
    Username: "CarlosGomez",
    image: "https://example.com/carlosgomez.jpg",
    lastMessage: "¿Tienes tiempo este fin de semana?",
    lastMessageTime: "Ayer",
    chatHistory: [
      { sender: "CarlosGomez", text: "¿Tienes tiempo este fin de semana?" },
      { sender: "me", text: "Tal vez, ¿qué tienes en mente?" },
    ],
  },
];
