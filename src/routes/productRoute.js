const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getAllProducts, addProduct, createProduct } = require("../middleware/product");

router.get("/get-all", jwt.validateToken, getAllProducts);
router.post("/add-product", jwt.validateToken, addProduct);
router.patch("/create-product", jwt.validateToken, createProduct);
module.exports = router;
