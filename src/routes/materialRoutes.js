const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const {
  getMaterials,
  addMaterial,
  updateMaterial,
} = require("../middleware/material");

router.get("/get-materials", getMaterials);
router.post("/add-material", addMaterial);
router.put("/update-material/:id", updateMaterial);
module.exports = router;
