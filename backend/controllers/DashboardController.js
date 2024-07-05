import mongoose from "mongoose";
import colorValidation from "../helpers/validations/colorValidation.js";
import folderNameValidation from "../helpers/validations/folderNameValidation.js";
import fileNameValidation from "../helpers/validations/fileNameValidation.js";
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

    const existFolder = await User.findOne({
      _id: userId,
      folders: { $elemMatch: { name: name } },
    }).collation({ locale: "en", strength: 2 });

    if (existFolder) {
      return res.status(409).json({
        message: "The folder name already exists.",
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
    const { _id, name, color, oldName } = req.body;

    if (name === oldName) {
      return res.status(409).json({
        message: "Please choose a different folder name.",
        type: "error",
      });
    }

    const validName = await folderNameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
        type: "error",
      });
    }

    const user = req.user;
    const existFolder = await User.findOne({
      _id: user.id,
      folders: { $elemMatch: { name: name } },
    }).collation({ locale: "en", strength: 2 });

    if (existFolder) {
      return res.status(409).json({
        message: "The folder name already exists.",
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
        message: "Folder updated successfully!",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async updateFile(req, res) {
    const folderId = req.params.folderId;
    const { _id, name, oldName } = req.body;

    if (name === oldName) {
      return res.status(409).json({
        message: "Please choose a different file name.",
        type: "error",
      });
    }

    const validName = await fileNameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
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

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const existFile = userData.folders[folderIndex].files.some(
      (file) => file.name.toLowerCase() === name.toLowerCase()
    );

    if (existFile) {
      return res.status(409).json({
        message: "The file name already exists.",
        type: "error",
      });
    }

    const fileIndex = userData.folders[folderIndex].files.findIndex(
      (folder) => folder._id.toString() === _id
    );

    userData.folders[folderIndex].files[fileIndex].name = name;

    try {
      await Folder.findOneAndUpdate({ userId: user.id }, userData);
      res.status(200).json({
        message: "File updated successfully!",
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

  static async getFile(req, res) {
    const { ObjectId } = mongoose.Types;
    const { folderId, fileId } = req.params;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    if (!ObjectId.isValid(fileId)) {
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

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const fileIndex = userData.folders[folderIndex].files.findIndex(
      (file) => file._id.toString() === fileId
    );

    if (fileIndex === -1) {
      return res.status(404).json({
        message: "File not found.",
        type: "error",
      });
    }

    const response = userData.folders[folderIndex].files[fileIndex];

    try {
      res.status(200).json({
        file: response,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
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

    const { name } = req.body;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    const validName = await fileNameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
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

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const existFile = userData.folders[folderIndex].files.some(
      (file) => file.name.toLowerCase() === name.toLowerCase()
    );

    if (existFile) {
      return res.status(409).json({
        message: "The file name already exists.",
        type: "error",
      });
    }

    const file = {
      _id: new ObjectId(),
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

  static async saveFileContent(req, res) {
    const { ObjectId } = mongoose.Types;
    const folderId = req.params.folderId;
    const { id, content } = req.body;

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

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const fileIndex = userData.folders[folderIndex].files.findIndex(
      (file) => file._id.toString() === id
    );

    if (fileIndex === -1) {
      return res.status(404).json({
        message: "File not found.",
        type: "error",
      });
    }

    userData.folders[folderIndex].files[fileIndex].content = content;

    try {
      await Folder.findOneAndUpdate({ userId: user.id }, userData);
      res.status(200).json({
        message: "File updated successfully!",
        type: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async deleteFile(req, res) {
    const { ObjectId } = mongoose.Types;
    const { folderId, fileId } = req.params;

    if (!ObjectId.isValid(folderId)) {
      return res.status(400).json({
        message: "Invalid ID",
        type: "error",
      });
    }

    if (!ObjectId.isValid(fileId)) {
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
        message: "Folder or file not found.",
        type: "error",
      });
    }

    const folderIndex = userData.folders.findIndex(
      (folder) => folder._id.toString() === folderId
    );

    const fileIndex = userData.folders[folderIndex].files.findIndex(
      (file) => file._id.toString() === fileId
    );

    userData.folders[folderIndex].files.splice(fileIndex, 1);

    try {
      await Folder.findOneAndUpdate({ userId: user.id }, userData);
      res.status(200).json({
        message: "File deleted successfully!",
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
