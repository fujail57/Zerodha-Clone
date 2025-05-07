const express = require("express");
const authRouter = express.Router();

const authControllers = require("../controller/authenticationControllers");

authRouter.get("/signup", authControllers.handleGetSignup);
authRouter.post("/signup", authControllers.handlePostSignup);
authRouter.get("/login", authControllers.handleGetLogin);
authRouter.post("/login", authControllers.handlePostLogin);
authRouter.post("/logout", authControllers.handleLogout);
authRouter.get("/allusers", authControllers.handleGetAllUsers);

module.exports = authRouter;
