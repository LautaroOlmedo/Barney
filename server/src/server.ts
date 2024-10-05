import express from "express";
import morgan from "morgan";
import cors from "cors";
<<<<<<< HEAD
import { userRouter } from "./infraestructure/user-router";

=======
import http from "http";

// ---------- ---------- ---------- ---------- ----------
import { userRouter } from "./infraestructure/user-router";
>>>>>>> 4f073ad29eb11f7aa2ce6830e6bddb5638aa8188
export class ServerBootstrap {
  constructor() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan("dev"));
    this.server.use(cors());
    this.server.use("/user", userRouter);

    this.start();
  }

  private start = (): void => {
    this.server.listen(this.port, (): void => {
      console.log(`Server listening on port ${this.port}`);
    });
  };

  private server: express.Application = express();
  private port = 8000;
<<<<<<< HEAD
}
=======
}
>>>>>>> 4f073ad29eb11f7aa2ce6830e6bddb5638aa8188
