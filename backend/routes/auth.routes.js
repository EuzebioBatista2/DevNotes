import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import verifyToken from "../helpers/verifyToken.js";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/user", verifyToken, AuthController.authUser);
router.post(
  "/changepassword/:userId",
  verifyToken,
  AuthController.changePassword
);

export default router;
