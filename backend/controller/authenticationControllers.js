// Local module
const userDB = require("../model/usersModel");
const { generateToken } = require("../authentication/jwt");
const { request } = require("express");

exports.handleGetSignup = async (req, res, next) => {
  res.send("This is Signup page");
};

//  register user -> signup
exports.handlePostSignup = async (req, res, next) => {
  const { name, email, username, password } = req.body;
  try {
    if (!name || !email || !username || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const result = await userDB.create({
      name,
      email,
      username,
      password,
    });
    // console.log("Result:: ", result);
    return res.status(201).json({ msg: "Signup successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

// login page
exports.handleGetLogin = async (req, res, next) => {
  res.send("This is Login page");
};

// post user login ::::::::
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
    //store cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: false,
      // sameSite: "Lax", // or try "None" if still not working
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    return res.status(200).json({ msg: "LogedIn successfully ", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

// Handle Logout
exports.handleLogout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};


// for dev only
exports.handleGetAllUsers = async (req, res, next) => {
  res.send("All users");
};
