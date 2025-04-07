// Local module
const userDB = require("../model/usersModel");
const { jwtAuthMiddleware, generateToken } = require("../authentication/jwt");
const { request } = require("express");

exports.handleGetSignup = async (req, res, next) => {
  res.send("This is Signup page");
};

//  register user -> signup
exports.handlePostSignup = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  if (!body || !body.name || !body.email || !body.username || !body.password) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const signupUser = await userDB.create({
    name: body.name,
    email: body.email,
    username: body.username,
    password: body.password,
  });
  // payload
  const payload = {
    id: signupUser.id,
    username: signupUser.username,
  };
  // generate token
  const token = generateToken(payload);
  console.log("Result ", signupUser);
  return res.status(201).json({ msg: "Signup successfully", token: token });
};

// login
exports.handleGetLogin = async (req, res, next) => {
  res.send("This is Login page");
};

// post user login
exports.handlePostLogin = async (req, res, next) => {
  try {
    // extract username & password
    const { username, password } = req.body;
    // finsd user by username
    const User = await userDB.findOne({ username: username });
    if (!User || !(await User.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    //payload
    const payload = {
      id: User.id,
      username: User.username,
    };
    // genrete token
    const token = generateToken(payload);
    //cookie
    res.cookie("jwttoken", token, {
      httpOnly: true,
    });
    return res.status(200).json({ msg: "LogedIn successfully ", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

exports.handleGetAllUsers = async (req, res, next) => {
  res.send("All users");
};
