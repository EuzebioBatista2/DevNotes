import { Router } from "express";
import DashboardController from "../controllers/DashboardController.js";
import verifyToken from "../helpers/verifyToken.js";

const router = Router();

router.get("/editfolder/:id", verifyToken, DashboardController.getFolder);
router.post("/editfolder", verifyToken, DashboardController.editFolder);
router.post("/newfolder", verifyToken, DashboardController.createFolder);
router.delete(
  "/deletefolder/:id",
  verifyToken,
  DashboardController.deleteFolder
);

export default router;
