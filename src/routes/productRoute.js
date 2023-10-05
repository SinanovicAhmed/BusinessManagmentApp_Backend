const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getAllProducts, addProduct, createProduct } = require("../middleware/product");

router.get("/get-all", getAllProducts);
router.post("/add-product", addProduct);
router.patch("/create-product", createProduct);
module.exports = router;
