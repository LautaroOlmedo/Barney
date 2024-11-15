import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------

export class UserController {
  constructor() {}
  public async run(req: Request, res: Response): Promise<any> {
    res.status(200).json("hello from controller");
    console.log(req.body);
  }
  public async crateUser(req: Request, res: Response): Promise<any> {
    res.status(200).json("user created");
  }

  public async getAllUsers(req: Request, res: Response): Promise<any> {
    res.status(200).json("obtuviste tus los usuarios de la base de datos");
    console.log(req.body);
  }
}
