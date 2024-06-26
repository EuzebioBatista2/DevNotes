import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = mongoose.model(
  "User",
  new Schema(
    {
      name: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
      notes: {
        type: Array,
      },
    },
    { timestamps: true }
  )
);

export default User;
