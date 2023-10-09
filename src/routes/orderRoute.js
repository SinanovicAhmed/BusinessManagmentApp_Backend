const express = require("express");
const router = express.Router();
const { addOrder, getOrders, finishOrder, getOrder, changeOrderStatus } = require("../middleware/order");
const jwt = require("../middleware/JWT");

router.get("/get-orders", jwt.validateToken, getOrders);
router.get("/get-order/:id", jwt.validateToken, getOrder);
router.post("/add-order", jwt.validateToken, addOrder);
router.patch("/finish-order", jwt.validateToken, finishOrder);
router.patch("/update-orderstatus", jwt.validateToken, changeOrderStatus);

module.exports = router;
