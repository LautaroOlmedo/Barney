import React from 'react';
import './scr/common/global.css';


import './profile.css';


export const ProfilePage:  React.FC = () => {
    return(
    <div className="frameperfil">
      <img
        className="fotoperro-icon"
        id="fotoPerroUsuario"
        alt=""
        src="./public/fotoperro@2x.png"
      />

      <div className="btneditarperfil"></div>
      <div className="ajustes">Ajustes</div>
      <div className="edita-perfil">Edita perfil</div>
      <button className="btnajustes-parent" id="btnAjustes">
        <div className="btnajustes"></div>
        <img className="vector-icon" alt="" src="./public/vector.svg" />
      </button>
      <div className="sube-fotos-parent">
        <div className="sube-fotos">Sube fotos</div>
        <div className="btnsubirfoto-parent">
          <div className="btnsubirfoto"></div>
          <div className="ellipse-div"></div>
          <button className="ioncamera" id="btnAgregarFoto">
            <img className="vector-icon1" alt="" src="./public/vector1.svg" />
            <img className="vector-icon2" alt="" src="./public/vector2.svg" />
          </button>
          <div className="div1">+</div>
        </div>
      </div>
      <button className="bitcoin-iconsedit-filled" id="btnEditarPerfil">
        <img className="vector-icon3" alt="" src="./public/vector3.svg" />
      </button>
      <section className="frameperfil-child"></section>
      <h3 className="desbloquea-nuevos-perfiles-container">
        <p className="desbloquea-nuevos-perfiles">Desbloquea nuevos perfiles</p>
        <p className="y-ubicaciones">y ubicaciones</p>
      </h3>
      <img className="panelbtncontrol-icon" alt="" src="./public/panelbtncontrol.svg" />

      <button className="btnsuscripcion" id="btnSuscripcion">
        <div className="btnsuscripcion-child" id="rectangle"></div>
        <h2 className="consigue-barneygold">Consigue BarneyGold</h2>
      </button>
      <div className="descripcion">
        <h2 className="nombre" id="nombrePerroUsuario">Barni,</h2>
        <div className="aos">3</div>
      </div>
    </div>
    );
    };

    