import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoDB from "./database/connect.js";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors({ credentials: true, origin: `${process.env.FRONT_HOST}` }));

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

mongoDB()
  .then(() => {
    app.listen({
      host: "0.0.0.0",
      port: process.env.PORT ? Number(process.env.PORT) : 5000,
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
