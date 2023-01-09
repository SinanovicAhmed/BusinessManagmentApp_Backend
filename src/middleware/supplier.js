const Supplier = require("../models/supplierModel");

exports.getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
};
exports.updateSupplier = async (req, res) => {
  const id = req.params.id;
  const supplier = req.body;
  try {
    await Supplier.findByIdAndUpdate(id, supplier);
    res.json({ message: "Supplier is successfully updated" });
  } catch (err) {
    if (err.code === 11000)
      return res.status(409).json({
        message:
          "Duplicate value found. Check: suppliers name, email, UID, phone_number.",
      });
    res.status(400).json({ message: err.message });
  }
};

exports.addSupplier = async (req, res) => {
  const supplier = req.body;
  try {
    await Supplier.create(supplier);
    res.json({ message: "Supplier is successfully added" });
  } catch (err) {
    if (err.code === 11000)
      return res.status(409).json({
        message:
          "Duplicate value found. Check: suppliers name, email, UID, phone_number.",
      });
    res.status(400).json({ message: err.message });
  }
};
