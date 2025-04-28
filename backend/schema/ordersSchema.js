const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode: String,
  },
  { timestamps: true }
);

module.exports = ordersSchema;
