import React from "react";

const EmergentFooter = ({ onClose }) => {
    return (
      <div className="premiumOverlay">
        <div className="premiumContent">
            <h2>Información de servicios</h2>
            <p><strong>Servicios cuenta Base:</strong>.</p>
            <p>- Permite ver otros perfiles de usuarios con la disponibilidad de poder dar “Guau” (like) o Miau (dislike) a otros perfiles.
            - Se le permite al usuario redactar una corta descripción sobre el perruno y otra descripción sobre el mismo. En esta descripción es donde se colocará obligadamente la edad y la raza del perro. Esta descripción va a ser visible para otros usuarios.  
            - Se van a poder colocar de 3 a 10 fotos por perfil, todas las fotos deben ser diferentes. Estas mismas van a ser visibles para otros usuarios.
            - Permite crear hasta 3 perfiles diferentes por usuario. Esto con el objetivo de que en el caso de que un usuario tenga más de una sola mascota perruna pueda crear un perfil a parte de su otra mascota.
            - Una vez concretado un match, con otro perfil se va a habilitar una opción de chat, la cual les va a permitir a los usuarios que puedan hablar entre ellos de manera directa para poder organizar reuniones con sus mascotas (los chats no van a permitir enviar fotos o mensajes de audio).
            - Se va a poder aplicar un máximo de ubicación que queremos, esto lo que hará es sólo mostrar perfiles a la distancia máxima colocada
            </p>
            <p><strong>Servicios cuenta PREMIUM:</strong>.</p>
            <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p> <strong>Privicy Policy:</strong>.</p>
            <p> 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            </p>
            <p><strong>Terms & Conditions: </strong>.</p>
            <p>
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>

          {/* <button onClick={}>Mercado Pago</button> */}
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };
  
  export default EmergentFooter;