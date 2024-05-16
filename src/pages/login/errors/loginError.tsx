import React from "react";


  export const LoginError: React.FC <{error:string}> = ({error}) => {
        // Función para mostrar la alerta
        const showAlert = () => {
            alert(error);
          };
        
          return (
            <div className="App">
              <header className="App-header">--
                {/* Botón que muestra la alerta al hacer clic */}
                <button onClick={showAlert}>Show Alert</button>
              </header>
            </div>
          );
  }
