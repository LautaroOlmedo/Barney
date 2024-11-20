import { Request, Response } from "express";
import { SubscriptionAPI } from "../application/subscription";

// ---------- ---------- ---------- ---------- ----------

export class SubscriptionController {
  constructor(private susbscriptionAPI: SubscriptionAPI) {}

  public async run(req: Request, res: Response): Promise<any> {
    await this.susbscriptionAPI.send();
    console.log(req.body);
    res.send(200);
  }
}
