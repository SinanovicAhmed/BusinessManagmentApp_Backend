const jwt = require("../middleware/JWT");
const Employee = require("../models/employeeModel");

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json({ employees });
};

exports.addEmployee = async (req, res) => {
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
};
