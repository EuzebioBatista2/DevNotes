import { Router } from "express";
import DashboardController from "../controllers/DashboardController.js";
import verifyToken from "../helpers/verifyToken.js";

const router = Router();

router.get("/files/:folderId", verifyToken, DashboardController.getFiles);
router.get(
  "/verifyfolder/:folderId",
  verifyToken,
  DashboardController.verifyFolder
);
router.post(
  "/files/createfile/:folderId",
  verifyToken,
  DashboardController.createFile
);
router.post(
  "/files/editfile/:folderId",
  verifyToken,
  DashboardController.editFile
);
router.delete(
  "/files/deletefile/:folderId/:fileId",
  verifyToken,
  DashboardController.deleteFile
);

router.get("/editfolder/:id", verifyToken, DashboardController.getFolder);
router.post("/editfolder", verifyToken, DashboardController.editFolder);
router.post("/newfolder", verifyToken, DashboardController.createFolder);
router.delete(
  "/deletefolder/:id",
  verifyToken,
  DashboardController.deleteFolder
);
export default router;
