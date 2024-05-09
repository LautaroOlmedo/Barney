import React from "react";
import { Dog } from "../../../../types/Dog";



export const DogCartPresentation: React.FC<{dogs: Dog}> = ({dogs}) => {
    return(
        <div>
            <div>
                <img src={dogs.images[0]} alt="foto perfil cucu" />
            </div>
            <p>{dogs.Name}</p>
            <button> Perfil </button>
            <button> Matches </button>
        </div>
    )
}