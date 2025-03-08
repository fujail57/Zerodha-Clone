const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

// local modules
const { router } = require("./routes/dashboardRoutes");
// configurations
const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;

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

// routes

app.use(router);
// page not found
app.use((req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
