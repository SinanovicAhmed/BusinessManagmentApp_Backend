const Employee = require("../models/employeeModel");
const express = require("express");
const router = express.Router();
const {
  createToken,
  validateToken,
  validateTokenAdmin,
} = require("../middleware/JWT");

router.get("/getAll", validateTokenAdmin, async (req, res) => {
  const employees = await Employee.find();
  res.json({ employees });
});

router.post("/add-employee", validateTokenAdmin, async (req, res) => {
  const employee = req.body;
  try {
    await Employee.create(employee);
    res.json({ message: "Employee successfuly saved to DB" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
