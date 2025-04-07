// External Module
const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

// local modules
const { router } = require("./routes/dashboardRoutes");
const authRouter = require("./routes/authenticationRoutes");
const passport = require("./authentication/auth");
const localAuthMiddleware = require("./authentication/localAuthMiddleware");
const { generateToken, jwtAuthMiddleware } = require("./authentication/jwt");

// configurations
const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;
// const JWT_SECRET = process.env.JWT_SECRET

const app = express();

//
app.use(cors());
app.use(bodyParser.json());

// Middleweare
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("Mongoose error ", err));

// authentication
app.use(passport.initialize());
// const localAuthMiddleware = passport.authenticate("local", { session: false });

// routes
app.use("/dashboard", jwtAuthMiddleware, router);
app.use("/auth", authRouter);
// page not found
app.use((req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
