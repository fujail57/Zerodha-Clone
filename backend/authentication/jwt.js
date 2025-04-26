const jwt = require("jsonwebtoken");

// function to generate jwt token
const generateToken = (userData) => {
  // generete new jwt token using userData
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//  function to restric the route to logedIn user only
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "No token provided" });
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateToken, isAuthenticated };
