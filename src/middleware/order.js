const Order = require("../models/orderModel");
const Supplier = require("../models/supplierModel");
const Material = require("../models/materialModel");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("supplier_id")
      .populate("ordered_materials.material_id");

    res.json({ orders: orders });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addOrder = async (req, res) => {
  const order = req.body;
  try {
    await Order.create(order);
    res.json({ message: "Order is successfully added" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
