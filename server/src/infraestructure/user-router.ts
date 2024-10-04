import express, { NextFunction, Request, Response, response } from "express";

// ---------- ---------- ---------- ---------- ----------

import { userController } from "./dependencies";

const userRouter: express.Router = express.Router();

userRouter.post("/", userController.run);
userRouter.get("/all", userController.getAllUsers);

export { userRouter };
