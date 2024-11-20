import { Request, Response } from "express";

export class ProductController {
  constructor() {}
  public async getAllProducts(req: Request, res: Response): Promise<any> {
    res.status(200).json("all products");
    console.log(req.body);
  }
}
