import jwt from "jsonwebtoken";

const createToken = async (user, req, res) => {
  let expire = "30s";
  if (user.remember && user.remember === true) {
    expire = "30d";
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: expire }
  );

  res.status(201).json({
    message: "You are authenticated",
    type: "success",
    token: token,
  });
};

export default createToken;
