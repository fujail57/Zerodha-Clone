const mongoose = require("mongoose");
const userSchema = require("../schema/usersSchema");

const userDB = mongoose.model("user", userSchema);

module.exports = userDB;
