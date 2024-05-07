import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <Link to={"/profile/:id"}>
          <button>Terminos y condiciones</button>
        </Link>
      </div>
      <div>
        <Link to={"/mypets/:id"}>
          <button>¿Quienes somos?</button>
        </Link>
      </div>
    </div>
  );
};
