const getToken = (req) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.spli(" ")[1];
  return token;
};

export default getToken;
