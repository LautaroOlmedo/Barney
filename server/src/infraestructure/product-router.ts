import express, { NextFunction, Request, Response, response } from "express";
import { productController } from "./dependencies";
// ---------- ---------- ---------- ---------- ----------

const productRouter: express.Router = express.Router();

productRouter.get("/", productController.getAllProducts);

export { productRouter };
