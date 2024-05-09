import React from "react";
import { NavBar } from "../NavBar/NavBar";
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
