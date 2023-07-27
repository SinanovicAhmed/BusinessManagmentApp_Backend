const express = require("express");
const router = express.Router();
const {
  addOrder,
  getOrders,
  finishOrder,
  getOrder,
  changeOrderStatus,
} = require("../middleware/order");

router.get("/get-orders", getOrders);
router.get("/get-order/:id", getOrder);
router.post("/add-order", addOrder);
router.patch("/finish-order", finishOrder);
router.patch("/update-orderstatus", changeOrderStatus);

module.exports = router;
