const mongoose = require("mongoose");
const holdingsSchema = require("../schema/holdingsSchema");

const holdingsModel = mongoose.model("holding", holdingsSchema);

module.exports = holdingsModel;

// create schema and modle for positions and orders
