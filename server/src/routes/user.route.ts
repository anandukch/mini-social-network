import { Router } from "express";
import UserController from "../controllers/user.controller";
import { CreateUserDto } from "../dtos/users.dto";
import { Routes } from "../interfaces/routes.interface";
import authMiddleware from "../middlewares/auth.middleware";
import validationMiddleware from "../middlewares/validation.middleware";

class UserRoute implements Routes {
  public path = "/user";
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,authMiddleware, this.userController.index);
    this.router.get(`${this.path}/search`, this.userController.search);
    this.router.put(`${this.path}/follow/:friendId`, this.userController.addFriend);
    this.router.put(`${this.path}/unfollow/:friendId`, this.userController.removeFriend);

    // this.router.put(`${this.path}/:id`, this.userController);
  }
}

export default UserRoute;
