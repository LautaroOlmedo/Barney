import React from "react";
import { Dog } from "../../types/Dog";
import "./matchs.css";

export const Matchs: React.FC<{ dog: Dog }> = ({ dog }) => {
  return (
    <div className="container">
      <p>MATCHES</p>
    </div>
  );
};
