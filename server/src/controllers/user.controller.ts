import { NextFunction, Request, Response } from "express";
import UserService from "../services/users.service";

class UserController {
  private userService = new UserService();
  public index = (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World");
  };

  public search = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.searchUser(
        req.query.search as string
      );
      res.status(200).json({ data: user, message: "search" });
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;
