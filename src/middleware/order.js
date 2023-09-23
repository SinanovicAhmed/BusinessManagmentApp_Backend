const Order = require("../models/orderModel");
const Material = require("../models/materialModel");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("supplier_id").populate("ordered_materials.material_id");

    res.json({ orders: orders });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOrder = async (req, res) => {
  const order_id = req.params.id;
  try {
    const order = await Order.findById(order_id)
      .populate("supplier_id")
      .populate("ordered_materials.material_id");

    res.json({ order: order });
  } catch (err) {
    res.status(500).json({ message: err.message });
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

exports.finishOrder = async (req, res) => {
  const orderedMaterials = req.body;
  try {
    //check if all materials exist in db
    for (const material of orderedMaterials) {
      const { material_id } = material;
      const existingMaterial = await Material.findOne({ _id: material_id });

      if (!existingMaterial) {
        return res.status(404).json({ message: "One or more materials not found." });
      }
    }
    //update material quantity after checking if they exist
    for (const material of orderedMaterials) {
      const { material_id, quantity } = material;

      const existingMaterial = await Material.findOne({ _id: material_id });
      existingMaterial.quantity += quantity;
      await existingMaterial.save();
    }

    res.json({ message: "Material quantity updated." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.changeOrderStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    const existingOrder = await Order.findOne({ _id: id });
    if (existingOrder) {
      existingOrder.order_status = status;
      await existingOrder.save();
      res.json({ order: existingOrder });
    } else {
      res.status(404).json({ message: "Order couldn't be found." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
