import nameValidation from "../helpers/validations/nameValidation.js";
import emailValidation from "../helpers/validations/emailValidation.js";
import passwordValidation from "../helpers/validations/passwordValidation.js";

import bcrypt from "bcrypt";
import User from "../models/User.js";

import createToken from "../helpers/createToken.js";

class AuthController {
  static login(req, res) {
    res.json();
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

    try {
      const newUser = await userModel.save();
      await createToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        type: "error",
      });
    }
  }
}

export default AuthController;
