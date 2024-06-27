import jwt from "jsonwebtoken";
import getToken from "./getToken";

const verifyToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    const token = getToken(req);
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export default verifyToken;
