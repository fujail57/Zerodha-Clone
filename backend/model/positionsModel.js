const mongoose = require("mongoose");
const positionsSchema = require("../schema/positionsSchema");

const positionsModel = mongoose.model("position", positionsSchema);

module.exports = positionsModel;
