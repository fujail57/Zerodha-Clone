const jwt = require("jsonwebtoken");

// function to generate jwt token
const generateToken = (userData) => {
  // generete new jwt token using userData
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//  function to restric the route to logedIn user only
const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ message: "No token provided", status: false });
  // Validate token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    // res.json({ status: true, user: decoded.name });
    next();
  } catch (error) {
    // console.log(error);
    res.status(401).json({ message: "Invalid token", status: false });
  }
};

module.exports = { generateToken, isAuthenticated };
