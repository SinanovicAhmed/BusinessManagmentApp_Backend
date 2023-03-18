const express = require("express");
const router = express.Router();
const {
  getSuppliers,
  updateSupplier,
  addSupplier,
  getSupplierDetails,
} = require("../middleware/supplier");
const jwt = require("../middleware/JWT");

router.get("/get-suppliers", jwt.validateToken, getSuppliers);
router.get("/supplier-details/:id", jwt.validateToken, getSupplierDetails);
router.post("/add-supplier", jwt.validateToken, addSupplier);
router.put("/update-supplier/:id", jwt.validateToken, updateSupplier);

module.exports = router;
