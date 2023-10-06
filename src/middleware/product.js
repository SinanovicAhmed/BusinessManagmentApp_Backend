const Product = require("../models/productModel");
const Material = require("../models/materialModel");

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

exports.createProduct = async (req, res) => {
  const { materials_needed, product_id } = req.body;

  try {
    const materialIds = materials_needed.map((material) => material.material_id);
    const existingMaterials = await Material.find({ _id: { $in: materialIds } });

    // Check if all materials exist
    if (existingMaterials.length !== materials_needed.length) {
      return res.status(404).json({ message: "One or more materials not found." });
    }
    //update material quantity after checking if they exist
    for (const material of materials_needed) {
      const { material_id, quantity } = material;

      const existingMaterial = await Material.findOne({ _id: material_id });
      if (existingMaterial.quantity >= quantity) {
        existingMaterial.quantity -= quantity;
      } else {
        return res.status(422).json({ message: "You dont have enough " + existingMaterial.material_name });
      }
      await existingMaterial.save();
    }

    const createdProduct = await Product.findOne({ _id: product_id });
    createdProduct.quantity++;
    await createdProduct.save();
    res.status(200).json({ message: "You succesfully created product." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
