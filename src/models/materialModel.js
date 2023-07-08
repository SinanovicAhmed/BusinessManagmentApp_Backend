const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
  material_name: {
    type: String,
    required: [true, "Material name is missing"],
  },
  min_quantity: {
    type: Number,
    required: [true, "Minimal quantity is missing"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is missing"],
  },
  unit_of_measure: {
    type: String,
    required: [true, "Unit of measure is missing"],
  },
});

module.exports = mongoose.model("Material", materialSchema);
