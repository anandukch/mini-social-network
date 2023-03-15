
import { model, Schema, Document } from "mongoose";
import { Friend } from "../interfaces/friends.interface";

const friendSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  

});

const friendModel = model< Document>("Friend", friendSchema);

export default friendModel;
