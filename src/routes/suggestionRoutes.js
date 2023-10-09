const express = require("express");
const router = express.Router();
const {
  getAllSuggestions,
  addSuggestion,
  getSuggestionByID,
  deleteSuggestionByID,
} = require("../middleware/suggestion");
const jwt = require("../middleware/JWT");

router.get("/get-all", jwt.validateTokenAdmin, getAllSuggestions);
router.get("/get-suggestion-byID/:id", jwt.validateToken, getSuggestionByID);
router.post("/add-suggestion", jwt.validateToken, addSuggestion);
router.delete("/delete-suggestion-byID/:id", jwt.validateToken, deleteSuggestionByID);
module.exports = router;
