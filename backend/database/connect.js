import mongoose from "mongoose";

const mongoDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@db-devnotes.htztrmo.mongodb.net/?retryWrites=true&w=majority&appName=DB-DevNotes`
  );
};

export default mongoDB;
