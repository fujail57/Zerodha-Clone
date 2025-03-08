const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = ordersSchema;
