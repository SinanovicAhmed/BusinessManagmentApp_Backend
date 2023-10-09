const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getMaterials, addMaterial, updateMaterial } = require("../middleware/material");

router.get("/get-materials", jwt.validateToken, getMaterials);
router.post("/add-material", jwt.validateToken, addMaterial);
router.put("/update-material/:id", jwt.validateToken, updateMaterial);
module.exports = router;
