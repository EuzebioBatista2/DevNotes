import mongoose from "mongoose";

const { Schema } = mongoose;

const Folder = mongoose.model(
  "Folder",
  new Schema(
    {
      name: {
        type: String,
        require: true,
      },
      userId: {
        type: String,
        require: true,
      },
      folders: {
        type: Array,
      },
    },
    { timestamps: true }
  )
);

export default Folder;
