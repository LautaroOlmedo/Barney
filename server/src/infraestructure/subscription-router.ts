import express, { NextFunction, Request, Response, response } from "express";

import { subscriptionController } from "./dependencies";
// ---------- ---------- ---------- ---------- ----------

const subscriptionRouter: express.Router = express.Router();
subscriptionRouter.post(
  "/",
  subscriptionController.run.bind(subscriptionController)
);

export { subscriptionRouter };
