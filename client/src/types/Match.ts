export type Match = {
  ID: string; // Identificador único del match
  Username: string; // Nombre de usuario del match
  image: string; // Imagen del usuario
  lastMessage: string; // Último mensaje enviado en el chat
  lastMessageTime: string; // Hora del último mensaje enviado
  chatHistory: {
    // Historial de mensajes
    sender: string; // Quién envió el mensaje
    text: string; // Contenido del mensaje
  }[];
};
