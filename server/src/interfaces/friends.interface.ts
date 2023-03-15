export interface Friend {
  _id: string;
  user:string;
  friends: string[];
  friendRequests: string[];
  friendRequestsSent: string[];
}
