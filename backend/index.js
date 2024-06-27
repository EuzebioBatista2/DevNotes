import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoDB from "./database/connect.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/auth", authRoutes);

mongoDB()
  .then(() => {
    console.log("Database connected");
    app.listen(5000, () => {
      console.log("Server connected");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
