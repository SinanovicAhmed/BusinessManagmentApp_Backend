const mongoose = require("mongoose");

const suggestionSchema = mongoose.Schema({
  employee: {
    type: String,
    required: [true, "Employee id is missing"],
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  suggestion_title: {
    type: String,
    required: [true, "Suggedtion title is missing"],
  },
  suggestion: {
    type: String,
    required: [true, "Suggestion is missing"],
  },
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
