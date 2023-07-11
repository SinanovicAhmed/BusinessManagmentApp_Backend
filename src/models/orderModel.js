const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Supplier ID is missing"],
      ref: "Supplier",
    },
    ordered_materials: {
      _id: false,
      type: [
        {
          material_id: {
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
    },
    order_status: {
      type: String,
      required: [true, "Order status is missing"],
    },
    expected_arrival: {
      type: Date,
      required: [true, "Expected arrival is missing"],
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Order", orderSchema);
