const Suggestion = require("../models/suggestionModel");

exports.getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().populate("employee_id");
    res.status(200).json({ suggestions: suggestions });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addSuggestion = async (req, res) => {
  const suggestion = req.body;
  try {
    await Suggestion.create(suggestion);
    res.status(200).json({ message: "You succesfully added your suggestion!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSuggestionByID = async (req, res) => {
  const employee_id = req.params.id;
  try {
    const suggestions = await Suggestion.find({ employee_id: employee_id }).populate("employee");
    res.status(200).json({ suggestions });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSuggestionByID = async (req, res) => {
  const suggestion_id = req.params.id;
  try {
    const result = await Suggestion.deleteOne({ _id: suggestion_id });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Suggestion with id: " + suggestion_id + " is deleted!" });
    } else {
      throw new Error("Suggestion with that id not found.");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
