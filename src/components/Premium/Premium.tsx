import React from "react";
import "./Premium.css";

const Premium = ({ onClose }) => {
    return (
      <div className="premiumOverlay">
        <div className="premiumContent">
            <h1>Información de servicios</h1>
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
            El servicio premium además de contar con todas las disponibilidades del servicio base también contará con:
            - Se habilita una opción llamada “Super Guau” (super like) esta opción permitirá dar Super Guau a otros perfiles. El beneficio de dar un Super Guau es que tu perfil aparecerá primero en el inicio del otro usuario.
            - En vez de poder crear como máximo 3 perfiles se van a poder crear hasta 7 perfiles para otras mascotas.
            - Va a permitir ver los perfiles de los usuarios que te dieron Guau o Super Guau, sin necesidad de que te aparezcan aleatoriamente en el inicio y sin la necesidad de realizar Match.
            - Permitirá buscar con ciertos filtros otros perfiles, mediante un buscador dentro de la aplicación, por ejemplo: En caso de estar buscando un perro macho de raza Salchicha, se va a poder filtrar mediante el buscador y van a aparecer todos los perfiles registrados en la aplicación de perros macho raza salchicha, estos perfiles se van a ordenar de manera de lejanía, es decir, el perfil que aparezca primero en la lista va a ser el perfil más cercano a tu ubicación actual.
            </p>
          {/* <button onClick={}>Mercado Pago</button> */}
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };
  
  export default Premium;