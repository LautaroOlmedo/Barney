import React, { useState } from "react";
import "./Messages.css";
import { Match } from "../../types/Match"; // Cambia a Match
import { matchesMockData } from "../../mocks/userMatchesData"; // Datos de usuarios con los que hizo match

export const MessagesPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<Match | null>(null); // Cambiado a Match

  return (
    <div className="container-mensajes">
      {/* Bandeja de entrada a la izquierda */}
      <div className="left-column-mensajes">
        {matchesMockData.map((user) => (
          <div
            className={`match-item ${
              selectedUser?.Username === user.Username ? "active" : ""
            }`}
            onClick={() => setSelectedUser(user)}
            key={user.Username}
          >
            <img
              src={user.image}
              alt={`${user.Username}`}
              className="match-image"
            />
            <div className="match-info">
              <h3>{user.Username}</h3>
              <p>{user.lastMessage}</p>
              <small>{user.lastMessageTime}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Chat central */}
      <div className="center-column-mensajes">
        {selectedUser ? (
          <div className="chat-section">
            <div className="chat-history">
              {selectedUser.chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    message.sender === "me" ? "my-message" : "other-message"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <div className="chat-input-section">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="chat-input"
              />
              <button className="send-button">Enviar</button>
            </div>
          </div>
        ) : (
          <p className="select-chat-text">Selecciona un chat para comenzar</p>
        )}
      </div>

      {/* Información del usuario a la derecha */}
      <div className="right-column-mensajes">
        {selectedUser && (
          <div className="user-info-section">
            <div className="image-container">
              {/* Imagen del usuario seleccionada */}
              <img
                src={selectedUser.imageDog}
                alt={selectedUser.nameDog}
                className="user-image"
              />
              <div className="overlay"></div>
              <h3 className="overlay-username">{selectedUser.nameDog}</h3>

              {/* Información de la mascota */}
              <div className="pet-container">
                <img
                  src={selectedUser.image}
                  alt={selectedUser.Username}
                  className="pet-image"
                />
                <h4 className="overlay-petname">{selectedUser.Username}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
