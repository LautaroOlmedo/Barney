import React from "react";
import "./Premium.css";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState } from "react";


const Premium = ({ onClose }) => {
  const [preferenceId, setPreferenceId] = useState(null)

  initMercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try{
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: "Barney Premium",
        quantity: 1,
        price: 100,
      });

      const { id } = response.data;
      return id;
    }catch(error){
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
      if(id){
        setPreferenceId(id);
      }
    };
    
    return (
      <div className="premiumOverlay">
        <div className="premiumContent">
            <h1>Información de servicios</h1>
            <p><strong>Servicios cuenta PREMIUM:</strong></p>
            <p>
            El servicio premium además de contar con todas las disponibilidades del servicio base también contará con:
            <br />- Se habilita una opción llamada “Super Guau” (super like) esta opción permitirá dar Super Guau a otros perfiles. El beneficio de dar un Super Guau es que tu perfil aparecerá primero en el inicio del otro usuario.
            <br />- En vez de poder crear como máximo 3 perfiles se van a poder crear hasta 7 perfiles para otras mascotas.
            <br />- Va a permitir ver los perfiles de los usuarios que te dieron Guau o Super Guau, sin necesidad de que te aparezcan aleatoriamente en el inicio y sin la necesidad de realizar Match.
            <br />- Permitirá buscar con ciertos filtros otros perfiles, mediante un buscador dentro de la aplicación, por ejemplo: En caso de estar buscando un perro macho de raza Salchicha, se va a poder filtrar mediante el buscador y van a aparecer todos los perfiles registrados en la aplicación de perros macho raza salchicha, estos perfiles se van a ordenar de manera de lejanía, es decir, el perfil que aparezca primero en la lista va a ser el perfil más cercano a tu ubicación actual.
            </p>
            <p className="Price "> <br />Precio: $ 100</p>
          <button className="adquirirPremium" onClick={handleBuy}>Adquirir Premium</button> 
          <button className="cerrar" onClick={onClose} style={{ marginTop: '10px' }}>Cerrar</button>
          {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
        </div>
      </div>
    );
  };
  
  export default Premium;