import express from "express";
import morgan from "morgan";
import cors from "cors";

// ---------- ---------- ---------- ---------- ----------
import { userRouter } from "./infraestructure/user-router";
import { productRouter } from "./infraestructure/product-router";

export class ServerBootstrap {
  // ---> Clase inicia. Si la instancias y llamas al metodo start se inicia el servidor.
  constructor() {
    this.server.use(express.json()); // ---> Permite que el back (servidor) utilice el formato JSON
    this.server.use(express.urlencoded({ extended: true })); // ---> SOS MUY PETE PARA ENTENDER ESTO TODAVÍA
    this.server.use(morgan("dev")); // ---> Morgan permite modificar código y al guardar reinicia el servidor (por defecto esto no ocurre)
    this.server.use(cors()); // ---> SOS MUY PETE PARA ENTENDER ESTO TODAVÍA
    this.server.use("/user", userRouter); // ---> Le especifico al servidor que si llega una solicitud a /user derive esa petición al router userRouter
    this.start(); // ---> DEBERÍAS SABER QUE HACE ESTO....
  }

  private start = (): void => {
    // ---> esta función dice "server.listen", osea, está levantando el servidor. listen recibe por parámetro el puerto donde va a escuchar el servidor y otros que no importan
    this.server.listen(this.port, (): void => {
      console.log(`Server listening on port ${this.port}`);
    });
  };

  private server: express.Application = express(); // ---> server: variable que llama a express. Sirve para inicializar el servidor.
  private port = 8000; // ---> port: puerto donde escucha la aplicación. En este caso HTTP.
}
