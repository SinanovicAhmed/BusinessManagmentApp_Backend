const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getDashboardData } = require("../middleware/dashboard");

router.get("/get", jwt.validateTokenAdmin, getDashboardData);

module.exports = router;
