import express from "express";
import morgan from "morgan";
import cors from "cors";
import { userRouter } from "./infraestructure/user-router";

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
}