import nameValidation from "../helpers/validations/nameValidation.js";
import emailValidation from "../helpers/validations/emailValidation.js";
import passwordValidation from "../helpers/validations/passwordValidation.js";

import bcrypt from "bcrypt";
import User from "../models/User.js";

import createToken from "../helpers/createToken.js";
import Folder from "../models/Folder.js";

class AuthController {
  static async login(req, res) {
    const { email, password, remember } = req.body;

    const validEmail = await emailValidation(email);
    if (validEmail !== "Valid email.") {
      return res.status(422).json({
        message: validEmail,
        type: "error",
      });
    }

    const validPasword = await passwordValidation(password, password);
    if (validPasword !== "Valid password.") {
      return res.status(422).json({
        message: validPasword,
        type: "error",
      });
    }

    let authUser = await User.findOne({ email: email });
    if (!authUser) {
      return res.status(422).json({
        message: "Email or password doesn't match.",
        type: "error",
      });
    }

    const authPassword = await bcrypt.compare(password, authUser.password);
    if (!authPassword) {
      return res.status(422).json({
        message: "Email or password doesn't match.",
        type: "error",
      });
    }

    if (remember === true) {
      authUser.remember = remember;
      await authUser.save();
    } else {
      authUser.remember = false;
      await authUser.save();
    }

    await createToken(authUser, req, res);
  }

  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const validName = await nameValidation(name);
    if (validName !== "Valid name.") {
      return res.status(422).json({
        message: validName,
        type: "error",
      });
    }

    const validEmail = await emailValidation(email);
    if (validEmail !== "Valid email.") {
      return res.status(422).json({
        message: validEmail,
        type: "error",
      });
    }

    const existEmail = await User.findOne({ email: email });

    if (existEmail) {
      return res.status(409).json({
        message: "Email already exists.",
        type: "error",
      });
    }

    const validPasword = await passwordValidation(password, confirmPassword);
    if (validPasword !== "Valid password.") {
      return res.status(422).json({
        message: validPasword,
        type: "error",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const userModel = new User({
      name,
      email,
      password: passwordHash,
    });

    const foldersContainer = new Folder({
      name,
      userId: userModel._id,
      folders: [],
    });

    try {
      await foldersContainer.save();
      const newUser = await userModel.save();
      await createToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }

  static async authUser(req, res) {
    const data = await req.user;

    res.status(200).json({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        folders: data.folders,
      },
    });
  }
}

export default AuthController;
