const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema(
  {
    supplier_name: {
      type: String,
      required: [true, "Supplier name is missing"],
      unique: true,
    },
    UID: {
      type: Number,
      required: [true, "Supplier UID is missing"],
      unique: true,
    },
    VAT: {
      type: Number,
      required: [true, "VAT(PDV) is missing"],
    },
    phone_number: {
      type: Number,
      required: [true, "Supplier phone number is missing"],
      unique: true,
    },
    contact_person: {
      type: String,
      required: [true, "Supplier contact person is missing"],
    },
    email_adress: {
      type: String,
      required: [true, "Supplier email is missing"],
      unique: true,
    },
    starting_date: {
      type: String,
      required: [true, "Supplier starting date is missing"],
    },
    ending_date: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Supplier", supplierSchema);
