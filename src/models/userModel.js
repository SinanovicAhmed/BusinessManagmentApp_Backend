import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  worker_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Worker id is missing!"],
    ref: "Worker",
  },
  username: {
    type: String,
    required: [true, "Username is missing!"],
  },
  password: {
    type: String,
    required: [true, "Password is missing!"],
  },
  role: {
    type: String,
    required: [true, "Role id is missing!"],
  },
});

module.exports = mongoose.model("User", userSchema);
