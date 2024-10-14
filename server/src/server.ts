import express from "express";
import morgan from "morgan";
import cors from "cors";



import http from "http";

// ---------- ---------- ---------- ---------- ----------
import { userRouter } from "./infraestructure/user-router";
import { productRouter } from "./infraestructure/product-router";

export class ServerBootstrap {
  constructor() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan("dev"));
    this.server.use(cors());
    this.server.use("/user", userRouter);
    this.server.use("/product", productRouter);

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