const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
    },
    avg: {
      type: Number,
    },
    price: {
      type: Number,
    },
    net: {
      type: String,
    },
    day: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = holdingsSchema;
