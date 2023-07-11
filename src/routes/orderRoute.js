const express = require("express");
const router = express.Router();
const { addOrder, getOrders } = require("../middleware/order");

router.get("/get-orders", getOrders);
router.post("/add-order", addOrder);

module.exports = router;
