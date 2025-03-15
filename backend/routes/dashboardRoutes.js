const express = require("express");
const router = express.Router();

// local module
const dashboardControllers = require("../controller/dashboardControllers");

router.get("/", dashboardControllers.handleGetHomePage)
router.get("/allHoldings", dashboardControllers.handleGetAllHoldings);
router.get("/allpositions", dashboardControllers.handleGetAllPositions);
// router.get("/addHoldings", dashboardControllers.handleAddHoldings);
router.post("/newOrder", dashboardControllers.handlePostNewOrder)

module.exports = { router };
