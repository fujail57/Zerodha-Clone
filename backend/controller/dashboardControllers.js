// local modules
const holdingsModel = require("../model/holdingsModel");
const positionsModel = require("../model/positionsModel");
const ordersModel = require("../model/ordersModel");

exports.handleGetHomePage = async (req, res) => {
  res.send("This is home page");
  // console.log(res)
};

exports.handleGetAllHoldings = async (req, res) => {
  let allHoldings = await holdingsModel.find({});
  res.json(allHoldings);
};

exports.handleGetAllPositions = async (req, res) => {
  let allpositions = await positionsModel.find({});
  res.json(allpositions);
};

exports.handlePostNewOrder = async (req, res) => {
  const body = req.body;
  let newOrder = new ordersModel({
    name: body.name,
    qty: body.qty,
    price: body.price,
    mode: body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
};
