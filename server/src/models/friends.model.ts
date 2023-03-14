import { model, Schema, Document } from "mongoose";
import { User } from "../interfaces/users.interface";

const friendSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friendRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  friendRequestsSent: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const friendModel = model<Document>("Friend", friendSchema);

export default friendModel;
