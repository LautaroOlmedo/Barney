import { UserController } from "./user-controller";
import { ProductController } from "./product-controller";
import { SubscriptionController } from "./subscription-controller";
import { SubscriptionAPI } from "../application/subscription";

// -------------------- -------------------- -------------------- -------------------- --------------------

export const userController = new UserController();
export const productController = new ProductController();

const subscriptionAPI = new SubscriptionAPI();

export const subscriptionController = new SubscriptionController(
  subscriptionAPI
);
