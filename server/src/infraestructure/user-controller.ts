import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------

export class UserController {
  constructor() {}
  public async run(req: Request, res: Response): Promise<any> {
    res.status(200).json("hello from run");
    console.log(req.body);
  }
}