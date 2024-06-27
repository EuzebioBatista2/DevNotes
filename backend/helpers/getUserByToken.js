import jwt from "jsonwebtoken";

import User from "../models/User";

const getTokenByUser = async (token, req, res) => {
  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    const userId = decoded.id;
    const user = await User.findById(userId);

    return user;
  } catch (error) {
    res.status(201).json({
      message: "Unauthorized access.",
      type: "error",
    });
  }
};

export default getTokenByUser;
