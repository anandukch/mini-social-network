import { hash } from "bcrypt";
import { CreateUserDto } from "../dtos/users.dto";
import { HttpException } from "../exceptions/HttpException";
import { Friend } from "../interfaces/friends.interface";
import { User } from "../interfaces/users.interface";
import friendModel from "../models/friends.model";
import userModel from "../models/users.model";
import { isEmpty } from "../utils/util";

class UserService {
  public users = userModel;
  public friends = friendModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser)
      throw new HttpException(
        409,
        `You're email ${userData.email} already exists`
      );

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({
      ...userData,
      password: hashedPassword,
    });

    return createUserData;
  }

  public async updateUser(
    userId: string,
    userData: CreateUserDto
  ): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    if (userData.email) {
      const findUser: User = await this.users.findOne({
        email: userData.email,
      });
      if (findUser && findUser._id != userId)
        throw new HttpException(
          409,
          `You're email ${userData.email} already exists`
        );
    }

    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      userData = { ...userData, password: hashedPassword };
    }

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, {
      userData,
    });
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }

  public searchUser = async (search: string): Promise<User[]> => {
    const users: User[] = await this.users.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    });
    return users;
  };

  public sendFriendRequest = async (userId: string, friendId: string) => {
    if (!(await this.users.findById(friendId)))
      throw new HttpException(409, "Friend not found");
    const friendUser = await this.friends.findOne({
      user: friendId,
    });
    const user = await this.friends.findOne({
      user: userId,
    });
    if (user.friends.includes(friendId))
      throw new HttpException(409, "You're already friends");
    if (user.friendRequestsSent.includes(friendId))
      throw new HttpException(409, "You have already sent request");
    if (user.friendRequests.includes(friendId))
      throw new HttpException(409, "You have already received request");

    user.friendRequestsSent.push(friendId);
    friendUser.friendRequests.push(userId);
    await user.save();
    await friendUser.save();
    

    // const userFriend:Friend = await this.friends.findOne({
    //   $or: [
    //     { $and: [{ user: userId }, { friend: friendId }] },
    //     { $and: [{ user: friendId }, { friend: userId }] },
    //   ],
    // });
    // if (userFriend) throw new HttpException(409, "You're already friend");
  };
}

export default UserService;
