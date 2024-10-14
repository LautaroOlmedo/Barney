import express, { NextFunction, Request, Response, response } from "express";

// ---------- ---------- ---------- ---------- ----------

import { userController } from "./dependencies";

const userRouter: express.Router = express.Router();

<<<<<<< HEAD
userRouter.post(
  "/",

  userController.run
);

export { userRouter };
=======
userRouter.post("/", userController.run);
userRouter.post("/register", userController.crateUser);
userRouter.get("/all", userController.getAllUsers);

export { userRouter };
>>>>>>> 4f073ad29eb11f7aa2ce6830e6bddb5638aa8188
