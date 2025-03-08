const mongoose = require("mongoose");
const ordersSchema = require("../schema/ordersSchema");

const ordersModel = mongoose.model("order", ordersSchema);

module.exports = ordersModel;
