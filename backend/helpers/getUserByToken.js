import jwt from "jsonwebtoken";

import User from "../models/User.js";
import getToken from "./getToken.js";

const getUserByToken = async (req) => {
  try {
    const token = getToken(req);

    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    const userId = decoded.id;
    const user = await User.findById(userId);

    return user;
  } catch (error) {
    res.status(401).json({
      message: "Invalid token.",
      type: "error",
    });
  }
};

export default getUserByToken;
