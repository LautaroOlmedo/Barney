import React from "react";
import { NavBar } from "../navBar/NavBar";
import { Outlet } from "react-router-dom";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <NavBar />
      </div>

      <Outlet />
    </>
  );
};
