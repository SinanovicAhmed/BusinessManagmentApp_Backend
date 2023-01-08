const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Employee id is missing!"],
    ref: "Employee",
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is missing!"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is missing!"],
  },
  role: {
    type: String,
    required: [true, "Role is missing!"],
  },
});

module.exports = mongoose.model("User", userSchema);
