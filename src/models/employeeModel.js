const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is missing!"],
    },
    surname: {
      type: String,
      required: [true, "Surname is missing!"],
    },
    contact_num: {
      type: String,
      required: [true, "Number is missing!"],
    },
    adress: {
      type: String,
      required: [true, "Adress is missing!"],
    },
    email_adress: {
      type: String,
      required: [true, "Email is missing!"],
      unique: true,
    },
    employment_date: {
      type: Date,
      required: [true, "Employment date is missing!"],
    },
    dismissal_date: {
      type: Date,
      required: [false, "Dismissal date is missing!"],
      default: new Date("Jan 1, 1970"),
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Employee", employeeSchema);
