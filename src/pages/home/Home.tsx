import React from "react";
import "./home.css";
// --------------
import { dogData } from "../../mocks/dogMockData";
import { Dog } from "../../types/Dog";
import { User } from "../../types/User";

export const HomePage: React.FC<{user: User, dog: Dog }> = ({user, dog }) => {
  console.log(user);
  
  return (
    <div className="frameinicio">
      <section className="frameinicio1" id="Inicio">
        <div className="frame2">
          <div className="tinder-1-parent">
            <img
              className="tinder-1-icon1"
              id="Logo"
              alt=""
              src="./img/barneyLogos/namePawBrown.png"
            />

            <div className="frame3">
              <img
                className="frame-icon"
                id="filtroInicio"
                alt=""
                src="./img/appLogos/filters.png"
              />

              <div className="basilchat-solid">
                <img
                  className="frame-icon1"
                  id="mensajesInicio"
                  alt=""
                  src="./img/appLogos/chat.png"
                />

                <div className="ellipse-parent">
                  <div className="frame-inner"></div>
                  <div className="div">4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame4">
            <div className="frame5">
              <div className="frame5">
                <img
                  className="group-icon"
                  id="fotoPerroinicio"
                  alt=""
                  src={dogData[0].images[0]}
                />

                <div className="frame7">
                  <div className="frame8">
                    <div className="frame9">
                      <div className="frame10">
                        <div className="descripcion">
                          <div className="nombre">{dogData[0].Name}</div>
                          {/* <div className="nombre">3</div> */}
                        </div>
                      </div>
                    </div>
                    <div className="frame11">
                      <div className="frame12">
                        <div className="icbaseline-place-parent">
                          <img
                            className="icbaseline-place-icon"
                            alt=""
                            src="./img/appLogos/location.png"
                          />

                          <div className="mendoza">Mendoza</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className="frame13" id="btnDescripcion">
                    <img
                      className="frame-icon2"
                      alt=""
                      src="./public/frame.svg"
                    />
                  </button> */}
                </div>
              </div>
              <div className="frame14">
                <div className="frame15">
                  <div className="frame16">
                    <div className="frame17">
                      <button className="ellipse-group" id="btnSuperloke">
                        <div className="group-child"></div>
                        <img
                          className="mdipets-icon"
                          alt=""
                          src="./img/appLogos/superGuau.png"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="frame18">
                    <button className="frame19">
                      <div className="ellipse-div"></div>
                      <img
                        className="vector-icon"
                        alt=""
                        src="./img/appLogos/guau.png"
                      />
                    </button>
                  </div>
                  <button className="frame20" id="btnDislike">
                    <div className="ellipse-div"></div>
                    <img
                      className="vector-icon"
                      alt=""
                      src="./img/appLogos/ghosted.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="group-parent">
          <div className="rectangle-parent">
            <div className="group-item"></div>
            <div className="group-inner"></div>
            <button className="heroiconsmap-pin-16-solid" id="btnUbi">
              <img className="vector-icon1" alt="" src="./public/vector1.svg" />
            </button>
          </div>
          <button className="vector-wrapper" id="btnInicio">
            <img className="vector-icon2" alt="" src="./public/vector2.svg" />
          </button>
          <button className="basiluser-solid" id="btnPerfil">
            <img className="vector-icon3" alt="" src="./public/vector3.svg" />
          </button>
        </div> */}
      </section>
    </div>
  );
};
