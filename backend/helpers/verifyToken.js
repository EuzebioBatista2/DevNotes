import jwt from "jsonwebtoken";
import getToken from "./getToken.js";

const verifyToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Unauthorized access.",
        type: "error",
      });
    }

    const token = getToken(req);
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired.",
        type: "error",
      });
    }
    res.status(400).json({
      message: "Invalid token.",
      type: "error",
    });
  }
};

export default verifyToken;
