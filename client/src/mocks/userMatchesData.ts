import { Match } from "../types/Match";

export const matchesMockData: Match[] = [
  {
    ID: "1",
    Username: "JuanPerez",
    image: "/img/userProfileImg/userPhoto.jpg",
    lastMessage: "¡Listo! Seguro que Rex y Cuco se llevarán bien.",
    lastMessageTime: "19:45",
    chatHistory: [
      { sender: "JuanPerez", text: "Hola, ¿cómo estás?" },
      { sender: "me", text: "Bien, gracias. ¿Y tú?" },
      {
        sender: "JuanPerez",
        text: "Muy bien, gracias. Estaba pensando en llevar a Rex al parque este fin de semana.",
      },
      {
        sender: "me",
        text: "¡Suena perfecto! Cuco necesita hacer ejercicio también.",
      },
      { sender: "JuanPerez", text: "Genial, ¿qué tal el sábado por la tarde?" },
      {
        sender: "me",
        text: "Sí, perfecto. Nos vemos en el parque central a las 5 p.m.",
      },
      {
        sender: "JuanPerez",
        text: "¡Listo! Seguro que Rex y Cuco se llevarán bien.",
      },
    ],
    nameDog: "Rex",
    imageDog: "/img/dogProfileImg/beagle.jpeg",
  },
  {
    ID: "2",
    Username: "TomasLopez",
    image: "/img/userProfileImg/userPhoto1.jpg",
    lastMessage: "¡Nos vemos! Cuco y Max se divertirán.",
    lastMessageTime: "09:15",
    chatHistory: [
      { sender: "MariaLopez", text: "Nos vemos mañana." },
      { sender: "me", text: "Claro, ¿a qué hora te viene bien?" },
      {
        sender: "MariaLopez",
        text: "¿Qué tal a las 10 a.m.? Podemos llevar a Max al café para perros que está en el centro.",
      },
      {
        sender: "me",
        text: "¡Perfecto! Cuco ama ese lugar, especialmente los snacks.",
      },
      {
        sender: "MariaLopez",
        text: "Sí, Max también se vuelve loco con ellos. ¡Será divertido!",
      },
      { sender: "me", text: "¡Sin duda! Entonces mañana a las 10 en el café." },
      { sender: "MariaLopez", text: "¡Nos vemos! Cuco y Max se divertirán." },
    ],
    nameDog: "Max",
    imageDog: "/img/dogProfileImg/golden-retriever.jpeg",
  },
  {
    ID: "3",
    Username: "CarlosGomez",
    image: "/img/userProfileImg/userPhoto2.jpeg",
    lastMessage: "¡Hecho! Llevaré algunas golosinas para perros.",
    lastMessageTime: "Ayer",
    chatHistory: [
      { sender: "CarlosGomez", text: "¿Tienes tiempo este fin de semana?" },
      { sender: "me", text: "Tal vez, ¿qué tienes en mente?" },
      {
        sender: "CarlosGomez",
        text: "Pensaba en un picnic en el parque con Luna. Ella necesita socializar con otros perros.",
      },
      {
        sender: "me",
        text: "¡Buena idea! Cuco necesita conocer nuevos amigos perrunos.",
      },
      {
        sender: "CarlosGomez",
        text: "¡Perfecto! ¿Domingo por la mañana te va bien?",
      },
      {
        sender: "me",
        text: "Sí, el domingo suena bien. ¿A las 11 a.m. en el parque oeste?",
      },
      {
        sender: "CarlosGomez",
        text: "¡Hecho! Llevaré algunas golosinas para perros.",
      },
    ],
    nameDog: "Luna",
    imageDog: "/img/dogProfileImg/doge.jpg",
  },
];
