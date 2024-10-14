import React from "react";
import { NavBar } from "../navBar/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <NavBar />
      </div>

      <Outlet />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <Footer/>

      </div>
    </>
  );
};
