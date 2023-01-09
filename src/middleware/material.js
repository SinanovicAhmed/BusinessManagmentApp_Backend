const jwt = require("../middleware/JWT");
const Material = require("../models/materialModel");

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addMaterial = async (req, res) => {
  const material = req.body;
  try {
    await Material.create(material);
    res.json({ message: "Material added successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  const id = req.params.id;
  const material = req.body;
  try {
    await Material.findByIdAndUpdate(id, material);
    res.json({ message: "Material is successfully updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
