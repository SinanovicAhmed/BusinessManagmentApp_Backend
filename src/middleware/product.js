const jwt = require("../middleware/JWT");
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("materials_needed.material");
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.addProduct = async (req, res) => {
  const product = req.body;
  try {
    await Product.create(product);
    res.json({ message: "Product is successfully added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
