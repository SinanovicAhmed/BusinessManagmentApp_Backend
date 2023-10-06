const express = require("express");
const router = express.Router();
const {
  getAllSuggestions,
  addSuggestion,
  getSuggestionByID,
  deleteSuggestionByID,
} = require("../middleware/suggestion");
const jwt = require("../middleware/JWT");

router.get("/get-all", getAllSuggestions);
router.get("/get-suggestion-byID/:id", getSuggestionByID);
router.post("/add-suggestion", addSuggestion);
router.delete("/delete-suggestion-byID/:id", deleteSuggestionByID);
module.exports = router;
