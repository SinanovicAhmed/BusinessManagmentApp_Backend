const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
  supplier_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Supplier id is missing!"],
    ref: "Supplier",
  },
  material_name: {
    type: String,
    required: [true, "Material name is missing"],
  },
  min_quantity: {
    type: Number,
    required: [true, "Minimal quantity is missing"],
  },
  price: {
    type: Number,
    required: [true, "Price is missing"],
  },
  unit_of_measure: {
    type: String,
    required: [true, "Unit of measure is missing"],
  },
  in_use: {
    type: Boolean,
    required: [true, "In use is missing"],
  },
});

module.exports = mongoose.model("Material", materialSchema);
