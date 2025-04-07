const jwt = require("jsonwebtoken");

// function to verify Jsonwebtoken
const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json("Unauthorized: No token");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid User" });
  }
};

// function to generate jwt token
const generateToken = (userData) => {
  // generete new jwt token using userData
  return jwt.sign(userData, process.env.JWT_SECRET);
};

module.exports = { jwtAuthMiddleware, generateToken };
