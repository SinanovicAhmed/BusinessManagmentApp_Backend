const express = require("express");
const router = express.Router();
const {
  getSuppliers,
  updateSupplier,
  addSupplier,
} = require("../middleware/supplier");
const jwt = require("../middleware/JWT");

router.get("/get-suppliers", jwt.validateToken, getSuppliers);
router.post("/add-supplier", jwt.validateToken, addSupplier);
router.put("/update-supplier/:id", jwt.validateToken, updateSupplier);
module.exports = router;
