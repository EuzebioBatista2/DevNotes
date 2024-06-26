import mongoose from "mongoose";
import colorValidation from "../helpers/validations/colorValidation.js";
import folderNameValidation from "../helpers/validations/folderNameValidation.js";
import Folder from "../models/Folder.js";
import User from "../models/User.js";
class DashboardController {
  static async getFolder(req, res) {
    const { ObjectId } = mongoose.Types;
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    const user = req.user;
    const userData = await User.findOne(
      {
        _id: user.id,
        folders: { $elemMatch: { _id: id } },
      },
      { "folders.$": 1 }
    );

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }

    const response = userData.folders[0];

    res.status(200).json({
      folder: response,
    });
  }

  static async createFolder(req, res) {
    const { name, color, userId } = req.body;

    const validName = await folderNameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
        type: "error",
      });
    }

    const validColor = await colorValidation(color);
    if (validColor !== "Valid color.") {
      return res.status(422).json({
        message: validColor,
        type: "error",
      });
    }

    const id = new mongoose.Types.ObjectId();

    let foldersContainer = await Folder.findOne({ userId: userId });
    const newFolder = {
      _id: id,
      files: [],
    };
    foldersContainer.folders.push(newFolder);

    let user = await User.findById(userId);
    const newUserFolder = {
      _id: id,
      name,
      color,
    };
    user.folders.push(newUserFolder);

    try {
      await Folder.findOneAndUpdate({ userId: userId }, foldersContainer);
      await User.findByIdAndUpdate(userId, user);
      res.status(201).json({
        message: "Folder created",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async editFolder(req, res) {
    const { _id, name, color } = req.body;

    const validName = await folderNameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
        type: "error",
      });
    }

    const validColor = await colorValidation(color);
    if (validColor !== "Valid color.") {
      return res.status(422).json({
        message: validColor,
        type: "error",
      });
    }

    const user = req.user;
    const userData = await User.findOne({
      _id: user.id,
      folders: { $elemMatch: { _id: _id } },
    });

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }

    const folderIndex = user.folders.findIndex(
      (folder) => folder._id.toString() === _id
    );

    userData.folders[folderIndex].name = name;
    userData.folders[folderIndex].color = color;

    try {
      await User.findByIdAndUpdate(user.id, userData);
      res.status(201).json({
        message: "Folder created!",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async deleteFolder(req, res) {
    const _id = req.params.id;

    const user = req.user;
    const userData = await User.findOne({
      _id: user.id,
      folders: { $elemMatch: { _id: _id } },
    });

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }

    const folderIndex = user.folders.findIndex(
      (folder) => folder._id.toString() === _id
    );

    const userFolder = await Folder.findOne({ userId: user.id });

    userData.folders.splice(folderIndex, 1);
    userFolder.folders.splice(folderIndex, 1);

    try {
      await User.findByIdAndUpdate(user.id, userData);
      await Folder.findOneAndUpdate({ userId: user.id }, userFolder);

      res.status(200).json({
        message: "Folder deleted succesffully!",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async getFiles(req, res) {
    const { ObjectId } = mongoose.Types;
    const folderId = req.params.folderId;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    const user = req.user;
    const userData = await Folder.findOne(
      {
        userId: user.id,
        folders: { $elemMatch: { _id: folderId } },
      },
      { "folders.$": 1 }
    );

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }

    const response = userData.folders[0].files;

    res.status(200).json({
      files: response,
    });
  }

  static async verifyFolder(req, res) {
    const { ObjectId } = mongoose.Types;
    const folderId = req.params.folderId;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    const user = req.user;
    const userData = await Folder.findOne({
      userId: user.id,
      folders: { $elemMatch: { _id: folderId } },
    });

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }
  }

  static async createFile(req, res) {
    const { ObjectId } = mongoose.Types;
    const folderId = req.params.folderId;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }
    const { name } = req.body;
    const user = req.user;
    const userData = await Folder.findOne({
      userId: user.id,
      folders: { $elemMatch: { _id: folderId } },
    });

    if (!userData) {
      return res.status(404).json({
        message: "Folder not found.",
        type: "error",
      });
    }

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const file = {
      id: new ObjectId(),
      name,
      content: "",
    };

    userData.folders[folderIndex].files.push(file);

    try {
      await Folder.findOneAndUpdate({ userId: user.id }, userData);
      res.status(201).json({
        message: "File created",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }
}

export default DashboardController;
