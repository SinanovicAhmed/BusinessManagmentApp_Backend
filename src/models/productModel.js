const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Product name is missing"],
  },
  product_desc: {
    type: String,
    required: [true, "Product description is missing"],
  },
  quantity: {
    type: Number,
    default: 0,
  },

  materials_needed: {
    type: [
      {
        material: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "Material ID is missing"],
          ref: "Material",
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is missing"],
        },
      },
    ],
    validate: {
      validator: function (array) {
        return array.length > 0;
      },
      message: "At least one material must be added to product",
    },
    required: [true, "Add materials needed for product"],
  },
});

module.exports = mongoose.model("Product", productSchema);
