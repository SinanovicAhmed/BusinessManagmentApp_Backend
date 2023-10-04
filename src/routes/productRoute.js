const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getAllProducts, addProduct } = require("../middleware/product");

router.get("/get-all", getAllProducts);
router.post("/add-product", addProduct);
module.exports = router;
