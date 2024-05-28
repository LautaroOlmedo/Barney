import React from "react";
import { DogCartPresentation } from "../../components/Carts/Dog/DogCartPresentation/DogCartPresentation";
import { Dog } from "../../types/Dog";
import "./DogProfileSelect.css";

export const DogProfileSelect: React.FC <{dog:Dog}> = ({ dog }) => {
return(
    <div className="div">
        <div className="divPerros">
            <h1>Perros</h1>    
        </div>
        <div className="div2">
            <DogCartPresentation dog={dog} />
        </div>
    </div>
);

}