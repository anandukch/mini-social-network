import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "../interfaces/auth.interface";
import { User } from "../interfaces/users.interface";
import UserService from "../services/users.service";

class UserController {
  private userService = new UserService();
  public getProfile = (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    const userData: User = req.user;
    res.status(200).json({ data: userData, message: "getProfile" });
  };

  public search = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.query);

      const user = await this.userService.searchUser(
        req.query.search as string
      );
      res.status(200).json({ data: user, message: "search" });
    } catch (error) {
      next(error);
    }
  };

  public addFriend = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userData: User = req.user;
      const user = await this.userService.addFriend(
        userData,
        req.params.friendId as string
      );
      res.status(200).json({ data: user, message: "addFriend" });
    } catch (error) {
      next(error);
    }
  };

  public removeFriend = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userData: User = req.user;
      const user = await this.userService.unFriend(
        userData,
        req.params.friendId as string
      );
      res.status(200).json({ data: user, message: "removeFriend" });
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;
