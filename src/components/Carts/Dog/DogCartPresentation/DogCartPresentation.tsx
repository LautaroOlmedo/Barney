import React from "react";
import { Dog } from "../../../../types/Dog";
import "./DogCartPresentation.css";



export const DogCartPresentation: React.FC<{dog: Dog}> = ({dog}) => {
    return(
        <div className="dogProfile">
            <div className="dogImg">
                <img src={dog.images[0]} alt="foto perfil cucu" />
            </div>
            <div className="dogName">
                <p>{dog.Name}</p>
            </div>
        </div>
    )
}